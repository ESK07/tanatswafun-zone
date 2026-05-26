import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Gamepad2, BookOpen, Trophy, Info, Sparkles, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ThemeToggle } from '../ThemeToggle';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Games', path: '/games', icon: Gamepad2 },
  { name: 'Quizzes', path: '/quizzes', icon: BookOpen },
  { name: 'Challenges', path: '/challenges', icon: Sparkles },
  { name: 'Notes', path: '/notes', icon: MessageSquare },
  { name: 'Scores', path: '/scores', icon: Trophy },
  { name: 'About', path: '/about', icon: Info },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="rounded-full bg-primary p-2 text-primary-foreground shadow-lg shadow-primary/20"
            >
              <Heart className="h-5 w-5 fill-current" />
            </motion.div>
            <span className="gradient-text font-bold text-xl hidden sm:inline-block">
              Tanatswa's Fun Zone
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    active ? "text-primary bg-primary/10" : "text-muted-foreground"
                  )}
                  title={item.name}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline-block">{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border-2 border-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-2 pl-2 border-l">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
