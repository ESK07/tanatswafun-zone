import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Gamepad2, BookOpen, Sparkles, Heart, Trophy, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhotoGallery } from '@/components/ui/PhotoGallery';

const features = [
  { 
    title: 'Play Games', 
    description: '15+ fun interactive games to kill time and have absolute fun!',
    path: '/games',
    icon: Gamepad2,
    color: 'bg-blue-500/10 text-blue-500'
  },
  { 
    title: 'Take Quizzes', 
    description: '20+ quizzes testing everything from friendship to general knowledge.',
    path: '/quizzes',
    icon: BookOpen,
    color: 'bg-pink-500/10 text-pink-500'
  },
  { 
    title: 'Challenges', 
    description: 'Random fun challenges to complete and share with each other.',
    path: '/challenges',
    icon: Sparkles,
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  { 
    title: 'Friendship Notes', 
    description: 'A special place for our secret notes and happy moments.',
    path: '/notes',
    icon: Heart,
    color: 'bg-primary/10 text-primary'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-bold text-primary"
        >
          <Sparkles className="h-4 w-4" />
          <span>Made for you with love</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
        >
          Welcome to <span className="gradient-text">Tanatswa's Fun Zone</span> 🎮✨
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium"
        >
          A special digital playground full of games, quizzes, laughs, and friendship. 
          Dive in and let's make some happy memories!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link to="/games">
            <Button size="lg" className="rounded-full px-10 h-16 text-xl font-black shadow-xl shadow-primary/20">
              Start Playing
            </Button>
          </Link>
          <Link to="/quizzes">
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-xl font-black border-2 hover:bg-muted/50">
              Take a Quiz
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image / Profile Image Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="mt-16 relative inline-block"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative border-[12px] border-white dark:border-muted rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
             <img 
               src="/photo1.jpg" 
               alt="Tanatswa" 
               className="w-full aspect-[4/5] object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>
      </section>

      {/* Feature Navigation Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={feature.path}>
              <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-background/60 backdrop-blur-md rounded-[3rem] group">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className={`mb-6 rounded-[2rem] p-6 ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* About Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Designed for <br/><span className="text-primary italic font-serif">Infinite Joy</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Whether you want to test your memory, challenge your reflexes, or just read a sweet note, 
            everything here was built to celebrate our friendship.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Badge icon={Heart} label="Best Friends" color="bg-pink-100/50 text-pink-600" />
            <Badge icon={Trophy} label="Game Master" color="bg-blue-100/50 text-blue-600" />
            <Badge icon={Sparkles} label="Pure Vibes" color="bg-yellow-100/50 text-yellow-600" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 rounded-[4rem] animate-pulse absolute -inset-4 -z-10 blur-xl" />
          <div className="bg-background rounded-[4rem] p-8 border-4 border-dashed border-primary/20 shadow-2xl relative overflow-hidden">
             <MessageSquare className="h-12 w-12 text-primary opacity-20 absolute -top-2 -right-2 rotate-12" />
             <blockquote className="text-2xl font-serif italic text-muted-foreground">
               "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow."
             </blockquote>
             <p className="mt-8 font-black text-primary uppercase tracking-widest text-sm">— Elbert Hubbard</p>
          </div>
        </motion.div>
      </section>

      {/* Photo Gallery Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
             <h2 className="text-4xl font-black mb-2">Our Moments 📸</h2>
             <p className="text-muted-foreground font-medium">Smiling through the seasons together.</p>
          </div>
          <Link to="/about">
            <Button variant="ghost" className="rounded-full text-primary font-bold hover:bg-primary/5">
              Read Our Story
            </Button>
          </Link>
        </div>
        <PhotoGallery />
      </section>
    </div>
  );
}

function Badge({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black ${color}`}>
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}
