"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ShieldCheck, Leaf, CreditCard, Award } from "lucide-react";

export function TrustSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold text-white">
            Trusted and certified
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-white/70 max-w-2xl">
            Built on reliable technology and recognized by our community.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            <Badge title="Certifications" icon={<ShieldCheck className="h-5 w-5" />} />
            <Badge title="Eco Certified" icon={<Leaf className="h-5 w-5" />} />
            <Badge title="Payment Partners" icon={<CreditCard className="h-5 w-5" />} />
            <Badge title="Local Awards" icon={<Award className="h-5 w-5" />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="glass-card p-4 flex items-center gap-3 text-white/90">
      <div className="rounded-xl bg-white/10 p-2 text-cyan-300">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}


