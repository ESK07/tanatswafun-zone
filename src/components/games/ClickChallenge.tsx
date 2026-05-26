import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

export default function ClickChallenge({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const getTimeLimit = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 15;
      case Difficulty.HARD: return 5;
      default: return 10;
    }
  };

  useEffect(() => {
    let timer: any;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      const points = difficulty === Difficulty.EASY ? clicks : difficulty === Difficulty.MEDIUM ? clicks * 2 : clicks * 4;
      onGameOver(points);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const start = () => {
    setClicks(0);
    setTimeLeft(getTimeLimit());
    setIsActive(true);
  };

  return (
    <div className="flex flex-col items-center">
      {!isActive && clicks === 0 && timeLeft === getTimeLimit() ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Click Speed Test!</h3>
          <p className="text-muted-foreground mb-8">How many times can you click in {getTimeLimit()} seconds?</p>
          <Button onClick={start} size="lg" className="rounded-full px-12 h-16 text-xl">Let's GO!</Button>
        </div>
      ) : isActive ? (
        <div className="w-full text-center">
          <div className="text-6xl font-black text-primary mb-12">{timeLeft}s</div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="flex justify-center"
          >
            <Button 
                onClick={() => setClicks(clicks + 1)}
                className="h-48 w-48 rounded-full text-5xl font-black shadow-2xl border-8 border-primary/20"
            >
              {clicks}
            </Button>
          </motion.div>
          <p className="mt-12 text-muted-foreground uppercase font-black tracking-widest">Keep Clicking!</p>
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-3xl font-bold mb-4">Done! ✅</h3>
          <p className="text-xl mb-4">You clicked <span className="text-primary font-black">{clicks}</span> times!</p>
          <p className="text-muted-foreground mb-8 text-sm">That's {(clicks / 10).toFixed(1)} clicks per second!</p>
          <Button onClick={start} variant="outline" className="rounded-full">Try Again</Button>
        </div>
      )}
    </div>
  );
}
