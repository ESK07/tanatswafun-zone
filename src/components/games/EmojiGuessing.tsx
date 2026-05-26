import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

const emojiChallenges = [
  { emojis: '🍎🥧', answer: 'Apple Pie' },
  { emojis: '❄️⚪', answer: 'Snow White' },
  { emojis: '🕷️👨', answer: 'Spider-Man' },
  { emojis: '🦁👑', answer: 'Lion King' },
  { emojis: '🍯🐝', answer: 'Honey Bee' },
  { emojis: '🦇👨', answer: 'Batman' },
  { emojis: '🛌📖', answer: 'Bedtime Story' },
  { emojis: '🍔👑', answer: 'Burger King' },
];

import { Difficulty } from '@/types';

export default function EmojiGuessing({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [current, setCurrent] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [solved, setSolved] = useState(false);

  const checkSolution = () => {
    if (userInput.toLowerCase().trim() === emojiChallenges[current].answer.toLowerCase()) {
      setSolved(true);
      onGameOver(25);
    }
  };

  const nextChallenge = () => {
    setCurrent((current + 1) % emojiChallenges.length);
    setUserInput('');
    setSolved(false);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        key={current}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-7xl mb-8 p-12 bg-muted/30 rounded-[3rem]"
      >
        {emojiChallenges[current].emojis}
      </motion.div>

      <div className="flex gap-2 w-full max-w-sm mb-4">
        <input
          type="text"
          placeholder="Guess the word..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={solved}
          className="flex-1 rounded-full border-2 bg-transparent px-6 py-3 text-lg font-bold text-center focus:border-primary outline-none"
        />
        <Button onClick={checkSolution} disabled={solved} className="rounded-full px-8">OK</Button>
      </div>

      <AnimatePresence>
        {solved && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="text-center mt-6">
            <p className="text-xl font-bold text-primary mb-4 italic">"{emojiChallenges[current].answer}" - You got it! ✨</p>
            <Button onClick={nextChallenge} variant="outline" className="rounded-full border-2">Next One</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
