import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { Difficulty } from '@/types';

const EASY_H_WORDS = ['BESTIE', 'LAUGH', 'VIBES', 'HEART', 'SUGAR', 'SPARKLE', 'CANDY', 'SWEET', 'DREAM', 'HAPPY'];
const MEDIUM_H_WORDS = ['TANATSWA', 'FRIENDSHIP', 'HAPPINESS', 'LAUGHTER', 'MEMORIES', 'SUPPORT', 'KINDNESS', 'JOURNEY', 'PROMISE', 'RELIABLE'];
const HARD_H_WORDS = ['STRENGTH', 'LOYALTY', 'RESILIENCE', 'GRATITUDE', 'COMPASSION', 'INTEGRITY', 'KNOWLEDGE', 'COURAGE', 'PATIENCE', 'HARMONY'];

export default function Hangman({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getMaxMistakes = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 10;
      case Difficulty.HARD: return 4;
      default: return 6;
    }
  };

  const getWordPool = () => {
    switch (difficulty) {
      case Difficulty.EASY: return EASY_H_WORDS;
      case Difficulty.HARD: return HARD_H_WORDS;
      default: return MEDIUM_H_WORDS;
    }
  };

  const [word, setWord] = useState('');
  const [guessed, setGuessed] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const maxMistakes = getMaxMistakes();

  useEffect(() => {
    const pool = getWordPool();
    setWord(pool[Math.floor(Math.random() * pool.length)]);
  }, [difficulty]);

  const handleGuess = (letter: string) => {
    if (guessed.includes(letter) || mistakes >= maxMistakes || isWinner) return;
    setGuessed([...guessed, letter]);
    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }
  };

  const isWinner = word && word.split('').every(l => guessed.includes(l));
  const isGameOver = mistakes >= maxMistakes;

  useEffect(() => {
    if (isWinner) {
      const basePoints = difficulty === Difficulty.EASY ? 50 : difficulty === Difficulty.MEDIUM ? 100 : 200;
      onGameOver(basePoints);
    } else if (isGameOver) {
      onGameOver(0);
    }
  }, [isWinner, isGameOver]);

  const reset = () => {
    const pool = getWordPool();
    setWord(pool[Math.floor(Math.random() * pool.length)]);
    setGuessed([]);
    setMistakes(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <div className="text-4xl font-mono tracking-[0.5em] mb-4 text-primary">
          {word.split('').map((l, i) => (
            <span key={i}>{guessed.includes(l) ? l : '_'}</span>
          ))}
        </div>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Mistakes: {mistakes} / {maxMistakes}
        </p>
      </div>

      <div className="grid grid-cols-7 sm:grid-cols-9 gap-2 mb-8 max-w-md">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
          <Button
            key={l}
            variant={guessed.includes(l) ? (word.includes(l) ? "default" : "outline") : "secondary"}
            disabled={guessed.includes(l) || isGameOver || isWinner}
            onClick={() => handleGuess(l)}
            className="h-10 w-10 p-0 text-xs font-bold rounded-lg"
          >
            {l}
          </Button>
        ))}
      </div>

      {(isWinner || isGameOver) && (
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <p className="text-2xl font-bold mb-4">
            {isWinner ? "You Saved the Sparkle! Sparkle saved ✨" : `Game Over! The word was ${word}`}
          </p>
          <Button onClick={reset} className="rounded-full">Try Another Word</Button>
        </motion.div>
      )}
    </div>
  );
}
