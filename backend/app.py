from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
import httpx
from sqlalchemy.future import select

from .db import init_db, SessionLocal
from .models import StatusCheck

app = FastAPI()

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await init_db()

@app.get("/check")
async def check_url(url: str):
    try:
        async with httpx.AsyncClient(timeout=5) as client:
            response = await client.get(url)
            status = "UP" if response.status_code < 400 else "DOWN"
            code = response.status_code
    except Exception:
        status = "DOWN"
        code = None

    async with SessionLocal() as session:
        check = StatusCheck(
            url=url,
            status=status,
            status_code=code,
            timestamp=datetime.utcnow()
        )
        session.add(check)
        await session.commit()

    return {"url": url, "status": status, "status_code": code}

@app.get("/recent")
async def get_recent():
    async with SessionLocal() as session:
        result = await session.execute(
            select(StatusCheck).order_by(StatusCheck.timestamp.desc()).limit(20)
        )
        checks = result.scalars().all()
        return JSONResponse([
            {
                "url": c.url,
                "status": c.status,
                "status_code": c.status_code,
                "timestamp": c.timestamp.isoformat()
            } for c in checks
        ])