import './globals.css'

export const metadata = {
  title: 'Uply',
  description: 'Monitor uptime and detect critical content changes in real time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}