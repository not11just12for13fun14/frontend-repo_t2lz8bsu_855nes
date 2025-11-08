import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-4 py-2 shadow-sm backdrop-blur">
          <Heart className="text-rose-500" size={18} />
          <span className="text-sm font-medium text-rose-600">A celebration of love</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900">
          Tender Moments, Timeless Bonds
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-rose-700">
          A serene, romantic experience with soft animations and a dreamy ambiance — honoring affection,
          trust, and the beauty of togetherness.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#scene"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-colors"
          >
            Explore the Scene
          </a>
          <a
            href="#quotes"
            className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 px-6 py-3 font-medium shadow hover:shadow-md border border-rose-100"
          >
            Read Quotes
          </a>
        </div>
      </motion.div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      </div>
    </section>
  );
}
