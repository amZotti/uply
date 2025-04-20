export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="text-center py-24 px-6 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Uply</h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Monitor uptime and detect critical content changes in real time.
        </p>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Uply?</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-left">
          <p><strong>Engineers</strong> — Track endpoint health and inspect uptime trends.</p>
          <p><strong>PMs</strong> — Catch regressions and broken flows before your users do.</p>
          <p><strong>Founders</strong> — Get alerts when your core workflows change.</p>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Add a URL</h3>
            <p>Choose a page or endpoint you want Uply to monitor.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. We Monitor It</h3>
            <p>We check for uptime and detect real content changes over time.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Get Alerts</h3>
            <p>Stay ahead of bugs, regressions, or unexpected edits.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <p className="mb-2">Free while in early access.</p>
        <p>Paid tiers coming soon for teams and APIs.</p>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        <p className="mb-2">
          Uply is built by Anthony Zotti — ex-Google, Walmart Labs, and Peloton.
          It started as a tool for engineers but is evolving into a broader platform for monitoring change.
        </p>
        <p>© 2025 Uply • Built with <span className="italic">/</span></p>
      </footer>
    </main>
  )
}