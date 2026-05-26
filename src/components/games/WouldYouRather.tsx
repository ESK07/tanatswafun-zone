import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

const choices = [
  { a: "Always have to sing instead of speaking", b: "Always have to dance instead of walking" },
  { a: "Be the smartest person in the world", b: "Be the luckiest person in the world" },
  { a: "Travel to the past", b: "Travel to the future" },
  { a: "Live without music", b: "Live without movies" },
  { a: "Have a flying carpet", b: "Have a pet dragon" },
  { a: "Know all the languages in the world", b: "Be able to talk to animals" },
  { a: "Eat cake for every meal", b: "Eat pizza for every meal" },
  { a: "Always be 10 minutes early", b: "Always be 10 minutes late" },
];

import { Difficulty } from '@/types';

export default function WouldYouRather({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [current, setCurrent] = useState(0);

  const select = () => {
    onGameOver(5);
    setCurrent((current + 1) % choices.length);
  };

  return (
    <div className="flex flex-col items-center py-6">
      <h3 className="text-2xl font-bold mb-12 text-center">Would You Rather...</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
          <Button 
            onClick={select}
            className="w-full h-40 rounded-[2rem] bg-primary text-primary-foreground text-lg font-bold p-6 border-4 border-transparent hover:border-white/20 whitespace-normal"
          >
            {choices[current].a}
          </Button>
        </motion.div>
        
        <div className="flex items-center justify-center font-black text-2xl text-muted-foreground/30 italic">OR</div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
          <Button 
            onClick={select}
            className="w-full h-40 rounded-[2rem] bg-secondary text-secondary-foreground text-lg font-bold p-6 border-4 border-transparent hover:border-black/5 whitespace-normal"
          >
            {choices[current].b}
          </Button>
        </motion.div>
      </div>

      <p className="mt-12 text-sm text-muted-foreground uppercase tracking-widest font-black">Choice {current + 1} / {choices.length}</p>
    </div>
  );
}
