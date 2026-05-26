import { Quiz, Game } from './types';

export const QUIZZES: Quiz[] = [
  {
    id: 'friendship-1',
    title: 'Friendship Quiz',
    description: 'How strong is our bond? Let\'s find out!',
    category: 'Friendship',
    icon: 'Heart',
    questions: [
      { id: 'q1', text: 'What is the most important quality in a friend?', options: ['Honesty', 'Humor', 'Loyalty', 'All of the above'], correctAnswer: 3 },
      { id: 'q2', text: 'What do we usually do when we hang out?', options: ['Talk for hours', 'Play games', 'Watch movies', 'All of the above'], correctAnswer: 3 },
      { id: 'q3', text: 'How do you know someone is your best friend?', options: ['They have your back', 'They know your secrets', 'They make you laugh', 'All the above'], correctAnswer: 3 },
      { id: 'q4', text: 'What makes a friendship last?', options: ['Communication', 'Trust', 'Time', 'Everything above'], correctAnswer: 3 },
      { id: 'q5', text: 'If we were in a movie, which duo would we be?', options: ['Batman & Robin', 'SpongeBob & Patrick', 'Sherlock & Watson', 'Lilo & Stitch'], correctAnswer: 1 },
    ]
  },
  {
    id: 'personality-1',
    title: 'Fun Personality Quiz',
    description: 'What kind of fun person are you?',
    category: 'Personality',
    icon: 'User',
    questions: [
      { id: 'p1', text: 'If you were a color, which would you be?', options: ['Sunlight Yellow', 'Calm Blue', 'Vibrant Pink', 'Deep Purple'], correctAnswer: 0 },
      { id: 'p2', text: 'Pick a superpower!', options: ['Flight', 'Invisibility', 'Teleportation', 'Time Travel'], correctAnswer: 2 },
      { id: 'p3', text: 'What\'s your dream vacation?', options: ['Beach resort', 'Mountain cabin', 'Busy city', 'Jungle adventure'], correctAnswer: 0 },
      { id: 'p4', text: 'What describes you best?', options: ['Creative', 'Logical', 'Spontaneous', 'Kind'], correctAnswer: 3 },
      { id: 'p5', text: 'Your favorite season is...', options: ['Summer', 'Winter', 'Spring', 'Autumn'], correctAnswer: 2 },
    ]
  },
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: 'Test your brain power!',
    category: 'Knowledge',
    icon: 'Brain',
    questions: [
      { id: 'gk1', text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 1 },
      { id: 'gk2', text: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 3 },
      { id: 'gk3', text: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'], correctAnswer: 1 },
      { id: 'gk4', text: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], correctAnswer: 2 },
      { id: 'gk5', text: 'How many continents are there?', options: ['5', '6', '7', '8'], correctAnswer: 2 },
    ]
  },
  {
    id: 'bible-quiz',
    title: 'Bible & Inspirational Quiz',
    description: 'How well do you know your Bible stories?',
    category: 'Bible',
    icon: 'Book',
    questions: [
      { id: 'b1', text: 'Who built the ark?', options: ['Moses', 'Noah', 'Abraham', 'David'], correctAnswer: 1 },
      { id: 'b2', text: 'How many disciples did Jesus have?', options: ['10', '12', '14', '7'], correctAnswer: 1 },
      { id: 'b3', text: 'Who defeated Goliath?', options: ['Saul', 'Solomon', 'David', 'Samson'], correctAnswer: 2 },
      { id: 'b4', text: 'What is the first book of the Bible?', options: ['Exodus', 'Psalms', 'Genesis', 'Matthew'], correctAnswer: 2 },
      { id: 'b5', text: 'Which sea did Moses part?', options: ['Dead Sea', 'Red Sea', 'Mediterrean Sea', 'Caspian Sea'], correctAnswer: 1 },
    ]
  },
  {
    id: 'technology-quiz',
    title: 'Technology Quiz',
    description: 'Are you a tech wiz?',
    category: 'Technology',
    icon: 'Laptop',
    questions: [
      { id: 't1', text: 'What does "WWW" stand for?', options: ['World Wide Web', 'Wild Wide Web', 'World White Web', 'Web Wide World'], correctAnswer: 0 },
      { id: 't2', text: 'Who co-founded Microsoft?', options: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'], correctAnswer: 1 },
      { id: 't3', text: 'Which company makes the iPhone?', options: ['Samsung', 'Google', 'Apple', 'Huawei'], correctAnswer: 2 },
      { id: 't4', text: 'Search engine starting with "G"?', options: ['Ging', 'Gahoo', 'Google', 'GuckGuckGo'], correctAnswer: 2 },
      { id: 't5', text: 'What is the brain of the computer?', options: ['RAM', 'Hard Drive', 'CPU', 'GPU'], correctAnswer: 2 },
    ]
  },
  {
    id: 'music-quiz',
    title: 'Music Quiz',
    description: 'Love tunes? Let\'s see!',
    category: 'Music',
    icon: 'Music',
    questions: [
      { id: 'm1', text: 'Who is the "King of Pop"?', options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Freddie Mercury'], correctAnswer: 1 },
      { id: 'm2', text: 'How many strings does a standard guitar have?', options: ['4', '5', '6', '12'], correctAnswer: 2 },
      { id: 'm3', text: 'Which singer is known as "Queen Bey"?', options: ['Rihanna', 'Beyoncé', 'Adele', 'Lizzo'], correctAnswer: 1 },
      { id: 'm4', text: 'What instrument do you hit?', options: ['Violin', 'Flute', 'Drums', 'Piano'], correctAnswer: 2 },
      { id: 'm5', text: 'In which city did Jazz originate?', options: ['New York', 'New Orleans', 'Chicago', 'Nashville'], correctAnswer: 1 },
    ]
  },
  {
    id: 'movie-quiz',
    title: 'Movie Quiz',
    description: 'Popcorn ready? Lights, camera, action!',
    category: 'Movies',
    icon: 'Film',
    questions: [
      { id: 'f1', text: 'Who is the green ogre that lives in a swamp?', options: ['Fiona', 'Shrek', 'Donkey', 'Puss in Boots'], correctAnswer: 1 },
      { id: 'f2', text: 'What is the highest-grossing film ever?', options: ['Avatar', 'Titanic', 'Avengers: Endgame', 'Star Wars'], correctAnswer: 0 },
      { id: 'f3', text: 'Who directed "Jurassic Park"?', options: ['Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese', 'James Cameron'], correctAnswer: 1 },
      { id: 'f4', text: 'What is the name of Simba\'s father?', options: ['Scar', 'Mufasa', 'Pumbaa', 'Timon'], correctAnswer: 1 },
      { id: 'f5', text: 'Which superhero is a billionaire?', options: ['Spider-Man', 'Iron Man', 'The Flash', 'Thor'], correctAnswer: 1 },
    ]
  },
  {
    id: 'food-quiz',
    title: 'Food Quiz',
    description: 'Yummy! Take the bite.',
    category: 'Food',
    icon: 'Utensils',
    questions: [
      { id: 'fo1', text: 'What is the main ingredient in hummus?', options: ['Lentils', 'Chickpeas', 'Beans', 'Peas'], correctAnswer: 1 },
      { id: 'fo2', text: 'Which fruit is known as the "king of fruits"?', options: ['Apple', 'Mango', 'Durian', 'Banana'], correctAnswer: 2 },
      { id: 'fo3', text: 'What country is Sushi from?', options: ['China', 'Japan', 'Thailand', 'Vietnam'], correctAnswer: 1 },
      { id: 'fo4', text: 'What is the most popular spice in the world?', options: ['Cinnamon', 'Black Pepper', 'Cumin', 'Salt'], correctAnswer: 1 },
      { id: 'fo5', text: 'Which nut is in Marzipan?', options: ['Walnut', 'Almond', 'Pecan', 'Hazelnut'], correctAnswer: 1 },
    ]
  },
  {
    id: 'sports-quiz',
    title: 'Sports Quiz',
    description: 'Are you an athlete at heart?',
    category: 'Sports',
    icon: 'Trophy',
    questions: [
      { id: 's1', text: 'How many players are in a soccer team?', options: ['9', '10', '11', '12'], correctAnswer: 2 },
      { id: 's2', text: 'Which sport uses a shuttlecock?', options: ['Tennis', 'Badminton', 'Squash', 'Golf'], correctAnswer: 1 },
      { id: 's3', text: 'How long is a marathon?', options: ['21km', '30km', '42.195km', '50km'], correctAnswer: 2 },
      { id: 's4', text: 'Who has won the most Ballon d\'Or?', options: ['Ronaldo', 'Messi', 'Pelé', 'Cruyff'], correctAnswer: 1 },
      { id: 's5', text: 'Which country won the 2022 World Cup?', options: ['France', 'Brazil', 'Argentina', 'Germany'], correctAnswer: 2 },
    ]
  },
  {
    id: 'animal-quiz',
    title: 'Animal Quiz',
    description: 'Roar! How much about animals do you know?',
    category: 'Animals',
    icon: 'PawPrint',
    questions: [
      { id: 'a1', text: 'What is the fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Eagle'], correctAnswer: 1 },
      { id: 'a2', text: 'Which mammal can fly?', options: ['Penguin', 'Ostrich', 'Bat', 'Flying Squirrel'], correctAnswer: 2 },
      { id: 'a3', text: 'How many hearts does an octopus have?', options: ['1', '2', '3', '4'], correctAnswer: 2 },
      { id: 'a4', text: 'What is a group of lions called?', options: ['Pack', 'Herd', 'Pride', 'Flock'], correctAnswer: 2 },
      { id: 'a5', text: 'Which bird is the symbol of peace?', options: ['Dove', 'Eagle', 'Owl', 'Swan'], correctAnswer: 0 },
    ]
  },
  {
    id: 'geography-quiz',
    title: 'Geography Quiz',
    description: 'Travel the world from your screen.',
    category: 'Geography',
    icon: 'Globe',
    questions: [
      { id: 'g1', text: 'Largest country by land area?', options: ['China', 'USA', 'Russia', 'Canada'], correctAnswer: 2 },
      { id: 'g2', text: 'Tallest mountain in the world?', options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Fuji'], correctAnswer: 1 },
      { id: 'g3', text: 'Longest river in the world?', options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'], correctAnswer: 1 },
      { id: 'g4', text: 'Which continent has the most countries?', options: ['Asia', 'Africa', 'Europe', 'South America'], correctAnswer: 1 },
      { id: 'g5', text: 'Smallest country in the world?', options: ['Monaco', 'Vatican City', 'Malta', 'San Marino'], correctAnswer: 1 },
    ]
  },
  {
    id: 'history-quiz',
    title: 'History Quiz',
    description: 'Back in time we go!',
    category: 'History',
    icon: 'Clock',
    questions: [
      { id: 'h1', text: 'Who was the first President of the USA?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], correctAnswer: 1 },
      { id: 'h2', text: 'When did WW2 end?', options: ['1918', '1939', '1945', '1950'], correctAnswer: 2 },
      { id: 'h3', text: 'Who was the first man on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Elon Musk'], correctAnswer: 1 },
      { id: 'h4', text: 'Which civilization built the pyramids?', options: ['Romans', 'Greeks', 'Egyptians', 'Mayans'], correctAnswer: 2 },
      { id: 'h5', text: 'Who painted the Mona Lisa?', options: ['Picasso', 'Van Gogh', 'Leonardo da Vinci', 'Michelangelo'], correctAnswer: 2 },
    ]
  },
  {
    id: 'riddles-quiz',
    title: 'Riddles Quiz',
    description: 'Can you solve these brain ticklers?',
    category: 'Logic',
    icon: 'Sparkles',
    questions: [
      { id: 'r1', text: 'What has keys but can\'t open locks?', options: ['A map', 'A piano', 'A book', 'The wind'], correctAnswer: 1 },
      { id: 'r2', text: 'What comes down but never goes up?', options: ['Snow', 'Rain', 'Price', 'A ball'], correctAnswer: 1 },
      { id: 'r3', text: 'I am full of holes but still hold water. What am I?', options: ['Sponge', 'Bucket', 'Cloud', 'Sieve'], correctAnswer: 0 },
      { id: 'r4', text: 'What has to be broken before you can use it?', options: ['Silence', 'A promise', 'An egg', 'A law'], correctAnswer: 2 },
      { id: 'r5', text: 'What is black when it\'s clean and white when it\'s dirty?', options: ['A car', 'A blackboard', 'A shoe', 'A dog'], correctAnswer: 1 },
    ]
  },
  {
    id: 'brain-teasers',
    title: 'Brain Teasers',
    description: 'Think outside the box!',
    category: 'Logic',
    icon: 'Puzzle',
    questions: [
      { id: 'bt1', text: 'If 1=5, 2=25, 3=125, 4=625, then 5=?', options: ['3125', '1', '2500', '500'], correctAnswer: 1 },
      { id: 'bt2', text: 'What month has 28 days?', options: ['February', 'None', 'All of them', 'July'], correctAnswer: 2 },
      { id: 'bt3', text: 'How many months have 31 days?', options: ['7', '6', '8', '5'], correctAnswer: 0 },
      { id: 'bt4', text: 'What has an eye but cannot see?', options: ['Storm', 'Needle', 'Potato', 'Both needle and potato'], correctAnswer: 3 },
      { id: 'bt5', text: 'What begins with T, finishes with T and has T in it?', options: ['Teapot', 'Tent', 'Toast', 'Thought'], correctAnswer: 0 },
    ]
  },
  {
     id: 'guess-emoji-quiz',
     title: 'Guess the Emoji Quiz',
     description: 'Translate emojis into words!',
     category: 'Fun',
     icon: 'Smile',
     questions: [
       { id: 'e1', text: '🍎🥧', options: ['Apple Pie', 'Fruit Tart', 'Red Cake', 'Bake Apple'], correctAnswer: 0 },
       { id: 'e2', text: '❄️⚪', options: ['Snow White', 'Ice Ball', 'Cold Moon', 'Winter'], correctAnswer: 0 },
       { id: 'e3', text: '🕷️👨', options: ['Bug Man', 'Spider-Man', 'Fly Guy', 'Web Master'], correctAnswer: 1 },
       { id: 'e4', text: '🦁👑', options: ['Zoo Boss', 'Lion King', 'Tiger Ruler', 'Cat Power'], correctAnswer: 1 },
       { id: 'e5', text: '🍯🐝', options: ['Sweet Fly', 'Honey Bee', 'Sugar Bug', 'Gold Wing'], correctAnswer: 1 },
     ]
  },
  {
    id: 'true-false-quiz',
    title: 'True or False Quiz',
    description: 'Quick! True or False?',
    category: 'Knowledge',
    icon: 'CheckCircle',
    questions: [
      { id: 'tf1', text: 'Goldfish only have a 3 second memory.', options: ['True', 'False'], correctAnswer: 1 },
      { id: 'tf2', text: 'Hot water freezes faster than cold water.', options: ['True', 'False'], correctAnswer: 0 },
      { id: 'tf3', text: 'Sharks are mammals.', options: ['True', 'False'], correctAnswer: 1 },
      { id: 'tf4', text: 'The Great Wall of China is visible from space.', options: ['True', 'False'], correctAnswer: 1 },
      { id: 'tf5', text: 'Humans share 50% of their DNA with bananas.', options: ['True', 'False'], correctAnswer: 0 },
    ]
  },
  {
    id: 'this-that-quiz',
    title: 'This or That Quiz',
    description: 'Pick your preference!',
    category: 'Fun',
    icon: 'ArrowLeftRight',
    questions: [
      { id: 'tt1', text: 'Summer vs Winter?', options: ['Summer', 'Winter'], correctAnswer: 0 },
      { id: 'tt2', text: 'Cats vs Dogs?', options: ['Cats', 'Dogs'], correctAnswer: 1 },
      { id: 'tt3', text: 'Pizza vs Burger?', options: ['Pizza', 'Burger'], correctAnswer: 0 },
      { id: 'tt4', text: 'Books vs Movies?', options: ['Books', 'Movies'], correctAnswer: 1 },
      { id: 'tt5', text: 'Morning vs Night?', options: ['Morning', 'Night'], correctAnswer: 1 },
    ]
  },
  {
    id: 'random-fun-quiz',
    title: 'Random Fun Quiz',
    description: 'Just for kicks!',
    category: 'Fun',
    icon: 'Zap',
    questions: [
      { id: 'rf1', text: 'Which is faster?', options: ['Light', 'Sound'], correctAnswer: 0 },
      { id: 'rf2', text: 'Most common last name?', options: ['Smith', 'Wang', 'Nguyen', 'Garcia'], correctAnswer: 1 },
      { id: 'rf3', text: 'Which is a fruit?', options: ['Tomato', 'Cucumber', 'Pumpkin', 'All are fruits'], correctAnswer: 3 },
      { id: 'rf4', text: 'What is a "dozeng"?', options: ['10', '12', '14', '20'], correctAnswer: 1 },
      { id: 'rf5', text: 'How many teeth does an adult human typically have?', options: ['28', '30', '32', '34'], correctAnswer: 2 },
    ]
  },
  {
    id: 'school-life',
    title: 'School Life Quiz',
    description: 'Back to the classroom!',
    category: 'School',
    icon: 'GraduationCap',
    questions: [
      { id: 'sl1', text: 'What is 7x8?', options: ['54', '56', '64', '52'], correctAnswer: 1 },
      { id: 'sl2', text: 'Who wrote the dictionary?', options: ['Webster', 'Einstein', 'Newton', 'Galileo'], correctAnswer: 0 },
      { id: 'sl3', text: 'Which gas do plants absorb?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'], correctAnswer: 1 },
      { id: 'sl4', text: 'Smallest prime number?', options: ['1', '2', '3', '0'], correctAnswer: 1 },
      { id: 'sl5', text: 'What is the sum of angles in a triangle?', options: ['90', '180', '270', '360'], correctAnswer: 1 },
    ]
  },
  {
    id: 'how-well-know-me',
    title: 'How Well Do You Know Me?',
    description: 'The ultimate friendship test!',
    category: 'Friendship',
    icon: 'HeartHandshake',
    questions: [
      { id: 'hk1', text: 'What\'s my favorite color?', options: ['Blue', 'Purple', 'Pink', 'Green'], correctAnswer: 1 },
      { id: 'hk2', text: 'What dessert do I love most?', options: ['Cake', 'Ice Cream', 'Chocolate', 'Fruits'], correctAnswer: 2 },
      { id: 'hk3', text: 'Am I a morning person or night owl?', options: ['Morning', 'Night Owl'], correctAnswer: 1 },
      { id: 'hk4', text: 'What is my favorite hobby?', options: ['Reading', 'Drawing', 'Gaming', 'Music'], correctAnswer: 2 },
      { id: 'hk5', text: 'What kind of movies do I prefer?', options: ['Action', 'Comedy', 'Horror', 'Romance'], correctAnswer: 1 },
    ]
  }
];

export const GAMES: Game[] = [
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    description: 'The classic game of X\'s and O\'s.',
    instruction: 'Get three in a row to win!',
    category: 'Board Game',
    icon: 'Grid3X3'
  },
  {
    id: 'rps',
    title: 'Rock Paper Scissors',
    description: 'Battle against the computer!',
    instruction: 'Rock beats Scissors, Scissors beats Paper, Paper beats Rock.',
    category: 'Classic',
    icon: 'Hand'
  },
  {
    id: 'memory',
    title: 'Memory Match',
    description: 'Test your memory cards.',
    instruction: 'Find all matching pairs of emojis.',
    category: 'Memory',
    icon: 'Shapes'
  },
  {
    id: 'numberguess',
    title: 'Number Guessing',
    description: 'Guess the secret number.',
    instruction: 'I\'m thinking of a number between 1 and 100. Can you find it?',
    category: 'Math',
    icon: 'Hash'
  },
  {
    id: 'wordscramble',
    title: 'Word Scramble',
    description: 'Unscramble the letters.',
    instruction: 'Rearrange the letters to form a friendship-related word!',
    category: 'Word',
    icon: 'Languages'
  },
  {
    id: 'hangman',
    title: 'Word Guess (Hangman)',
    description: 'Guess the hidden word.',
    instruction: 'Click letters to guess the word before the man is hung.',
    category: 'Word',
    icon: 'Search'
  },
  {
    id: 'emojiguess',
    title: 'Emoji Master',
    description: 'Guess the meaning of emojis.',
    instruction: 'Which phrase describes these emojis?',
    category: 'Fun',
    icon: 'Smile'
  },
  {
    id: 'quickmath',
    title: 'Quick Math',
    description: 'Answer fast!',
    instruction: 'Solve as many math problems as you can in 30 seconds.',
    category: 'Math',
    icon: 'Calculator'
  },
  {
    id: 'reaction',
    title: 'Reaction Timer',
    description: 'How fast are you?',
    instruction: 'Click the button as soon as it turns green!',
    category: 'Skill',
    icon: 'Timer'
  },
  {
    id: 'truthdare',
    title: 'Truth or Dare Spinner',
    description: 'Fun with friends!',
    instruction: 'Spin the wheel and choose your fate.',
    category: 'Social',
    icon: 'RotateCw'
  },
  {
    id: 'wouldyourather',
    title: 'Would You Rather',
    description: 'Impossible choices!',
    instruction: 'Choose between two tough options.',
    category: 'Social',
    icon: 'Split'
  },
  {
    id: 'colormatch',
    title: 'Color Match',
    description: 'Matching colors fast.',
    instruction: 'Click the color that matches the word, not the ink!',
    category: 'Mental',
    icon: 'Palette'
  },
  {
    id: 'clickchallenge',
    title: 'Click Challenge',
    description: 'How many clicks?',
    instruction: 'Click as many times as you can in 10 seconds.',
    category: 'Skill',
    icon: 'MousePointer2'
  },
  {
    id: 'puzzlequiz',
    title: 'Simple Puzzle',
    description: 'Slide the pieces.',
    instruction: 'Rearrange the blocks to complete the image.',
    category: 'Logic',
    icon: 'Puzzle'
  },
  {
    id: 'friendshipwheel',
    title: 'Challenge Wheel',
    description: 'Do a friendly deed.',
    instruction: 'Spin for a random friendship challenge!',
    category: 'Social',
    icon: 'Trophy'
  }
];

export const CHALLENGES = [
  "Send a kind message to Tanatswa right now! 💌",
  "Tell a funny joke to make her laugh! 😂",
  "Share a random fun fact about yourself! 🧠",
  "Pick a song and share it as our 'Song of the Day' 🎵",
  "Do a 10-second silly dance! 💃",
  "Share your favorite memory of us together! 📸",
  "Give a heartfelt compliment! 🌟",
  "Choose a game for us to play next! 🎮",
  "Send a virtual hug! 🤗",
  "Draw a quick doodle and show it! 🎨"
];
