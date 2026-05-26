import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Difficulty } from '@/types';

export default function NumberGuessing({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getRange = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 50;
      case Difficulty.HARD: return 500;
      default: return 100;
    }
  };

  const getMaxAttempts = () => {
    switch (difficulty) {
      case Difficulty.EASY: return Infinity;
      case Difficulty.HARD: return 7;
      default: return 10;
    }
  };

  const [target, setTarget] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState(`I'm thinking of a number between 1 and ${getRange()}...`);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setTarget(Math.floor(Math.random() * getRange()) + 1);
  }, [difficulty]);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    const g = parseInt(guess);
    if (isNaN(g)) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    
    if (g === target) {
      setMessage(`Correct! You got it in ${newAttempts} attempts! 🎯`);
      setGameOver(true);
      const basePoints = difficulty === Difficulty.EASY ? 50 : difficulty === Difficulty.MEDIUM ? 100 : 200;
      onGameOver(Math.max(10, basePoints - attempts * 5));
    } else if (newAttempts >= getMaxAttempts()) {
      setMessage(`Game Over! The number was ${target}. ❌`);
      setGameOver(true);
      onGameOver(0);
    } else if (g < target) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
    setGuess('');
  };

  const reset = () => {
    setTarget(Math.floor(Math.random() * getRange()) + 1);
    setAttempts(0);
    setMessage(`I'm thinking of a number between 1 and ${getRange()}...`);
    setGameOver(false);
    setGuess('');
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-8 text-center text-lg font-medium text-muted-foreground">{message}</p>
      
      {!gameOver ? (
        <form onSubmit={handleGuess} className="flex gap-2 w-full max-w-xs">
          <Input 
            type="number" 
            placeholder="1-100" 
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="rounded-full border-2"
          />
          <Button type="submit" className="rounded-full">Guess</Button>
        </form>
      ) : (
        <Button onClick={reset} className="rounded-full">Play Again</Button>
      )}
      
      <div className="mt-8 flex gap-4 text-sm font-medium text-muted-foreground">
        <span>Attempts: {attempts}</span>
      </div>
    </div>
  );
}
