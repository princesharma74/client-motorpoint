"use client"

import * as React from "react"
import { contactInfo, navItems } from "@/config/site"
import Link from "next/link"

function Footer() {

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Motorpoint</h2>
            <p className="mb-6 text-muted-foreground">
            Melbourne&apos;s Trusted Choice for Eco-Friendly Hybrid, Diesel & Petrol Vans
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {
                navItems.map((item)=>(
                  <Link key={item.href} href={item.href} className="block transition-colors hover:text-primary">
                    {item.title}
                  </Link>
                ))
              }
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{contactInfo.address}</p>
              <p>Phone: <Link href={`tel:${contactInfo.phoneNumber}`}>{contactInfo.phoneNumber}</Link></p>
              <p>Email: <Link href={`mailto:${contactInfo.emailId}`}>{contactInfo.emailId}</Link></p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Motorpoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }