import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

export default function SimplePuzzle({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getSize = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 3;
      case Difficulty.HARD: return 5;
      default: return 4;
    }
  };

  const size = getSize();
  const [board, setBoard] = useState<number[]>([]);

  const shuffle = () => {
    const initial = [...Array(size * size).keys()];
    const shuffled = initial.sort(() => Math.random() - 0.5);
    setBoard(shuffled);
  };

  useEffect(() => shuffle(), []);

  const move = (index: number) => {
    const emptyIndex = board.indexOf(0);
    const isAdjacent = 
      (Math.abs(index - emptyIndex) === 1 && Math.floor(index/size) === Math.floor(emptyIndex/size)) ||
      (Math.abs(index - emptyIndex) === size);

    if (isAdjacent) {
      const newBoard = [...board];
      [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];
      setBoard(newBoard);
      
      if (newBoard.every((val, i) => val === i)) {
        onGameOver(300);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-8 text-muted-foreground text-center">Arrange the numbers in order (0 is the gap)!</p>
      <div 
        className="grid gap-2 bg-muted p-3 rounded-2xl"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      >
        {board.map((val, i) => (
          <motion.div
            key={i}
            layout
            onClick={() => move(i)}
            className={`h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-xl flex items-center justify-center text-xl font-bold cursor-pointer transition-colors ${
              val === 0 ? 'bg-transparent' : 'bg-background hover:bg-primary/10 border-2'
            }`}
          >
            {val !== 0 && val}
          </motion.div>
        ))}
      </div>
      <Button variant="ghost" onClick={shuffle} className="mt-8 rounded-full">Reset Puzzle</Button>
    </div>
  );
}
