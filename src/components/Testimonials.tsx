"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const testimonials = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. Tempora commodi placeat explicabo asperiores veritatis. Rem nobis alias quas repellat possimus maxime neque laboriosam non animi laborum, provident officia?",
      name: "John Doe",
      title: "CEO",
      company: "Company Name",
      image: "https://via.placeholder.com/150",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. Tempora commodi placeat explicabo asperiores veritatis. Rem nobis alias quas repellat possimus maxime neque laboriosam non animi laborum, provident officia?",
      name: "John Doe",
      title: "CEO",
      company: "Company Name",
      image: "https://via.placeholder.com/150",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. Tempora commodi placeat explicabo asperiores veritatis. Rem nobis alias quas repellat possimus maxime neque laboriosam non animi laborum, provident officia?",
      name: "John Doe",
      title: "CEO",
      company: "Company Name",
      image: "https://via.placeholder.com/150",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. Tempora commodi placeat explicabo asperiores veritatis. Rem nobis alias quas repellat possimus maxime neque laboriosam non animi laborum, provident officia?",
      name: "John Doe",
      title: "CEO",
      company: "Company Name",
      image: "https://via.placeholder.com/150",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. Tempora commodi placeat explicabo asperiores veritatis. Rem nobis alias quas repellat possimus maxime neque laboriosam non animi laborum, provident officia?",
      name: "John Doe",
      title: "CEO",
      company: "Company Name",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex flex-col justify-center items-center">
              <p className="text-center py-8 md:px-80">{testimonial.review}</p>
              <div className="flex items-center justify-center py-2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={16}
                  height={9}
                  className="rounded-full h-20 w-20"
                />
                <div className="md:p-8 p-3">
                  <p>{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
