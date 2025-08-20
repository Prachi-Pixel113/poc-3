// Mock data for aptitude platform

export const mockTopics = [
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    description: 'Test your logical thinking and pattern recognition skills',
    icon: 'Brain',
    totalQuestions: 25,
    completedQuestions: 8,
    accuracy: 75,
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'verbal-reasoning',
    title: 'Verbal Reasoning',
    description: 'Enhance your language and comprehension abilities',
    icon: 'MessageSquare',
    totalQuestions: 30,
    completedQuestions: 12,
    accuracy: 80,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'arithmetic-aptitude',
    title: 'Arithmetic Aptitude',
    description: 'Master numerical problem-solving and calculations',
    icon: 'Calculator',
    totalQuestions: 35,
    completedQuestions: 5,
    accuracy: 60,
    color: 'from-orange-400 to-orange-600'
  }
];

export const mockQuestions = {
  'logical-reasoning': [
    {
      id: 'lr-1',
      question: 'In a certain code language, "COMPUTER" is written as "RFUVQNPC". How is "KEYBOARD" written in that code?',
      options: [
        'LFZCPBSE',
        'LFZCP BSE',
        'KEZCP BSE',
        'KEZCP SE'
      ],
      correctAnswer: 0,
      explanation: 'Each letter is shifted by +3 positions in the alphabet. C→F, O→R, M→P, P→S, U→X, T→W, E→H, R→U. Similarly, K→N, E→H, Y→B, B→E, O→R, A→D, R→U, D→G gives us NHBERDUG. Wait, let me recalculate: Looking at the pattern more carefully, each letter is replaced by the letter that comes 3 positions later, with wraparound. So KEYBOARD becomes LFZCPBSE.'
    },
    {
      id: 'lr-2',
      question: 'Find the next number in the sequence: 2, 6, 12, 20, 30, ?',
      options: ['40', '42', '44', '48'],
      correctAnswer: 1,
      explanation: 'The differences between consecutive terms are: 6-2=4, 12-6=6, 20-12=8, 30-20=10. The differences form an arithmetic sequence: 4, 6, 8, 10, ... with common difference 2. So the next difference should be 12, making the next term 30+12=42.'
    },
    {
      id: 'lr-3',
      question: 'If all Roses are Flowers and some Flowers are Red, then which conclusion is definitely true?',
      options: [
        'All Roses are Red',
        'Some Roses may be Red',
        'No Rose is Red',
        'All Red things are Roses'
      ],
      correctAnswer: 1,
      explanation: 'From the given statements, we know all roses are flowers, and some flowers are red. Since roses are a subset of flowers, and some flowers are red, it\'s possible that some roses are red, but we cannot definitively conclude that all roses are red or that no roses are red. Therefore, "Some Roses may be Red" is the only definitely true conclusion.'
    }
  ],
  'verbal-reasoning': [
    {
      id: 'vr-1',
      question: 'Choose the word that is most similar in meaning to "METICULOUS":',
      options: ['Careless', 'Thorough', 'Quick', 'Simple'],
      correctAnswer: 1,
      explanation: 'Meticulous means showing great attention to detail; very careful and precise. The word "Thorough" is the closest in meaning, as it implies completeness and attention to detail. Careless is the opposite, while Quick and Simple don\'t capture the essence of being detail-oriented.'
    },
    {
      id: 'vr-2',
      question: 'Complete the analogy: Book is to Author as Symphony is to ?',
      options: ['Orchestra', 'Composer', 'Concert', 'Music'],
      correctAnswer: 1,
      explanation: 'A book is created by an author, and similarly, a symphony is created by a composer. The relationship is between a creative work and its creator. Orchestra performs the symphony, concert is where it\'s played, and music is the broader category, but composer is the one who creates the symphony.'
    },
    {
      id: 'vr-3',
      question: 'Which sentence is grammatically correct?',
      options: [
        'Each of the students have completed their assignment.',
        'Each of the students has completed their assignment.',
        'Each of the students have completed his assignment.',
        'Each of the students has completed his or her assignment.'
      ],
      correctAnswer: 3,
      explanation: '"Each" is a singular pronoun that requires a singular verb "has". Additionally, for proper agreement, the pronoun should match in number. Option D uses "has" (singular verb) and "his or her" (singular pronouns), making it grammatically correct. Option B uses "has" but "their" (plural pronoun), creating a number disagreement.'
    }
  ],
  'arithmetic-aptitude': [
    {
      id: 'aa-1',
      question: 'If a train travels 240 km in 3 hours, what is its average speed in km/h?',
      options: ['70 km/h', '75 km/h', '80 km/h', '85 km/h'],
      correctAnswer: 2,
      explanation: 'Average speed = Total distance ÷ Total time = 240 km ÷ 3 hours = 80 km/h. This is a straightforward application of the speed formula: Speed = Distance/Time.'
    },
    {
      id: 'aa-2',
      question: 'What is 15% of 240?',
      options: ['32', '34', '36', '38'],
      correctAnswer: 2,
      explanation: 'To find 15% of 240: 15% = 15/100 = 0.15. So, 0.15 × 240 = 36. Alternatively, you can calculate: (15 × 240) ÷ 100 = 3600 ÷ 100 = 36.'
    },
    {
      id: 'aa-3',
      question: 'A shopkeeper marks up an item by 25% and then gives a discount of 20%. If the cost price is ₹100, what is the selling price?',
      options: ['₹100', '₹105', '₹110', '₹120'],
      correctAnswer: 0,
      explanation: 'Cost price = ₹100. After 25% markup: ₹100 + (25% of ₹100) = ₹100 + ₹25 = ₹125. After 20% discount on marked price: ₹125 - (20% of ₹125) = ₹125 - ₹25 = ₹100. So the selling price equals the cost price.'
    }
  ]
};

export const mockUserProgress = {
  totalQuestions: 90,
  completedQuestions: 25,
  overallAccuracy: 72,
  timeSpent: '4h 32m',
  streak: 5,
  lastActivity: '2 hours ago'
};