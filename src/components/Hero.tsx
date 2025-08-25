"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroContainer, staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { WashingMachine, Droplets, Shirt, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-950 via-purple-900 to-black" />

      <div className="absolute -top-32 -left-24 w-[38rem] h-[38rem] gradient-orb gradient-orb--primary drift" />
      <div className="absolute -bottom-24 -right-24 w-[34rem] h-[34rem] gradient-orb gradient-orb--magenta float-slow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] gradient-orb gradient-orb--cyan drift" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24"
      >
        <motion.p variants={fadeInUp} className="text-cyan-300/90 text-sm font-medium tracking-wide uppercase">
          Premium Laundry Service
        </motion.p>

        <motion.h1
          variants={heroContainer}
          className="mt-4 text-5xl sm:text-6xl font-extrabold leading-tight text-gradient"
        >
          Fresh & Clean, Every Time
        </motion.h1>

        <motion.p variants={fadeInUp} className="mt-6 text-lg text-white/80 max-w-2xl">
          Experience the future of laundry care with our eco-friendly processes and lightning-fast service.
        </motion.p>

        <motion.div variants={scaleIn} className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button>
            Schedule Pickup
          </Button>
          <Button variant="secondary">
            Learn More
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-14 grid grid-cols-4 gap-4 max-w-md text-white/90"
        >
          <IconBadge>
            <WashingMachine className="h-5 w-5" />
          </IconBadge>
          <IconBadge>
            <Droplets className="h-5 w-5" />
          </IconBadge>
          <IconBadge>
            <Shirt className="h-5 w-5" />
          </IconBadge>
          <IconBadge>
            <Sparkles className="h-5 w-5" />
          </IconBadge>
        </motion.div>
      </motion.div>
      <div className="pointer-events-none fixed left-0 top-0 h-0 w-full origin-left scroll-progress" id="scroll-progress" />
    </section>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ rotate: 5 }} className="glass-card p-3 flex items-center justify-center">
      {children}
    </motion.div>
  );
}


