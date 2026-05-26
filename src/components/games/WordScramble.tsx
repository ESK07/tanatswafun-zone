import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Difficulty } from '@/types';

const EASY_WORDS = ['FELIX', 'LOVE', 'KIND', 'HOME', 'SMILE', 'BEST', 'GIFT', 'SAFE', 'PURE', 'CALM'];
const MEDIUM_WORDS = ['FRIENDS', 'HAPPY', 'LAUGH', 'MEMOTY', 'SUPPORT', 'TRUST', 'LOYAL', 'BRAVE', 'DREAM', 'GROWTH'];
const HARD_WORDS = ['FRIENDSHIP', 'HAPPINESS', 'LAUGHTER', 'TANATSWA', 'MEMORIES', 'SUPPORTIVE', 'KINDNESS', 'JOURNEY', 'PROMISE', 'RELIABLE', 'BEAUTIFUL', 'WONDERFUL'];

export default function WordScramble({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [word, setWord] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Can you solve it?');

  const nextWord = () => {
    let pool = MEDIUM_WORDS;
    if (difficulty === Difficulty.EASY) pool = EASY_WORDS;
    if (difficulty === Difficulty.HARD) pool = HARD_WORDS;
    
    const w = pool[Math.floor(Math.random() * pool.length)];
    setWord(w);
    let s = w.split('').sort(() => Math.random() - 0.5).join('');
    // Ensure it's actually scrambled
    while (s === w && w.length > 1) {
      s = w.split('').sort(() => Math.random() - 0.5).join('');
    }
    setScrambled(s);
    setInput('');
  };

  useEffect(() => nextWord(), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === word) {
      const points = difficulty === Difficulty.EASY ? 5 : difficulty === Difficulty.MEDIUM ? 10 : 20;
      setScore(score + points);
      setMessage('Correct! 🎉');
      onGameOver(points);
      setTimeout(() => {
        nextWord();
        setMessage('Unscramble this word!');
      }, 1000);
    } else {
      setMessage('Try again! ❌');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-black tracking-widest text-primary mb-2 uppercase select-none">{scrambled}</h3>
        <p className="text-muted-foreground">{message}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
        <Input 
          autoFocus
          placeholder="Type the word..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-full border-2 uppercase font-bold text-center tracking-widest"
        />
        <Button type="submit" className="rounded-full">Submit</Button>
      </form>

      <div className="mt-8 flex gap-4 text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
        <span>Score: {score}</span>
      </div>
      <Button variant="ghost" onClick={nextWord} className="mt-4 text-xs">Skip word</Button>
    </div>
  );
}
