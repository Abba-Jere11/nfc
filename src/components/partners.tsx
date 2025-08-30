"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function Partners() {
  const subsidiaries = [
    {
      id: 1,
      name: "Yobe State Government",
      description:
        "Committed to driving agricultural transformation in Yobe State through strategic policies, infrastructure development, and public-private partnerships that support sustainable food production and rural development.",
      image: "/yobe-state-removebg-preview.png",
      
    },
    {
      id: 2,
      name: "ACReSAL",
      description:
        "Focused on building climate resilience in agriculture by supporting land restoration, sustainable water management, and farmer adaptation programs across Yobe State’s semi-arid regions.",
      image: "/acccc.png",
      
    },
    {
      id: 3,
     
      name: "Thinklab Agro Allied",
      description:
        "A forward-thinking agricultural solutions provider delivering certified seeds, organic fertilizers, and modern farming equipment to boost productivity and support smart farming practices in the region.",
      
      image: "/Thinklab .png",
     
    },
    {
      id: 4,
      name: "Federal Ministry Of Agriculture",
      description:
        "Enhancing soil health and crop yields through the production and distribution of high-quality fertilizers tailored to the unique agricultural conditions of Yobe State.",
      image: "/Logo-emblem.webp",
      
    },
    {
      id: 5,
      name: "RAAMP",
      description:
        "Improving rural road infrastructure and access to markets, enabling farmers to transport produce efficiently while strengthening local agricultural economies.",
      image: "/cropped-fav.webp",
      
    },
  ]
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 384 + 24 // Card width (w-96 = 384px) + gap (gap-6 = 24px)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-800">Partners</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           At Nigerian Foods Corporation, we collaborate with a network of dedicated partners—ranging from agribusiness experts to food processors, marketers, and development organizations—all working together to transform Yobe State’s role in Nigeria’s food system. These partnerships strengthen every link in the agricultural value chain, driving innovation, productivity, and sustainable growth.


          </p>
        </div>
        {/* Subsidiaries Horizontal Scroll */}
        <div className="relative">
          {/* Left Chevron */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          {/* Right Chevron */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {subsidiaries.map((subsidiary) => (
              <div
                key={subsidiary.id}
                className="flex-none w-96 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 snap-start bg-white"
              >
                <div className="relative h-64 w-60 overflow-hidden rounded-t-lg justify-center mx-auto">
                  <img
                    src={subsidiary.image || "/placeholder.svg"}
                    alt={subsidiary.name}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <Card className="rounded-t-none border-none shadow-none">
                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">{subsidiary.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {subsidiary.description}
                    </CardDescription>
                   
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
