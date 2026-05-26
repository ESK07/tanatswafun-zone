import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import { Difficulty } from '@/types';

export default function QuickMath({ onGameOver, difficulty }: { onGameOver: (score: number) => void, difficulty: Difficulty }) {
  const getTimeLimit = () => {
    switch (difficulty) {
      case Difficulty.EASY: return 45;
      case Difficulty.HARD: return 15;
      default: return 30;
    }
  };

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState('+');
  const [answer, setAnswer] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(getTimeLimit());
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const generateProblem = () => {
    const operators = difficulty === Difficulty.EASY ? ['+', '-'] : ['+', '-', '*'];
    const newOp = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2;
    
    let max = 20;
    if (difficulty === Difficulty.MEDIUM) max = 50;
    if (difficulty === Difficulty.HARD) max = 100;

    if (newOp === '*') {
      const multMax = difficulty === Difficulty.HARD ? 15 : 10;
      num1 = Math.floor(Math.random() * multMax) + 1;
      num2 = Math.floor(Math.random() * multMax) + 1;
    } else {
      num1 = Math.floor(Math.random() * max) + 1;
      num2 = Math.floor(Math.random() * max) + 1;
    }
    setA(num1);
    setB(num2);
    setOp(newOp);
    setAnswer(newOp === '+' ? num1 + num2 : newOp === '-' ? num1 - num2 : num1 * num2);
    setUserInput('');
  };

  useEffect(() => {
    let timer: any;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onGameOver(score * 10);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const start = () => {
    const limit = getTimeLimit();
    setTimeLeft(limit);
    setScore(0);
    setIsActive(true);
    generateProblem();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);
    if (parseInt(val) === answer) {
      setScore(score + 1);
      generateProblem();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!isActive && score === 0 && timeLeft === getTimeLimit() ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Are you ready to math?</h3>
          <p className="text-muted-foreground mb-8">Solve as many as possible in {getTimeLimit()} seconds!</p>
          <Button onClick={start} size="lg" className="rounded-full px-12">Start Game</Button>
        </div>
      ) : isActive ? (
        <div className="w-full max-w-sm">
          <div className="flex justify-between items-end mb-4">
            <div className="text-sm font-bold text-muted-foreground">TIME LEFT</div>
            <div className="text-2xl font-black text-primary">{timeLeft}s</div>
          </div>
          <Progress value={(timeLeft / getTimeLimit()) * 100} className="mb-12 h-2" />
          
          <div className="text-center mb-8">
             <div className="text-5xl font-black mb-4">
               {a} <span className="text-primary">{op}</span> {b} = ?
             </div>
             <input
                autoFocus
                type="number"
                value={userInput}
                onChange={handleInput}
                className="w-full text-center bg-transparent text-4xl font-bold border-b-4 border-primary outline-none py-2"
                placeholder="..."
             />
          </div>
          <div className="text-center text-xl font-bold text-secondary">Score: {score}</div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-3xl font-bold mb-4">Time's Up! ⏰</h3>
          <p className="text-xl mb-8">You solved {score} problems!</p>
          <Button onClick={start} variant="outline" className="rounded-full">Try Again</Button>
        </div>
      )}
    </div>
  );
}
