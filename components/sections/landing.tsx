"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function CybersquadLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center mb-32 mt-24">
          <h1 className="text-4xl font-bold mb-4">Welcome to Cybersquad</h1>
          <p className="text-xl mb-8">Your trusted partner in cybersecurity</p>
          <Button size="lg">Learn More</Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Penetration Testing", "Security Audits", "Incident Response"].map((service) => (
              <Card key={service}>
                <CardHeader>
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Description of {service.toLowerCase()} service.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <p className="italic">"Cybersquad provided excellent security solutions for our company."</p>
                  <p className="mt-4 font-semibold">- Client {i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <Avatar className='w-full h-full'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold">Team Member {i}</h3>
                  <p className="text-sm text-gray-600">Position</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}