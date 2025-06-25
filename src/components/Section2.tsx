"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/Image/img1.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/Image/img2.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/Image/img3.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/Image/img4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-screen py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center">
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselDemo;

