import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

export default function ReactionTime({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [state, setState] = useState<'idle' | 'waiting' | 'ready' | 'result'>('idle');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);

  const start = () => {
    setState('waiting');
    const minDelay = difficulty === Difficulty.EASY ? 3000 : difficulty === Difficulty.HARD ? 1000 : 2000;
    const randomDelay = difficulty === Difficulty.EASY ? 4000 : difficulty === Difficulty.HARD ? 1500 : 3000;
    const delay = Math.floor(Math.random() * randomDelay) + minDelay;
    setTimeout(() => {
      setState(curr => {
        if (curr === 'waiting') {
          setStartTime(Date.now());
          return 'ready';
        }
        return curr;
      });
    }, delay);
  };

  const handleClick = () => {
    if (state === 'waiting') {
      setState('idle');
      alert('Too soon! Wait for the color change.');
    } else if (state === 'ready') {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setState('result');
      onGameOver(Math.max(10, 500 - time));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-12 text-center text-muted-foreground font-medium">Test your reflexes!</p>
      
      <motion.div
        onClick={handleClick}
        animate={{
          backgroundColor: state === 'ready' ? 'var(--primary)' : state === 'waiting' ? 'oklch(0.6 0.2 20)' : 'var(--muted)',
        }}
        className={`h-64 w-full max-w-sm rounded-[3rem] shadow-xl flex items-center justify-center cursor-pointer select-none transition-shadow ${
          state === 'ready' ? 'shadow-primary/40' : ''
        }`}
      >
        <div className="text-center text-white">
          {state === 'idle' && (
            <Button onClick={(e) => { e.stopPropagation(); start(); }} className="bg-white text-black hover:bg-white/90 rounded-full h-16 px-12 text-xl font-bold">START</Button>
          )}
          {state === 'waiting' && <p className="text-2xl font-black tracking-widest animate-pulse">WAIT FOR IT...</p>}
          {state === 'ready' && <p className="text-5xl font-black tracking-tighter">CLICK NOW!</p>}
          {state === 'result' && (
            <div className="text-foreground">
              <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Your Time</p>
              <h3 className="text-6xl font-black mb-6">{reactionTime}ms</h3>
              <Button onClick={(e) => { e.stopPropagation(); start(); }} className="rounded-full font-bold">Try Again</Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
