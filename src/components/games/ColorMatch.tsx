import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

const allColors = [
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Pink', hex: '#ec4899' },
  { name: 'Purple', hex: '#a855f7' },
  { name: 'Yellow', hex: '#eab308' },
];

export default function ColorMatch({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getInitialTime = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 30;
      case Difficulty.HARD: return 12;
      default: return 20;
    }
  };

  const getColorsCount = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 3;
      case Difficulty.HARD: return 6;
      default: return 4;
    }
  };

  const colors = allColors.slice(0, getColorsCount());
  
  const [word, setWord] = useState(colors[0]);
  const [color, setColor] = useState(colors[1]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getInitialTime());
  const [isActive, setIsActive] = useState(false);

  const next = () => {
    const w = colors[Math.floor(Math.random() * colors.length)];
    const c = colors[Math.floor(Math.random() * colors.length)];
    setWord(w);
    setColor(c);
  };

  useEffect(() => {
    let timer: any;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onGameOver(score * 10);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const start = () => {
    setScore(0);
    setTimeLeft(getInitialTime());
    setIsActive(true);
    next();
  };

  const check = (cName: string) => {
    if (cName === word.name) {
      const points = difficulty === Difficulty.EASY ? 5 : difficulty === Difficulty.MEDIUM ? 10 : 20;
      setScore(s => s + points);
      next();
    } else {
      const penalty = difficulty === Difficulty.HARD ? 5 : 2;
      setTimeLeft(t => Math.max(0, t - penalty));
      next();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!isActive && score === 0 && timeLeft === getInitialTime() ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Color Match Challenge</h3>
          <p className="text-muted-foreground mb-8">Click the color that matches the <span className="font-bold">WORD</span>, not the ink!</p>
          <Button onClick={start} size="lg" className="rounded-full px-12">I'm Ready</Button>
        </div>
      ) : isActive ? (
        <div className="w-full max-w-sm">
          <div className="flex justify-between mb-8">
            <span className="font-bold">Score: {score}</span>
            <span className="font-bold text-primary">Time: {timeLeft}s</span>
          </div>
          
          <div className="text-center mb-16 h-32 flex items-center justify-center">
            <motion.h3 
              key={word.name + color.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ color: color.hex }}
              className="text-7xl font-black uppercase tracking-tighter"
            >
              {word.name}
            </motion.h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {colors.map((c) => (
              <Button
                key={c.name}
                onClick={() => check(c.name)}
                style={{ backgroundColor: c.hex }}
                className="h-16 rounded-xl hover:opacity-80 transition-opacity border-none"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-3xl font-bold mb-4">Time's Up!</h3>
          <p className="text-xl mb-8">Amazing Score: {score}</p>
          <Button onClick={start} variant="outline" className="rounded-full">Play Again</Button>
        </div>
      )}
    </div>
  );
}
