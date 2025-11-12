import './globals.css'

export const metadata = {
  title: 'NFSU Cybersecurity Conference 2025',
  description: 'Securing the Digital Future - December 2nd, 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
