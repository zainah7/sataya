"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, whileHoverCard } from "@/lib/animations";
import {
  Shirt,
  Sprout,
  Timer,
  Leaf,
  Truck,
  Eraser,
  Building2,
  CalendarCheck,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  { title: "Wash & Fold", description: "Everyday laundry, perfectly finished.", icon: Shirt },
  { title: "Dry Cleaning", description: "Gentle care for formal and delicate wear.", icon: Sprout },
  { title: "Express Service", description: "Lightning-fast turnaround when you need it.", icon: Timer },
  { title: "Eco-Friendly", description: "Sustainable processes from start to finish.", icon: Leaf },
  { title: "Pickup & Delivery", description: "Door-to-door convenience on your schedule.", icon: Truck },
  { title: "Stain Removal", description: "Expert treatment for tough stains.", icon: Eraser },
  { title: "Commercial", description: "Reliable service for businesses.", icon: Building2 },
  { title: "Subscription", description: "Set-and-forget recurring plans.", icon: CalendarCheck },
];

export function ServicesGrid() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 to-purple-950/40" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold text-white">
            Build your perfect routine
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-white/70 max-w-2xl">
            Choose from premium services designed for convenience, quality, and sustainability.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <motion.article
                key={service.title}
                className="glass-card p-5 h-full group"
                whileHover={whileHoverCard}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3 text-cyan-300">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-semibold">{service.title}</h3>
                </div>
                <p className="mt-3 text-white/70 text-sm">
                  {service.description}
                </p>
                <a className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm" href="#">
                  Learn More
                  <span aria-hidden>→</span>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


