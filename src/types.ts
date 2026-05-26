/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  icon: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  instruction: string;
  category: string;
  icon: string;
}

export interface ScoreEntry {
  id: string;
  type: 'quiz' | 'game';
  name: string;
  score: number;
  maxScore?: number;
  date: string;
}

export interface FriendshipNote {
  id: string;
  content: string;
  date: string;
  color?: string;
}
