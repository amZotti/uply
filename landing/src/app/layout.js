export const metadata = {
  title: 'Uply - Track Uptime & Changes with Precision',
  description: 'Uply monitors uptime and tracks content changes for critical URLs. Ideal for engineers, PMs, and competitive intelligence teams.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}