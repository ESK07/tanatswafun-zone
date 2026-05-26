import { motion } from 'motion/react';
import { Heart, Sparkles, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12"
      >
        <div className="mb-12 relative">
          <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-muted -rotate-2 hover:rotate-0 transition-transform duration-300">
             <img src="/photo2.jpg" alt="Tanatswa" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary/10 blur-2xl -z-10 rounded-full" />
        </div>
        <h1 className="text-4xl font-black mb-6 gradient-text">About This Space</h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Welcome to <span className="font-bold text-primary">Tanatswa's Fun Zone</span>! 
            This website was created as a special gift to celebrate an amazing friendship.
          </p>
          <p>
            It's a place designed specifically for you, filled with games to test your 
            reflexes, quizzes to challenge your brain, and space for all the happy 
            thoughts that make our friendship unique.
          </p>
          <p>
            Every feature here—from the "Random Challenges" to the "Memory Matches"—was 
            chosen to bring a smile to your face.
          </p>
          <div className="pt-10 flex flex-col items-center">
             <div className="h-px w-24 bg-primary/30 mb-8" />
             <p className="font-bold italic text-primary">Keep shining, keep smiling, and keep being the awesome Tanatswa you are! ✨</p>
             <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted-foreground flex items-center gap-2">
               Made with <Heart className="h-3 w-3 fill-primary text-primary" /> and plenty of <Coffee className="h-3 w-3 text-brown-500" />
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
