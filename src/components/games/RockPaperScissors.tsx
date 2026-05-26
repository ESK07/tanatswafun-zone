import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Hand, Scissors, Square } from 'lucide-react';

const choices = [
  { name: 'Rock', icon: Square, color: 'text-gray-500' },
  { name: 'Paper', icon: Hand, color: 'text-blue-500' },
  { name: 'Scissors', icon: Scissors, color: 'text-pink-500' },
];

import { Difficulty } from '@/types';

export default function RockPaperScissors({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const play = (choice: string) => {
    const computer = choices[Math.floor(Math.random() * choices.length)].name;
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("It's a Tie!");
    } else if (
      (choice === 'Rock' && computer === 'Scissors') ||
      (choice === 'Paper' && computer === 'Rock') ||
      (choice === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You Win! 🎉');
      onGameOver(50);
    } else {
      setResult('Computer Wins! 🤖');
    }
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around w-full mb-12">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">You</p>
          <div className="h-24 w-24 flex items-center justify-center bg-muted rounded-full text-4xl">
            {playerChoice ? playerChoice[0] : '?'}
          </div>
        </div>
        <div className="flex items-center text-2xl font-bold text-muted-foreground/30">VS</div>
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Bot</p>
          <div className="h-24 w-24 flex items-center justify-center bg-muted rounded-full text-4xl">
            {computerChoice ? computerChoice[0] : '?'}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">{result}</h3>
            <Button onClick={reset} className="rounded-full">Play Again</Button>
          </motion.div>
        ) : (
          <div className="flex gap-4">
            {choices.map((c) => (
              <motion.div key={c.name} whileHover={{ y: -5 }}>
                <Button
                  onClick={() => play(c.name)}
                  variant="outline"
                  className="h-24 w-24 rounded-2xl flex flex-col gap-2 border-2"
                >
                  <c.icon className={`h-8 w-8 ${c.color}`} />
                  <span className="text-xs font-bold uppercase">{c.name}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
