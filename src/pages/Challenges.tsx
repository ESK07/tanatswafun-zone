import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CHALLENGES } from '@/data';
import confetti from 'canvas-confetti';

export default function Challenges() {
  const [challenge, setChallenge] = useState(CHALLENGES[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const getNewChallenge = () => {
    setIsSpinning(true);
    setTimeout(() => {
      let next;
      do {
        next = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
      } while (next === challenge);
      
      setChallenge(next);
      setIsSpinning(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff']
      });
    }, 600);
  };

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl font-black mb-4 gradient-text">Random Fun Challenges!</h1>
        <p className="text-muted-foreground mb-12">Click the button below to get a fun challenge to complete today!</p>

        <Card className="p-12 mb-12 border-4 border-dashed border-primary/20 bg-primary/5 rounded-[4rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={challenge}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="text-3xl font-bold leading-tight"
            >
              {isSpinning ? "???" : `"${challenge}"`}
            </motion.div>
          </AnimatePresence>
        </Card>

        <Button 
          disabled={isSpinning}
          onClick={getNewChallenge} 
          size="lg" 
          className="rounded-full h-20 px-12 text-2xl font-black shadow-2xl hover:shadow-primary/40 transition-all gap-4"
        >
          <RefreshCw className={`h-8 w-8 ${isSpinning ? 'animate-spin' : ''}`} />
          Gimme a Challenge!
        </Button>
      </motion.div>
    </div>
  );
}

import { Card } from '@/components/ui/card';
