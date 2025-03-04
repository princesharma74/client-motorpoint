"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navItems } from "@/config/site"
import { Logo } from "@/components/logo/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="flex justify-center px-4 sm:px-6 lg:px-8 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo/>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 py-4">
              <div onClick={() => setIsOpen(false)}>
              <Logo/>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex py-2 text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary")}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href={'#contact'}>
            <Button>Get a Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}