import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import Script from "next/script"
import { siteMetadata } from "../lib/site-metadata"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary",
    creator: `@${siteMetadata.social.twitter}`,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased text-gray-900">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.gaMeasurementId}');
          `}
        </Script>
      </body>
    </html>
  )
}
