import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FriendshipNote } from '@/types';

const defaultNotes: FriendshipNote[] = [
  { id: '1', content: 'You are an amazing friend, Tanatswa!', date: new Date().toLocaleDateString(), color: 'bg-pink-100 dark:bg-pink-900/30' },
  { id: '2', content: 'This website was made just to make you smile. 💖', date: new Date().toLocaleDateString(), color: 'bg-purple-100 dark:bg-purple-900/30' },
  { id: '3', content: 'Thanks for being awesome and always having my back!', date: new Date().toLocaleDateString(), color: 'bg-blue-100 dark:bg-blue-900/30' },
];

export default function Notes() {
  const [notes, setNotes] = useState<FriendshipNote[]>([]);
  const [newNote, setNewNote] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tanatswa_notes');
    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      setNotes(defaultNotes);
      localStorage.setItem('tanatswa_notes', JSON.stringify(defaultNotes));
    }
  }, []);

  const addNote = () => {
    if (!newNote.trim()) return;
    const colors = [
      'bg-pink-100 dark:bg-pink-900/30',
      'bg-purple-100 dark:bg-purple-900/30',
      'bg-blue-100 dark:bg-blue-900/30',
      'bg-yellow-100 dark:bg-yellow-900/30',
      'bg-green-100 dark:bg-green-100/30'
    ];
    const item: FriendshipNote = {
      id: Date.now().toString(),
      content: newNote,
      date: new Date().toLocaleDateString(),
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    const updated = [item, ...notes];
    setNotes(updated);
    localStorage.setItem('tanatswa_notes', JSON.stringify(updated));
    setNewNote('');
    setIsAdding(false);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    localStorage.setItem('tanatswa_notes', JSON.stringify(updated));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            Friendship Notes <Heart className="h-6 w-6 text-primary fill-current" />
          </h1>
          <p className="text-muted-foreground">Little messages for happy days.</p>
        </div>
        <Button onClick={() => setIsAdding(!isAdding)} className="rounded-full gap-2 px-6">
          <Plus className="h-4 w-4" />
          Write a Note
        </Button>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-12 overflow-hidden"
          >
            <Card className="border-2 border-primary/20 bg-background/50">
              <CardContent className="p-6">
                <Textarea 
                  placeholder="Type your kind message here..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="mb-4 min-h-[120px] rounded-2xl resize-none text-lg border-2 focus-visible:ring-primary"
                />
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => setIsAdding(false)} className="rounded-full">Cancel</Button>
                  <Button onClick={addNote} className="rounded-full px-8">Save Note</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <motion.div
            key={note.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Card className={`group relative h-full border-none shadow-md overflow-hidden rounded-3xl ${note.color}`}>
              <CardContent className="p-8 pt-10">
                <div className="absolute top-4 left-6 opacity-20 transform -translate-x-1/2 -translate-y-1/2">
                  <Heart className="h-12 w-12 fill-current" />
                </div>
                <p className="text-lg font-medium relative z-10 leading-relaxed italic">"{note.content}"</p>
                <div className="mt-8 flex items-center justify-between">
                   <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                     <Calendar className="h-3 w-3" />
                     {note.date}
                   </div>
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => deleteNote(note.id)}
                    className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                   >
                     <Trash2 className="h-4 w-4" />
                   </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {notes.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground italic">No notes yet. Start writing something sweet!</p>
        </div>
      )}
    </div>
  );
}
