export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Uply</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Monitor uptime and detect critical content changes in real time.
        </p>
        <a
          href="/app"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Go to App
        </a>
      </section>

      {/* Why Uply */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Why Uply?</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <span className="font-semibold">Engineers</span> — Track endpoint health and inspect uptime trends.
          </li>
          <li>
            <span className="font-semibold">PMs</span> — Catch regressions and broken flows before your users do.
          </li>
          <li>
            <span className="font-semibold">Founders</span> — Get alerts when your core workflows change.
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Add a URL</h3>
            <p>Choose a page or endpoint you want Uply to monitor.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. We Monitor It</h3>
            <p>We check for uptime and detect real content changes over time.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Get Alerts</h3>
            <p>Stay ahead of bugs, regressions, or unexpected edits.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
        <p className="mb-2">Free while in early access.</p>
        <p className="text-gray-600">Paid tiers coming soon for teams and APIs.</p>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-2xl mx-auto text-sm text-gray-500">
        <p className="mb-1">
          Uply is built by Anthony Zotti — ex-Google, Walmart Labs, and Peloton. It started as a tool for engineers but is evolving into a broader platform for monitoring change.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Uply • Built with <span className="text-black">/</span>
        </p>
      </footer>
    </main>
  )
}