import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FeatureSection } from "@/components/FeatureSection";
import { TrustSection } from "@/components/TrustSection";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <FeatureSection />
      <TrustSection />
      <Pricing />
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-semibold">Ready to reclaim your time?</h3>
              <p className="mt-2 text-white/70">Schedule a pickup and enjoy premium care, delivered.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white text-sm font-medium hover:brightness-110">
              Schedule Pickup
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
