import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rohan Bin Ejaz | Portfolio",
  description: "Computer Science student, Web Developer, Digital Marketer, and Photographer from Rawalpindi, Pakistan",
  keywords: "Rohan Bin Ejaz, Computer Science, Web Developer, Digital Marketing, Photography, NUML, Rawalpindi",
  icons: {
    icon: "/assets/img/masonry-portfolio/11111.jpg", // Correct: uses forward slashes
    apple: "/assets/img/masonry-portfolio/11111.jpg", // Correct: uses forward slashes
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
