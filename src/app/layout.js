import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pip Witheridge',
  description: 'Personal Blog of Pip Witheridge. Book reviews and thoughts on all sorts of things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Rw0Vf2ENY8WpRhFAMnSeXewDqp4c9S2nZbc6LbqYyJc" />
      </head>
      <body className={inter.className}> 
      <div className="container col-xl-7 col-lg-8 col md-12 pb-5" style={{marginTop: 20}}>
        {children}
      </div>
      </body>
    </html>
  )
}
