import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { X, Circle } from 'lucide-react';

import { Difficulty } from '@/types';

export default function TicTacToe({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}` 
    : board.every(Boolean) 
      ? "It's a Draw!" 
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  function handleClick(i: number) {
    if (winner || board[i]) return;
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);
    
    const nextWinner = calculateWinner(nextBoard);
    if (nextWinner) {
      onGameOver(100);
    }
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold mb-6 gradient-text">{status}</div>
      <div className="grid grid-cols-3 gap-2 bg-muted p-2 rounded-2xl">
        {board.map((cell, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(i)}
            className="flex h-20 w-20 md:h-24 md:w-24 cursor-pointer items-center justify-center rounded-xl bg-background border-2 border-transparent hover:border-primary/50 transition-colors"
          >
            {cell === 'X' && <X className="h-10 w-10 text-primary" />}
            {cell === 'O' && <Circle className="h-8 w-8 text-secondary" />}
          </motion.div>
        ))}
      </div>
      {(winner || board.every(Boolean)) && (
        <Button onClick={reset} className="mt-8 rounded-full">Play Again</Button>
      )}
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
