"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const tiers = [
  {
    name: "Personal",
    price: "$25/mo",
    features: ["Weekly pickup", "Wash & fold", "Eco detergents"],
    highlighted: true,
  },
  {
    name: "Business",
    price: "Custom",
    features: ["Flexible schedule", "Volume pricing", "Priority support"],
  },
];

export function Pricing() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold text-white">
            Simple, transparent pricing
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-white/70 max-w-2xl">
            Choose a plan that fits your lifestyle or business.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tiers.map((tier) => (
              <motion.div key={tier.name} variants={scaleIn} className={`glass-card p-6 ${tier.highlighted ? "border-cyan-300/50" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white font-semibold">{tier.name}</h3>
                  <span className="text-cyan-300 text-sm">{tier.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span>•</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white text-sm hover:brightness-110">
                  Get started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


