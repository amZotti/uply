from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class StatusCheck(Base):
    __tablename__ = "status_checks"

    id = Column(Integer, primary_key=True)
    url = Column(String)
    status = Column(String)
    status_code = Column(Integer)
    timestamp = Column(DateTime, default=datetime.utcnow)