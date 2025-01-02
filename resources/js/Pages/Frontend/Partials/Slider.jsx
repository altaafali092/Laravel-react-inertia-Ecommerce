'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const images = [
  "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
  "https://plus.unsplash.com/premium_photo-1668799886418-2335be7716e9?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
]

const Slider = () => {
  return (
    <Carousel className="w-full h-screen relative">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="w-full h-full">
              <CardContent className="relative p-0 w-full h-[30rem]">
                {/* Image */}
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Previous and Next Buttons */}
                <CarouselPrevious
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-600 hover:bg-red-700 text-white p-3 rounded-full shadow focus:outline-none"
                >
                  Prev
                </CarouselPrevious>

                <CarouselNext
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 hover:bg-red-700 text-white p-3 rounded-full shadow focus:outline-none"
                >
                  Next
                </CarouselNext>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Slider
