import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/Toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StraySync - Help Stray Animals Find Their Way",
  description:
    "StraySync helps you locate and track stray animals in your area. Pin locations, upload photos, and connect with others to help our furry friends.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'