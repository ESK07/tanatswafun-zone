import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RotateCcw, Trophy, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QUIZZES } from '@/data';
import { Quiz, Question, ScoreEntry } from '@/types';
import { ItemCard } from '@/components/ui/ItemCard';
import { triggerQuizComplete } from '@/lib/celebrations';
import { toast } from 'sonner';

export default function Quizzes() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentStep, setCurrentStep] = useState<'info' | 'playing' | 'result'>('info');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tanatswa_scores');
    if (saved) {
      setScores(JSON.parse(saved));
    }
  }, [selectedQuiz]);

  const getLastScore = (quizTitle: string) => {
    return scores.find(s => s.type === 'quiz' && s.name === quizTitle);
  };

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentStep('playing');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (answerIndex: number) => {
    if (!selectedQuiz) return;
    
    const isCorrect = answerIndex === selectedQuiz.questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(s => s + 1);
    
    const newUserAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
    } else {
      setTimeout(() => finishQuiz(isCorrect ? score + 1 : score), 500);
    }
  };

  const finishQuiz = (finalScore: number) => {
    setCurrentStep('result');
    const allScores = JSON.parse(localStorage.getItem('tanatswa_scores') || '[]');
    const newEntry: ScoreEntry = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'quiz',
      name: selectedQuiz?.title || 'Unknown Quiz',
      score: finalScore,
      maxScore: selectedQuiz?.questions.length,
      date: new Date().toLocaleDateString(),
    };
    const updatedScores = [newEntry, ...allScores];
    localStorage.setItem('tanatswa_scores', JSON.stringify(updatedScores));
    setScores(updatedScores);
    
    triggerQuizComplete();
    toast.success(`Quiz completed! You scored ${finalScore}/${selectedQuiz?.questions.length}`);
  };

  const renderContent = () => {
    if (!selectedQuiz) return null;

    if (currentStep === 'playing') {
      const question = selectedQuiz.questions[currentQuestionIndex];
      const progress = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

      return (
        <div className="max-w-2xl mx-auto py-8">
          <div className="mb-8">
             <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}</span>
                <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
             </div>
             <Progress value={progress} className="h-2" />
          </div>

          <motion.div
            key={currentQuestionIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">{question.text}</h3>
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  onClick={() => handleAnswer(idx)}
                  className="h-auto py-5 px-6 rounded-2xl justify-between border-2 hover:bg-primary/5 hover:border-primary transition-all text-left text-lg group"
                >
                  <span className="flex-1">{option}</span>
                  <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    if (currentStep === 'result') {
      const percentage = (score / selectedQuiz.questions.length) * 100;
      let badge = "Friend";
      if (percentage === 100) badge = "Master Geniuss ✨";
      else if (percentage >= 80) badge = "Super Scholar 🌟";
      else if (percentage >= 50) badge = "Quiz Whiz 🧠";

      return (
        <div className="max-w-md mx-auto text-center py-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 p-12 bg-primary/10 rounded-[4rem] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 rotate-12 bg-primary text-primary-foreground rounded-bl-3xl font-black text-xs uppercase tracking-widest">
               {badge}
             </div>
             <Trophy className="h-20 w-20 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2 uppercase tracking-widest">Final Score</h3>
              <div className="text-8xl font-black gradient-text mb-2">{score}</div>
              <p className="font-bold text-muted-foreground">OUT OF {selectedQuiz.questions.length}</p>
          </motion.div>

          <div className="space-y-4">
            <Button onClick={() => startQuiz(selectedQuiz)} className="w-full rounded-full h-14 text-lg font-bold">Try Again</Button>
            <Button onClick={() => setSelectedQuiz(null)} variant="outline" className="w-full rounded-full h-14 text-lg font-bold border-2">Back to Quizzes</Button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        {!selectedQuiz ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Quiz Central 🧠</h1>
                <p className="text-muted-foreground">Test your knowledge on 20 different topics!</p>
              </div>
              <Button 
                onClick={() => startQuiz(QUIZZES[Math.floor(Math.random() * QUIZZES.length)])}
                className="rounded-full gap-2 border-2"
                variant="outline"
              >
                <RotateCcw className="h-4 w-4" />
                Random Quiz
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {QUIZZES.map((quiz) => {
                const lastScore = getLastScore(quiz.title);
                const percent = lastScore && lastScore.maxScore ? Math.round((lastScore.score / lastScore.maxScore) * 100) : 0;
                
                return (
                  <div key={quiz.id}>
                    <ItemCard 
                      item={quiz} 
                      type="quiz" 
                      onSelect={(item) => startQuiz(item as Quiz)} 
                      badge={lastScore ? (
                        <div className="flex flex-col items-end">
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${percent === 100 ? 'bg-green-500 text-white' : 'bg-primary/20 text-primary'}`}>
                            {percent === 100 ? <Star className="h-3 w-3 fill-current" /> : <CheckCircle2 className="h-3 w-3" />}
                            {lastScore.score}/{lastScore.maxScore}
                          </div>
                          <span className="text-[9px] font-bold text-muted-foreground mt-1">{percent}%</span>
                        </div>
                      ) : null}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-runner"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSelectedQuiz(null)}
                className="rounded-full"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <h2 className="text-2xl font-bold">{selectedQuiz.title}</h2>
            </div>

            <Card className="bg-background/40 backdrop-blur-xl border-2 border-primary/10 rounded-[3rem] shadow-2xl">
              <CardContent className="p-0">
                {renderContent()}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
