import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';

// List of Tanatswa photos uploaded by the user
const PHOTOS = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
  "/photo10.jpg",
  "/photo10 (1).jpg",
  "/photo10 (11).jpg",
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {PHOTOS.map((url, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
          className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-muted cursor-pointer group"
        >
          <img 
            src={url} 
            alt={`Tanatswa Moment ${i+1}`}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
            <p className="text-white font-black italic tracking-wider">Tanatswa ✨</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
