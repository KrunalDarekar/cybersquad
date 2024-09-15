import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

const newsItems = [
  {
    title: "New Cybersecurity Threats Emerge in 2024",
    content: "Experts warn of sophisticated AI-driven attacks targeting critical infrastructure. Learn about the latest threats and how to protect your organization.",
    image: "https://g-6d1m8at3r7v.vusercontent.net/placeholder.svg",
    link: "https://www.cybersecuritynews.com/new-threats-2024"
  },
  {
    title: "Cybersquad Launches Advanced Penetration Testing Service",
    content: "Our team introduces a cutting-edge penetration testing service that simulates real-world cyber attacks to identify vulnerabilities in your systems.",
    image: "https://g-6d1m8at3r7v.vusercontent.net/placeholder.svg",
    link: "https://www.techcrunch.com/cybersquad-pentest-service"
  },
  {
    title: "The Rise of Quantum Computing: Implications for Cybersecurity",
    content: "Quantum computing is set to revolutionize the tech industry. Discover how it will impact current encryption methods and what it means for future cybersecurity.",
    image: "https://g-6d1m8at3r7v.vusercontent.net/placeholder.svg",
    link: "https://www.wired.com/quantum-computing-cybersecurity"
  },
  {
    title: "Cybersquad Recognized as Top Cybersecurity Firm",
    content: "We're proud to announce that Cybersquad has been named one of the top cybersecurity firms of 2024 by industry experts. Read about our achievements and future plans.",
    image: "https://g-6d1m8at3r7v.vusercontent.net/placeholder.svg",
    link: "https://www.forbes.com/cybersquad-top-firm-2024"
  }
]

export default function NewsSection() {
  return (
    <section className="py-12 bg-gray-50" >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">Latest News</h2>
        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden md:max-h-96">
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <Button variant="outline" className="inline-flex items-center">
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}