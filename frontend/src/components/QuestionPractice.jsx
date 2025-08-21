import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  Target
} from 'lucide-react';

const QuestionPractice = ({ onNavigate, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [timeSpent, setTimeSpent] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
    {
      id: 1,
      topic: "Percentages",
      difficulty: "Medium",
      question: "If 25% of a number is 40, what is 60% of the same number?",
      options: [
        { id: 'A', text: '96' },
        { id: 'B', text: '120' },
        { id: 'C', text: '160' },
        { id: 'D', text: '240' }
      ],
      correctAnswer: 'A',
      explanation: {
        solution: "Let the number be x. According to the problem: 25% of x = 40\n\nStep 1: Find the value of x\n25/100 × x = 40\nx/4 = 40\nx = 40 × 4 = 160\n\nStep 2: Find 60% of x\n60% of 160 = 60/100 × 160 = 96",
        keyPoints: [
          "Set up equation: 25% of x = 40",
          "Solve for x: x = 40 ÷ 0.25 = 160",
          "Calculate 60%: 160 × 0.60 = 96"
        ],
        timeComplexity: "2-3 minutes",
        similarTopics: ["Ratio and Proportion", "Basic Algebra"]
      }
    },
    {
      id: 2,
      topic: "Time and Work",
      difficulty: "Hard",
      question: "A can complete a work in 12 days and B can complete the same work in 18 days. If they work together for 4 days and then A leaves, in how many more days will B complete the remaining work?",
      options: [
        { id: 'A', text: '6 days' },
        { id: 'B', text: '8 days' },
        { id: 'C', text: '10 days' },
        { id: 'D', text: '12 days' }
      ],
      correctAnswer: 'C',
      explanation: {
        solution: "Step 1: Find individual work rates\nA's rate = 1/12 work per day\nB's rate = 1/18 work per day\n\nStep 2: Combined work rate\nCombined rate = 1/12 + 1/18 = 5/36 work per day\n\nStep 3: Work completed in 4 days together\nWork done = 4 × 5/36 = 5/9 of total work\n\nStep 4: Remaining work\nRemaining work = 1 - 5/9 = 4/9 of total work\n\nStep 5: Time for B to complete remaining work\nTime = (4/9) ÷ (1/18) = (4/9) × 18 = 8 days",
        keyPoints: [
          "A's rate: 1/12 work/day, B's rate: 1/18 work/day",
          "Combined rate: 5/36 work/day",
          "Work done together in 4 days: 5/9 of total work",
          "Remaining work for B alone: 4/9 of total work"
        ],
        timeComplexity: "4-5 minutes",
        similarTopics: ["Pipes and Cisterns", "Partnership"]
      }
    },
    {
      id: 3,
      topic: "Profit and Loss",
      difficulty: "Easy",
      question: "A shopkeeper bought an article for ₹800 and sold it for ₹920. What is the profit percentage?",
      options: [
        { id: 'A', text: '12%' },
        { id: 'B', text: '15%' },
        { id: 'C', text: '20%' },
        { id: 'D', text: '25%' }
      ],
      correctAnswer: 'B',
      explanation: {
        solution: "Given:\nCost Price (CP) = ₹800\nSelling Price (SP) = ₹920\n\nStep 1: Calculate Profit\nProfit = SP - CP = 920 - 800 = ₹120\n\nStep 2: Calculate Profit Percentage\nProfit% = (Profit/CP) × 100\nProfit% = (120/800) × 100\nProfit% = 0.15 × 100 = 15%",
        keyPoints: [
          "Profit = Selling Price - Cost Price",
          "Profit% = (Profit ÷ Cost Price) × 100",
          "Always calculate percentage on Cost Price"
        ],
        timeComplexity: "1-2 minutes",
        similarTopics: ["Discount", "Simple Interest"]
      }
    },
    {
      id: 4,
      topic: "Ratio and Proportion",
      difficulty: "Medium",
      question: "The ratio of ages of A and B is 3:4. After 5 years, their ratio becomes 4:5. What is the present age of A?",
      options: [
        { id: 'A', text: '12 years' },
        { id: 'B', text: '15 years' },
        { id: 'C', text: '18 years' },
        { id: 'D', text: '20 years' }
      ],
      correctAnswer: 'B',
      explanation: {
        solution: "Let present ages be:\nA = 3x years\nB = 4x years\n\nAfter 5 years:\nA's age = 3x + 5\nB's age = 4x + 5\n\nGiven ratio after 5 years = 4:5\n(3x + 5)/(4x + 5) = 4/5\n\nCross multiply:\n5(3x + 5) = 4(4x + 5)\n15x + 25 = 16x + 20\n25 - 20 = 16x - 15x\n5 = x\n\nTherefore, present age of A = 3x = 3 × 5 = 15 years",
        keyPoints: [
          "Use variables to represent ratios: A = 3x, B = 4x",
          "Set up equation for future ratio",
          "Cross multiply to solve for x",
          "Substitute back to find actual age"
        ],
        timeComplexity: "3-4 minutes",
        similarTopics: ["Ages Problems", "Linear Equations"]
      }
    },
    {
      id: 5,
      topic: "Number Systems",
      difficulty: "Easy",
      question: "What is the sum of first 20 natural numbers?",
      options: [
        { id: 'A', text: '190' },
        { id: 'B', text: '200' },
        { id: 'C', text: '210' },
        { id: 'D', text: '220' }
      ],
      correctAnswer: 'C',
      explanation: {
        solution: "Method 1 - Using Formula:\nSum of first n natural numbers = n(n+1)/2\nFor n = 20:\nSum = 20(20+1)/2 = 20 × 21/2 = 420/2 = 210\n\nMethod 2 - Direct Addition:\n1+2+3+...+20 = 210\n\nMethod 3 - Pairing:\n(1+20) + (2+19) + (3+18) + ... + (10+11)\n= 21 + 21 + 21 + ... + 21 (10 pairs)\n= 21 × 10 = 210",
        keyPoints: [
          "Formula: Sum = n(n+1)/2 where n is the count of numbers",
          "Can be solved by pairing first and last terms",
          "Arithmetic progression with first term a=1, common difference d=1"
        ],
        timeComplexity: "1 minute",
        similarTopics: ["Arithmetic Progressions", "Series and Sequences"]
      }
    }
  ];

  const currentQ = questions[currentQuestion];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (optionId) => {
    if (!isAnswered) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    setIsAnswered(true);
    setShowExplanation(true);
    
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsAnswered(false);
    } else {
      // Navigate to results
      onNavigate('score-summary');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="hover:bg-blue-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Practice Questions
                </h1>
                <p className="text-sm text-slate-600">{currentQ.topic} • Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-sm">{formatTime(timeSpent)}</span>
              </div>
              <Badge className={`${getDifficultyColor(currentQ.difficulty)} border text-xs`}>
                {currentQ.difficulty}
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs">
                {score.correct}/{score.total} Score
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          
          {/* Question Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        Question {currentQuestion + 1}
                      </CardTitle>
                      <p className="text-sm text-slate-600">{currentQ.topic}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  {currentQ.question}
                </p>
                
                {/* Answer Options */}
                <div className="space-y-2 mb-4 flex-grow">
                  {currentQ.options.map((option) => {
                    let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ";
                    
                    if (isAnswered) {
                      if (option.id === currentQ.correctAnswer) {
                        buttonClass += "border-green-500 bg-green-50 text-green-800";
                      } else if (option.id === selectedAnswer && selectedAnswer !== currentQ.correctAnswer) {
                        buttonClass += "border-red-500 bg-red-50 text-red-800";
                      } else {
                        buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                      }
                    } else if (selectedAnswer === option.id) {
                      buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
                    } else {
                      buttonClass += "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-slate-700";
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswerSelect(option.id)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold">
                            {option.id}
                          </span>
                          <span className="flex-1">{option.text}</span>
                          {isAnswered && option.id === currentQ.correctAnswer && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                          {isAnswered && option.id === selectedAnswer && selectedAnswer !== currentQ.correctAnswer && (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end mt-auto">
                  {!isAnswered ? (
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNextQuestion}
                      className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6"
                    >
                      {currentQuestion < questions.length - 1 ? (
                        <>
                          Next Question
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      ) : (
                        <>
                          View Results
                          <Target className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Explanation Section - Moved to Sidebar */}
          <div>
            {showExplanation ? (
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Explanation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 overflow-y-auto">
                  
                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Solution:</h4>
                    <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-700 whitespace-pre-line">
                      {currentQ.explanation.solution}
                    </div>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Points:</h4>
                    <ul className="space-y-1">
                      {currentQ.explanation.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-slate-700 text-xs">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <div className="bg-blue-50 rounded-lg p-2 border border-blue-100">
                      <h5 className="font-semibold text-blue-800 mb-1 text-xs">Time</h5>
                      <p className="text-blue-700 text-xs">{currentQ.explanation.timeComplexity}</p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-2 border border-teal-100">
                      <h5 className="font-semibold text-teal-800 mb-1 text-xs">Similar Topics</h5>
                      <div className="flex flex-wrap gap-1">
                        {currentQ.explanation.similarTopics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full flex items-center justify-center">
                <CardContent className="text-center">
                  <Lightbulb className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Submit your answer to see the detailed explanation</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPractice;