"use client"
import React from 'react'
import { useState } from 'react'
import { VanShowcase } from './van-showcase'
import { motion } from "framer-motion"
import { fleetCategories } from '@/config/site'


export const About = () => {
    const [activeTab, setActiveTab] = useState("mercedes")
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
      }

    const activeCategory = fleetCategories.find((category) => category.id === activeTab)
  return (
    <section className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-4 mb-8">
      <div className="text-center">
        <motion.h2
          className="text-base text-primary font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        About
        </motion.h2>
        <motion.p
          className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
        Melbourne&apos;s Trusted Choice for Vans 
        </motion.p>
        <motion.p
          className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Your reliable partner for van rentals built for Power, Efficiency, and Versatility. We have fleet of modern, well-maintained vans to suit your specific needs.
        </motion.p>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {fleetCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleTabChange(category.id)}
            className={`px-6 py-3 rounded-full text-sm transition-colors ${
              activeTab === category.id
                ? "bg-primary text-white"
                : "bg-muted text-primary hover:bg-muted/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div>{activeCategory && <VanShowcase vans={activeCategory.vans} />}</div>
    </section>
  );
}
