import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Gamepad2, BookOpen, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScoreEntry } from '@/types';

export default function Scores() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [filter, setFilter] = useState<'all' | 'game' | 'quiz'>('all');

  useEffect(() => {
    const saved = localStorage.getItem('tanatswa_scores');
    if (saved) {
      setScores(JSON.parse(saved));
    }
  }, []);

  const clearScores = () => {
    if (confirm('Are you sure you want to clear your records?')) {
      localStorage.removeItem('tanatswa_scores');
      setScores([]);
    }
  };

  const filteredScores = scores.filter(s => filter === 'all' || s.type === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            Hall of Fame <Trophy className="h-6 w-6 text-yellow-500" />
          </h1>
          <p className="text-muted-foreground">Tracking your amazing achievements!</p>
        </div>
        <div className="flex items-center gap-2">
          {scores.length > 0 && (
            <Button variant="outline" onClick={clearScores} className="rounded-full gap-2 border-destructive/20 text-destructive hover:bg-destructive/5 hover:text-destructive">
              <Trash2 className="h-4 w-4" />
              Clear History
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {scores.length > 0 && (
          <div className="flex gap-2 mb-8 justify-center">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('all')}
              className="rounded-full"
            >
              All
            </Button>
            <Button 
              variant={filter === 'game' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('game')}
              className="rounded-full gap-2"
            >
              <Gamepad2 className="h-4 w-4" /> Games
            </Button>
            <Button 
              variant={filter === 'quiz' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('quiz')}
              className="rounded-full gap-2"
            >
              <BookOpen className="h-4 w-4" /> Quizzes
            </Button>
          </div>
        )}

        {filteredScores.length > 0 ? (
          <div className="space-y-4">
            {filteredScores.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="border-2 hover:border-primary/30 transition-colors rounded-2xl overflow-hidden group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                        entry.type === 'game' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
                      }`}>
                        {entry.type === 'game' ? <Gamepad2 className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{entry.name}</h3>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{entry.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="text-2xl font-black text-primary">
                         {entry.score}{entry.maxScore ? <span className="text-sm text-muted-foreground"> / {entry.maxScore}</span> : ''}
                       </div>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase">Score</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-muted/20 rounded-[3rem] border-2 border-dashed border-muted">
             <Trophy className="h-16 w-16 text-muted mx-auto mb-6 opacity-20" />
             <p className="text-muted-foreground italic">No scores yet. Time to play some games!</p>
          </div>
        )}
      </div>
    </div>
  );
}
