export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 text-center">
      <section className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">Uply</h1>
        <p className="text-xl mb-6 text-gray-700">
          Monitor uptime and detect critical content changes — in real-time.
        </p>
        <a
          href="https://app.getuply.dev"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Go to App
        </a>
      </section>

      <section className="mt-20 max-w-3xl w-full text-left">
        <h2 className="text-2xl font-semibold mb-4">Why Uply?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>Check uptime and latency of key endpoints</li>
          <li>Track content and DOM changes over time</li>
          <li>Get alerts when something breaks or shifts</li>
        </ul>
      </section>

      <section className="mt-20 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <p className="text-gray-700 mb-2">Free while in early access.</p>
        <p className="text-gray-500">Paid tiers coming soon for teams and APIs.</p>
      </section>

      <footer className="mt-32 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Uply &middot; Built with 💻
      </footer>
    </main>
  )
}
