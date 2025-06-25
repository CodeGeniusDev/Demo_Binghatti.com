"use client"
import React from "react"
import LogoCarousel from "./ui/logo-carousel"

export function LogoCarouselDemo() {
  return (
    <div className="w-full bg-gray-600/80 backdrop-blur-sm py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The best are already here
          </h1>
          <a 
            href="https://www.newcult.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:text-gray-200 transition-colors duration-200">
              Join new cult
            </h2>
          </a>
        </div>
        
        <div className="w-full max-w-6xl mx-auto">
          <LogoCarousel 
            columnCount={3} 
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoCarouselDemo

