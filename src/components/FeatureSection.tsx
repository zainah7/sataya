"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Smartphone, MapPin, BadgeCheck, Recycle } from "lucide-react";

const features = [
  {
    title: "Mobile App",
    description: "Schedule pickups, set preferences, and manage orders with ease.",
    icon: Smartphone,
  },
  {
    title: "Real-time Tracking",
    description: "Track pickup and delivery with live updates.",
    icon: MapPin,
  },
  {
    title: "Quality Guarantee",
    description: "We stand by every garment—your satisfaction is assured.",
    icon: BadgeCheck,
  },
  {
    title: "Green Process",
    description: "Eco-friendly detergents and water-saving techniques.",
    icon: Recycle,
  },
];

export function FeatureSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold text-white">
            Made for modern living
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-white/70 max-w-2xl">
            Powerful features that keep your laundry effortless and on time.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <motion.div key={f.title} variants={scaleIn} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3 text-cyan-300">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <p className="mt-2 text-white/70 text-sm">{f.description}</p>
                  </div>
                </div>
                <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-purple-800/40 via-purple-700/20 to-pink-600/20 border border-white/10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


