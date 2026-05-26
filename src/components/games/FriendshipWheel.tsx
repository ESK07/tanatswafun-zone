import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { RotateCw, Star } from 'lucide-react';

const challenges = [
  "Send a Heart Emoji! ❤️",
  "Tell a funny joke! 😂",
  "Say something nice! ✨",
  "High five! ✋",
  "Smile for 10 seconds! 😊",
  "Do a quick dance! 💃",
  "Write a tiny note! ✍️",
  "Share a memory! 📸",
];

import { Difficulty } from '@/types';

export default function FriendshipWheel({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const spin = () => {
    setSpinning(true);
    setSelected(null);
    setTimeout(() => {
      const res = challenges[Math.floor(Math.random() * challenges.length)];
      setSelected(res);
      setSpinning(false);
      onGameOver(30);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="relative mb-12 h-64 w-64">
        {/* The Wheel */}
        <motion.div
          animate={spinning ? { rotate: 360 * 6 } : { rotate: 0 }}
          transition={spinning ? { duration: 2, ease: "circOut" } : { duration: 0 }}
          className="h-full w-full rounded-full border-8 border-primary bg-background overflow-hidden relative"
        >
          {challenges.map((_, i) => (
             <div 
              key={i} 
              className="absolute top-1/2 left-1/2 h-[2px] w-full bg-primary/20"
              style={{ transform: `translate(-50%, -50%) rotate(${i * (360 / challenges.length)}deg)` }}
             />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <Star className="h-8 w-8 text-primary/30" />
          </div>
        </motion.div>
        
        {/* Needle */}
        <div className="absolute top-0 left-1/2 -ml-2 -mt-2 h-8 w-4 bg-primary rounded-t-full shadow-lg" />
        
        {/* Spin Button */}
        <div className="absolute inset-0 flex items-center justify-center">
           <Button 
            onClick={spin}
            disabled={spinning}
            className="h-16 w-16 rounded-full shadow-xl border-4 border-background"
           >
             <RotateCw className={spinning ? 'animate-spin' : ''} />
           </Button>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center bg-primary text-primary-foreground p-8 rounded-[2.5rem] shadow-xl shadow-primary/20"
          >
            <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Challenge Unlocked!</p>
            <h3 className="text-3xl font-black italic">"{selected}"</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
