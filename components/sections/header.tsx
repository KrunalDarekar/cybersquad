'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    return(
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Cybersquad
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About Us</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <Link href="/news" className="hover:text-blue-600">News</Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/about" className="hover:text-blue-600">About Us</Link>
                <Link href="/services" className="hover:text-blue-600">Services</Link>
                <Link href="/news" className="hover:text-blue-600">News</Link>
              </div>
            </div>
          )}
        </header>
    )
}