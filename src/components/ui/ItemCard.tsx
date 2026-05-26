import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quiz, Game } from '@/types';

interface ItemCardProps {
  item: Quiz | Game;
  onSelect: (item: any) => void;
  type: 'quiz' | 'game';
  badge?: React.ReactNode;
}

export function ItemCard({ item, onSelect, type, badge }: ItemCardProps) {
  const Icon = (Icons as any)[item.icon] || Icons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden border-2 transition-colors hover:border-primary/50 group relative">
        {badge && (
          <div className="absolute top-4 right-4 z-10 transition-transform group-hover:scale-110">
            {badge}
          </div>
        )}
        <CardHeader className="relative">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
          <CardDescription className="line-clamp-2">{item.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button 
            className="w-full rounded-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all font-semibold"
            onClick={() => onSelect(item)}
          >
            {type === 'quiz' ? 'Start Quiz' : 'Play Game'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
