"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { fleetCategories } from "@/config/site";

function Fleet() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <section id="fleet" className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-3xl font-regular text-center">
            Trusted by hundreds, we provide a wide range of reliable 1, 2, and 3-ton vans to meet all your rental needs.
            </h2>
          </div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {fleetCategories
                .flatMap((category) => category.vans)
                .map((van, index) => (
                  <CarouselItem className="lg:basis-1/2" key={index}>
                    <div className="bg-muted rounded-md h-full lg:col-span-2 p-0 pb-2 md:p-6 flex justify-between flex-col shadow-lg">
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={van.image || "/placeholder.svg"}
                          alt={van.name}
                          fill
                          className="object-cover rounded-t-md"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-md">
                          <h4 className="text-white text-xl font-bold">
                            {van.name}{" "}
                            <span className="text-sm font-normal">
                              ({van.year})
                            </span>
                          </h4>
                          <p className="text-white/90">{van.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end p-4 md:p-0">
                        <div className="flex gap-4">
                          <div className="text-sm">
                            <span className="block text-gray-500">Cargo</span>
                            <span className="font-medium">
                              {van.specs.cargoSpace}
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="block text-gray-500">Fuel</span>
                            <span className="font-medium">
                              {van.specs.fuelType}
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="block text-gray-500">Year</span>
                            <span className="font-medium">
                              {van.specs.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export { Fleet };
