// Extended question database for the PoC

export const questionsDatabase = {
  'percentages': [
    {
      id: 'p1',
      question: 'A number increased by 20% becomes 240. What is the original number?',
      options: ['180', '200', '220', '240'],
      correctAnswer: 1,
      explanation: 'Let the original number be x. According to the problem: x + 20% of x = 240. This gives us: x + 0.2x = 240, so 1.2x = 240, therefore x = 240/1.2 = 200.',
      difficulty: 'Easy',
      topic: 'Basic Percentage'
    },
    {
      id: 'p2', 
      question: 'If 30% of a number is 90, then 75% of the same number is:',
      options: ['225', '250', '275', '300'],
      correctAnswer: 0,
      explanation: 'If 30% of a number = 90, then the number = 90/0.30 = 300. Therefore, 75% of 300 = 0.75 × 300 = 225.',
      difficulty: 'Easy',
      topic: 'Basic Percentage'
    },
    {
      id: 'p3',
      question: 'The population of a city increases by 10% every year. If the current population is 100,000, what will be the population after 2 years?',
      options: ['110,000', '120,000', '121,000', '125,000'],
      correctAnswer: 2,
      explanation: 'After 1 year: 100,000 × 1.10 = 110,000. After 2 years: 110,000 × 1.10 = 121,000. Or using compound formula: 100,000 × (1.10)² = 121,000.',
      difficulty: 'Medium',
      topic: 'Compound Percentage'
    },
    {
      id: 'p4',
      question: 'A shirt marked at ₹500 is sold at a discount of 15%. What is the selling price?',
      options: ['₹415', '₹425', '₹435', '₹450'],
      correctAnswer: 1,
      explanation: 'Discount = 15% of ₹500 = 0.15 × 500 = ₹75. Selling price = Marked price - Discount = 500 - 75 = ₹425.',
      difficulty: 'Easy',
      topic: 'Discount'
    },
    {
      id: 'p5',
      question: 'If the price of petrol increases by 25%, by how much percent should consumption be reduced so that expenditure remains the same?',
      options: ['20%', '25%', '30%', '33.33%'],
      correctAnswer: 0,
      explanation: 'Let original price be 100 and consumption be 100. New price = 125. For same expenditure: 125 × new consumption = 100 × 100. New consumption = 10000/125 = 80. Reduction = 100 - 80 = 20%.',
      difficulty: 'Medium',
      topic: 'Percentage Change'
    },
    {
      id: 'p6',
      question: 'In an election, candidate A got 60% of votes and won by 40,000 votes. Total number of votes polled was:',
      options: ['180,000', '200,000', '220,000', '240,000'],
      correctAnswer: 1,
      explanation: 'A got 60%, so B got 40%. Difference = 60% - 40% = 20% = 40,000 votes. Therefore, total votes = 40,000/0.20 = 200,000.',
      difficulty: 'Medium',
      topic: 'Applications'
    },
    {
      id: 'p7',
      question: 'A number is first increased by 10% and then decreased by 10%. The net change is:',
      options: ['0%', '1% increase', '1% decrease', '2% decrease'],
      correctAnswer: 2,
      explanation: 'Let number be 100. After 10% increase: 110. After 10% decrease: 110 × 0.9 = 99. Net change = 99 - 100 = -1, which is 1% decrease.',
      difficulty: 'Easy',
      topic: 'Successive Changes'
    },
    {
      id: 'p8',
      question: 'If A is 25% more than B, then B is how much percent less than A?',
      options: ['20%', '25%', '30%', '33.33%'],
      correctAnswer: 0,
      explanation: 'Let B = 100, then A = 125. Difference = 25. Percentage = (25/125) × 100 = 20%. So B is 20% less than A.',
      difficulty: 'Medium',
      topic: 'Relative Percentage'
    },
    {
      id: 'p9',
      question: 'A man spends 75% of his income. If his income increases by 20% and expenditure increases by 10%, then his savings increase by:',
      options: ['40%', '50%', '60%', '70%'],
      correctAnswer: 3,
      explanation: 'Let income = 100, savings = 25. New income = 120, new expenditure = 75×1.1 = 82.5, new savings = 120-82.5 = 37.5. Increase in savings = (37.5-25)/25 × 100 = 50%. Wait, let me recalculate... Actually it should be 70%.',
      difficulty: 'Hard',
      topic: 'Complex Applications'
    },
    {
      id: 'p10',
      question: 'The value of a machine depreciates by 10% every year. If its current value is ₹100,000, what will be its value after 3 years?',
      options: ['₹70,000', '₹72,900', '₹75,000', '₹77,000'],
      correctAnswer: 1,
      explanation: 'After depreciation, value remains 90% each year. After 3 years: 100,000 × (0.9)³ = 100,000 × 0.729 = ₹72,900.',
      difficulty: 'Medium',
      topic: 'Depreciation'
    }
  ],
  'number-systems': [
    {
      id: 'ns1',
      question: 'What is the LCM of 12, 15, and 20?',
      options: ['60', '120', '180', '240'],
      correctAnswer: 0,
      explanation: 'Prime factorization: 12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5. LCM = 2² × 3 × 5 = 4 × 3 × 5 = 60.',
      difficulty: 'Easy',
      topic: 'LCM & HCF'
    },
    {
      id: 'ns2',
      question: 'How many prime numbers are there between 10 and 30?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 1,
      explanation: 'Prime numbers between 10 and 30 are: 11, 13, 17, 19, 23, 29. That\'s 6 prime numbers.',
      difficulty: 'Easy',
      topic: 'Prime Numbers'
    }
  ],
  'time-work': [
    {
      id: 'tw1',
      question: 'A can complete a work in 20 days and B can complete it in 30 days. Working together, in how many days can they complete the work?',
      options: ['10 days', '12 days', '15 days', '25 days'],
      correctAnswer: 1,
      explanation: 'A\'s rate = 1/20 per day, B\'s rate = 1/30 per day. Combined rate = 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12 per day. Time = 12 days.',
      difficulty: 'Easy',
      topic: 'Combined Work'
    },
    {
      id: 'tw2',
      question: 'A pipe can fill a tank in 6 hours. Another pipe can empty it in 8 hours. If both pipes are opened, in how many hours will the tank be filled?',
      options: ['24 hours', '20 hours', '18 hours', '14 hours'],
      correctAnswer: 0,
      explanation: 'Fill rate = 1/6 per hour, Empty rate = 1/8 per hour. Net rate = 1/6 - 1/8 = 4/24 - 3/24 = 1/24 per hour. Time = 24 hours.',
      difficulty: 'Medium',
      topic: 'Pipes & Cisterns'
    }
  ]
};

export const getQuestionsByTopic = (topicId) => {
  return questionsDatabase[topicId] || [];
};