import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

const allEmojis = ['💖', '🦄', '🌈', '🍦', '🎮', '🍭', '🌸', '🐱', '🦋', '🐳', '🍀', '🍕'];

export default function MemoryGame({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getPairsCount = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 4;
      case Difficulty.HARD: return 12;
      default: return 8;
    }
  };

  const getActiveEmojis = () => allEmojis.slice(0, getPairsCount());

  const [shuffledCards, setShuffledCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const activeEmojis = getActiveEmojis();
    setShuffledCards([...activeEmojis, ...activeEmojis].sort(() => Math.random() - 0.5));
  }, [difficulty]);

  const handleCardClick = (index: number) => {
    if (disabled || solved.includes(index) || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      if (shuffledCards[newFlipped[0]] === shuffledCards[newFlipped[1]]) {
        const newSolved = [...solved, ...newFlipped];
        setSolved(newSolved);
        setFlipped([]);
        setDisabled(false);
        if (newSolved.length === shuffledCards.length) {
          const baseScore = difficulty === Difficulty.EASY ? 100 : difficulty === Difficulty.MEDIUM ? 200 : 400;
          onGameOver(baseScore);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, difficulty === Difficulty.HARD ? 600 : 1000);
      }
    }
  };

  const reset = () => {
    const activeEmojis = getActiveEmojis();
    setShuffledCards([...activeEmojis, ...activeEmojis].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex justify-between w-full text-sm font-medium text-muted-foreground">
        <span>Matches: {solved.length / 2} / {shuffledCards.length / 2}</span>
        <Button variant="link" onClick={reset} size="sm">Reset</Button>
      </div>
      <div className={`grid gap-3 ${difficulty === Difficulty.HARD ? 'grid-cols-4 sm:grid-cols-6' : 'grid-cols-4'}`}>
        {shuffledCards.map((emoji, index) => {
          const isFlipped = flipped.includes(index) || solved.includes(index);
          return (
            <motion.div
              key={index}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`h-16 w-16 md:h-20 md:w-20 cursor-pointer rounded-xl flex items-center justify-center text-3xl transition-all duration-300 transform perspective-1000 ${
                isFlipped ? 'bg-primary/20 rotate-y-180' : 'bg-muted'
              }`}
            >
              <span className={isFlipped ? 'opacity-100' : 'opacity-0'}>
                {emoji}
              </span>
            </motion.div>
          );
        })}
      </div>
      {solved.length === shuffledCards.length && (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-8">
           <Button onClick={reset} className="rounded-full">Play Again</Button>
        </motion.div>
      )}
    </div>
  );
}
