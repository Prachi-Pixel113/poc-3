import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Clock,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  Target,
  Trophy,
  Award
} from 'lucide-react';

const QuestionPractice = ({ onNavigate, onBack }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState(new Set());
  const [score, setScore] = useState({ correct: 0, total: 0 });

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
        solution: "Step 1: Calculate profit\nProfit = Selling Price - Cost Price = 920 - 800 = ₹120\n\nStep 2: Calculate profit percentage\nProfit % = (Profit ÷ Cost Price) × 100\nProfit % = (120 ÷ 800) × 100 = 15%",
        keyPoints: [
          "Profit = SP - CP = 920 - 800 = ₹120",
          "Profit % = (Profit ÷ CP) × 100",
          "Profit % = (120 ÷ 800) × 100 = 15%"
        ],
        timeComplexity: "1-2 minutes",
        similarTopics: ["Discount", "Simple Interest"]
      }
    },
    {
      id: 4,
      topic: "Number Systems",
      difficulty: "Medium",
      question: "What is the LCM of 12, 15, and 20?",
      options: [
        { id: 'A', text: '60' },
        { id: 'B', text: '120' },
        { id: 'C', text: '180' },
        { id: 'D', text: '240' }
      ],
      correctAnswer: 'A',
      explanation: {
        solution: "Step 1: Prime factorization\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\n\nStep 2: LCM calculation\nLCM = Highest power of all prime factors\nLCM = 2² × 3 × 5 = 4 × 3 × 5 = 60",
        keyPoints: [
          "12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5",
          "LCM = 2² × 3 × 5 = 60",
          "Take highest power of each prime factor"
        ],
        timeComplexity: "2-3 minutes",
        similarTopics: ["HCF", "Prime Numbers"]
      }
    },
    {
      id: 5,
      topic: "Ratio and Proportion",
      difficulty: "Easy",
      question: "If A:B = 2:3 and B:C = 4:5, what is A:B:C?",
      options: [
        { id: 'A', text: '8:12:15' },
        { id: 'B', text: '6:9:15' },
        { id: 'C', text: '4:6:10' },
        { id: 'D', text: '2:4:5' }
      ],
      correctAnswer: 'A',
      explanation: {
        solution: "Step 1: Make B common in both ratios\nA:B = 2:3\nB:C = 4:5\n\nStep 2: Find LCM of B values (3 and 4)\nLCM of 3 and 4 = 12\n\nStep 3: Convert ratios\nA:B = 2:3 = 8:12 (multiply by 4)\nB:C = 4:5 = 12:15 (multiply by 3)\n\nStep 4: Combine\nA:B:C = 8:12:15",
        keyPoints: [
          "Make B common in both ratios",
          "LCM of 3 and 4 is 12",
          "A:B = 8:12, B:C = 12:15",
          "Combined ratio A:B:C = 8:12:15"
        ],
        timeComplexity: "2-3 minutes",
        similarTopics: ["Partnership", "Mixtures"]
      }
    }
  ];

  const handleAnswerSelect = (questionId, optionId) => {
    if (submittedAnswers.has(questionId)) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleSubmitAnswer = (questionId) => {
    if (!selectedAnswers[questionId] || submittedAnswers.has(questionId)) return;
    
    setSubmittedAnswers(prev => new Set([...prev, questionId]));
    
    const question = questions.find(q => q.id === questionId);
    if (selectedAnswers[questionId] === question.correctAnswer) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getAnsweredCount = () => selectedAnswers ? Object.keys(selectedAnswers).length : 0;
  const getSubmittedCount = () => submittedAnswers.size;
  const accuracy = score.total > 0 ? (score.correct / score.total * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Practice Questions
                </h1>
                <p className="text-sm text-slate-600">Answer all questions • {questions.length} questions total</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                {getAnsweredCount()}/{questions.length} Answered
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                {score.correct}/{score.total} Correct
              </Badge>
              {score.total > 0 && (
                <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  {accuracy}% Accuracy
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Progress Summary */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{questions.length}</p>
                <p className="text-sm text-slate-600">Total Questions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{getAnsweredCount()}</p>
                <p className="text-sm text-slate-600">Answered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{score.correct}</p>
                <p className="text-sm text-slate-600">Correct</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{accuracy}%</p>
                <p className="text-sm text-slate-600">Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scrollable Questions List */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              All Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              <div className="space-y-1">
                {questions.map((question, index) => {
                  const isSubmitted = submittedAnswers.has(question.id);
                  const selectedOption = selectedAnswers[question.id];
                  const isCorrect = isSubmitted && selectedOption === question.correctAnswer;
                  const isWrong = isSubmitted && selectedOption !== question.correctAnswer;

                  return (
                    <div key={question.id} className="p-6 border-b border-slate-100 last:border-b-0">
                      {/* Question Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">Question {index + 1}</h3>
                            <p className="text-sm text-slate-600">{question.topic}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge className={`text-xs border ${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </Badge>
                          {isSubmitted && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {isSubmitted && isWrong && (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </div>

                      {/* Question Text */}
                      <div className="mb-4">
                        <p className="text-slate-700 leading-relaxed">
                          {question.question}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2 mb-4">
                        {question.options.map((option) => {
                          let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ";
                          
                          if (isSubmitted) {
                            if (option.id === question.correctAnswer) {
                              buttonClass += "border-green-500 bg-green-50 text-green-800";
                            } else if (option.id === selectedOption && option.id !== question.correctAnswer) {
                              buttonClass += "border-red-500 bg-red-50 text-red-800";
                            } else {
                              buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                            }
                          } else if (selectedOption === option.id) {
                            buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
                          } else {
                            buttonClass += "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-slate-700";
                          }

                          return (
                            <button
                              key={option.id}
                              onClick={() => handleAnswerSelect(question.id, option.id)}
                              disabled={isSubmitted}
                              className={buttonClass}
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold">
                                  {option.id}
                                </span>
                                <span className="flex-1">{option.text}</span>
                                {isSubmitted && option.id === question.correctAnswer && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                                {isSubmitted && option.id === selectedOption && selectedOption !== question.correctAnswer && (
                                  <XCircle className="h-4 w-4 text-red-600" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        {!isSubmitted && selectedOption ? (
                          <Button
                            onClick={() => handleSubmitAnswer(question.id)}
                            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg"
                          >
                            Submit Answer
                          </Button>
                        ) : !isSubmitted ? (
                          <Button
                            disabled
                            variant="outline"
                            className="px-4 py-2 rounded-lg opacity-50"
                          >
                            Select an answer
                          </Button>
                        ) : (
                          <Button
                            disabled
                            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Submitted
                          </Button>
                        )}
                      </div>

                      {/* Explanation (show only after submission) */}
                      {isSubmitted && question.explanation && (
                        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="h-4 w-4 text-amber-600" />
                            <h4 className="font-semibold text-slate-800">Explanation</h4>
                          </div>
                          <div className="space-y-3">
                            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">
                              {question.explanation.solution}
                            </pre>
                            {question.explanation.keyPoints && (
                              <div>
                                <p className="text-sm font-semibold text-slate-700 mb-2">Key Points:</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                  {question.explanation.keyPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit All Button */}
        <div className="text-center">
          <Button
            onClick={handleSubmitAll}
            disabled={getAnsweredCount() === 0 || getAnsweredCount() === getSubmittedCount()}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            <Trophy className="h-5 w-5 mr-2" />
            Submit All Answers ({getAnsweredCount() - getSubmittedCount()} remaining)
          </Button>
        </div>
      </main>
    </div>
  );
};

export default QuestionPractice;