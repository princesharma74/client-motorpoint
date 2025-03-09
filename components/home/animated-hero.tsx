"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo, heroItems } from "@/config/site";
import Link from "next/link";
import { HeroBookingForm } from "./book-form";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => heroItems.options,
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="#fleet" className="mx-auto px-4 sm:px-6 lg:px-8 m-20">
      <div className="container flex flex-col md:flex-row justify-between mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular">
              <span className="text-spektr-cyan-50">{heroItems.title}</span>
              <span className="relative flex w-full overflow-hidden md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl">{heroItems.subheadline}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <Link href={`https://wa.me/${contactInfo.leadContact}`}>
            <Button size="lg" className="gap-4 w-full border-black" variant="outline">
                Chat With Us 
                  {/* <Image src="/whatsapp.svg" width={30} height={30} alt="whatsapp logo" /> */}
                  <PhoneCall className="w-4 h-4" />
            </Button>
            </Link>
            <Link href="#contact">
            <Button size="lg" className="gap-4 w-full">
              Get a quote<MoveRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
        <div className=" md-full md:w-1/3">
        <HeroBookingForm/>
        </div>
      </div>
    </section>
  );
}

export { Hero };
