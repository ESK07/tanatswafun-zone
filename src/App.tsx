/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

// Pages - We will create these next
import Home from './pages/Home';
import Games from './pages/Games';
import Quizzes from './pages/Quizzes';
import Challenges from './pages/Challenges';
import Notes from './pages/Notes';
import Scores from './pages/Scores';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col font-sans selection:bg-primary/30">
        <Navbar />
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/scores" element={<Scores />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <Toaster richColors position="top-center" />
      </div>
    </Router>
  );
}
