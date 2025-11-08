import { motion } from 'framer-motion';

const quotes = [
  'Love is composed of a single soul inhabiting two bodies. — Aristotle',
  'In all the world, there is no heart for me like yours. — Maya Angelou',
  'We loved with a love that was more than love. — Edgar Allan Poe',
  'Whatever our souls are made of, his and mine are the same. — Emily Brontë',
];

export default function Quotes() {
  return (
    <section id="quotes" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-900 text-center">Whispers of the Heart</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm"
            >
              <p className="text-rose-800">{q}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
