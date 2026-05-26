import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';

const options = [
  { type: 'TRUTH', text: "What is your most embarrassing secret?" },
  { type: 'DARE', text: "Do your best impression of a chicken for 30 seconds." },
  { type: 'TRUTH', text: "Who was your first crush?" },
  { type: 'DARE', text: "Text your crush something random." },
  { type: 'TRUTH', text: "What is the biggest lie you've ever told?" },
  { type: 'DARE', text: "Do 20 pushups right now!" },
  { type: 'TRUTH', text: "What is one thing you would change about yourself?" },
  { type: 'DARE', text: "Eat a spoonful of something you don't like." },
  { type: 'TRUTH', text: "If you could be any animal, what would you be?" },
  { type: 'DARE', text: "Call a random contact and sing 'Happy Birthday'." },
];

import { Difficulty } from '@/types';

export default function TruthOrDare({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState<typeof options[0] | null>(null);

  const spin = () => {
    setSpinning(true);
    setSelected(null);
    setTimeout(() => {
      const res = options[Math.floor(Math.random() * options.length)];
      setSelected(res);
      setSpinning(false);
      onGameOver(10);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative mb-12 h-64 w-64 flex items-center justify-center">
        <motion.div
          animate={spinning ? { rotate: 360 * 5 } : { rotate: 0 }}
          transition={spinning ? { duration: 1.5, ease: "easeInOut" } : { duration: 0 }}
          className="absolute inset-0 border-8 border-dashed border-primary/20 rounded-full flex items-center justify-center"
        >
          <div className="h-full w-full rounded-full border-4 border-primary flex items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center p-4">
              {['T', 'D', 'T', 'D', 'T', 'D', 'T', 'D'].map((x, i) => (
                <div key={i} className="h-4 w-4 rounded-full bg-primary/40" />
              ))}
            </div>
          </div>
        </motion.div>
        
        <Button 
          disabled={spinning}
          onClick={spin}
          className="h-20 w-20 rounded-full shadow-2xl z-10 p-0"
        >
          <RotateCw className={`h-8 w-8 ${spinning ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className={`text-center p-8 rounded-[2rem] border-4 ${
              selected.type === 'TRUTH' ? 'border-secondary bg-secondary/5' : 'border-destructive bg-destructive/5'
            }`}
          >
            <span className={`text-xs font-black px-4 py-1 rounded-full mb-4 inline-block ${
               selected.type === 'TRUTH' ? 'bg-secondary text-secondary-foreground' : 'bg-destructive text-destructive-foreground'
            }`}>
              {selected.type}
            </span>
            <h3 className="text-2xl font-black mb-4">"{selected.text}"</h3>
            <p className="text-muted-foreground text-sm italic">Challenge accepted? Let's go!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
