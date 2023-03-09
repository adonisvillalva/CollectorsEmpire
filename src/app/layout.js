import '@/styles/globals.scss'

import Head from './components/head'
import Header from './components/header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
