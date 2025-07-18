import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { cx } from '../utils'
import Header from '../components/Header'
import Footer from '../components/Footer'
import siteMetadata from '../utils/siteMetaData'
import ThemeScript from '../components/ThemeScript'

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: siteMetadata.locale,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageIndex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark")}
      >
        {/* <ThemeScript /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
