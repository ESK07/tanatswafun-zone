import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GAMES } from '@/data';
import { Game, Difficulty } from '@/types';
import { ItemCard } from '@/components/ui/ItemCard';
import { triggerGameWin } from '@/lib/celebrations';
import { toast } from 'sonner';
import { Zap, Shield, Flame } from 'lucide-react';

// Game Components
import TicTacToe from '../components/games/TicTacToe';
import RockPaperScissors from '../components/games/RockPaperScissors';
import MemoryGame from '../components/games/MemoryGame';
import NumberGuessing from '../components/games/NumberGuessing';
import WordScramble from '../components/games/WordScramble';
import Hangman from '../components/games/Hangman';
import EmojiGuessing from '../components/games/EmojiGuessing';
import QuickMath from '../components/games/QuickMath';
import ReactionTime from '../components/games/ReactionTime';
import TruthOrDare from '../components/games/TruthOrDare';
import WouldYouRather from '../components/games/WouldYouRather';
import ColorMatch from '../components/games/ColorMatch';
import ClickChallenge from '../components/games/ClickChallenge';
import SimplePuzzle from '../components/games/SimplePuzzle';
import FriendshipWheel from '../components/games/FriendshipWheel';

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    setDifficulty(null);
    window.scrollTo(0, 0);
  };

  const handleDifficultySelect = (level: Difficulty) => {
    setDifficulty(level);
  };

  const handleSaveScore = (score: number) => {
    if (!selectedGame) return;
    
    const scores = JSON.parse(localStorage.getItem('tanatswa_scores') || '[]');
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'game',
      name: selectedGame.title,
      score: score,
      date: new Date().toLocaleDateString(),
    };
    localStorage.setItem('tanatswa_scores', JSON.stringify([newEntry, ...scores]));
    
    if (score > 0) {
      triggerGameWin();
      toast.success(`Great job! New score in ${selectedGame.title}: ${score}`);
    }
  };

  const renderGame = () => {
    if (!selectedGame) return null;

    switch (selectedGame.id) {
      case 'tictactoe': return <TicTacToe onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'rps': return <RockPaperScissors onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'memory': return <MemoryGame onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'numberguess': return <NumberGuessing onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'wordscramble': return <WordScramble onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'hangman': return <Hangman onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'emojiguess': return <EmojiGuessing onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'quickmath': return <QuickMath onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'reaction': return <ReactionTime onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'truthdare': return <TruthOrDare onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'wouldyourather': return <WouldYouRather onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'colormatch': return <ColorMatch onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'clickchallenge': return <ClickChallenge onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'puzzlequiz': return <SimplePuzzle onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      case 'friendshipwheel': return <FriendshipWheel onGameOver={handleSaveScore} difficulty={difficulty || Difficulty.MEDIUM} />;
      default: return <div className="p-8 text-center">Coming Soon!</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        {!selectedGame ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Fun Games Zone 🎮</h1>
                <p className="text-muted-foreground">Pick a game and challenge yourself (or me!)</p>
              </div>
              <Button 
                onClick={() => handleGameSelect(GAMES[Math.floor(Math.random() * GAMES.length)])}
                className="rounded-full gap-2 border-2"
                variant="outline"
              >
                <RotateCcw className="h-4 w-4" />
                Random Game
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {GAMES.map((game) => (
                <div key={game.id}>
                  <ItemCard 
                    item={game} 
                    type="game" 
                    onSelect={(item) => handleGameSelect(item as Game)} 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSelectedGame(null)}
                className="rounded-full"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold">{selectedGame.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedGame.instruction}</p>
              </div>
            </div>

            <Card className="p-4 md:p-8 border-2 bg-background/50 backdrop-blur-md">
              {!difficulty ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-6">Select Difficulty</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button 
                      onClick={() => handleDifficultySelect(Difficulty.EASY)}
                      variant="outline"
                      className="h-auto py-6 flex-col gap-3 rounded-2xl hover:border-green-500 hover:bg-green-500/5 group transition-all"
                    >
                      <div className="p-3 rounded-xl bg-green-500/10 text-green-600 group-hover:scale-110 transition-transform">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold">Easy</div>
                        <div className="text-xs text-muted-foreground">Relaxed & Fun</div>
                      </div>
                    </Button>
                    <Button 
                      onClick={() => handleDifficultySelect(Difficulty.MEDIUM)}
                      variant="outline"
                      className="h-auto py-6 flex-col gap-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500/5 group transition-all"
                    >
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold">Medium</div>
                        <div className="text-xs text-muted-foreground">The Standard</div>
                      </div>
                    </Button>
                    <Button 
                      onClick={() => handleDifficultySelect(Difficulty.HARD)}
                      variant="outline"
                      className="h-auto py-6 flex-col gap-3 rounded-2xl hover:border-red-500 hover:bg-red-500/5 group transition-all"
                    >
                      <div className="p-3 rounded-xl bg-red-500/10 text-red-600 group-hover:scale-110 transition-transform">
                        <Flame className="h-6 w-6" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold">Hard</div>
                        <div className="text-xs text-muted-foreground">True Challenge</div>
                      </div>
                    </Button>
                  </div>
                </div>
              ) : (
                renderGame()
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
