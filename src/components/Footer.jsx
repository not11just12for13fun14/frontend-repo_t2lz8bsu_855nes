import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-rose-50 border-t border-rose-100">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <p className="text-rose-700">With love and respect</p>
        <div className="inline-flex items-center gap-2 text-rose-600">
          <Heart size={16} className="fill-rose-500/20" />
          <span className="text-sm">Crafted for a gentle, romantic vibe</span>
        </div>
      </div>
    </footer>
  );
}
