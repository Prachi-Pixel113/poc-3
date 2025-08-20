import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  MessageSquare,
  ArrowRight,
  Clock,
  Target,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { getQuestionsByTopic } from '../data/questions';

const QuestionDetail = ({ topicId, questionId, onNavigate, onBack }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);

  const questions = getQuestionsByTopic(topicId);
  const question = questions.find(q => q.id === questionId);
  const currentIndex = questions.findIndex(q => q.id === questionId);
  const totalQuestions = questions.length;
  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  const topicNames = {
    'percentages': 'Percentages',
    'number-systems': 'Number Systems', 
    'time-work': 'Time & Work'
  };

  useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      if (startTime && !showExplanation) {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, showExplanation]);

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextQuestion = questions[currentIndex + 1];
      onNavigate('question-detail', topicId, nextQuestion.id);
    } else {
      // Last question completed, show score summary
      onNavigate('score-summary', topicId);
    }
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setStartTime(Date.now());
    setTimeSpent(0);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Question Not Found</h2>
            <Button onClick={onBack}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Questions
              </Button>
              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {topicNames[topicId]} - Question {currentIndex + 1}
                </h1>
                <p className="text-slate-600 text-sm">
                  Question {currentIndex + 1} of {totalQuestions}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className={`text-xs border ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {formatTime(timeSpent)}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-6">
        
        {/* Progress Bar */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-slate-700">Progress</span>
              <span className="text-sm text-slate-500">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>Question {currentIndex + 1}</span>
              <span>Total {totalQuestions}</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Question Panel - Left Side */}
          <div className="space-y-6">
            
            {/* Question Header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">Question {currentIndex + 1}</div>
                  <div className="text-teal-100 text-sm">{question.topic}</div>
                </div>
              </div>
            </div>

            {/* Question Text */}
            <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {question.question}
                </p>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-500" />
                Choose your answer:
              </h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  let bgColor = 'bg-white hover:bg-slate-50';
                  let borderColor = 'border-slate-200 hover:border-slate-300';
                  let textColor = 'text-slate-700';
                  let shadowClass = 'hover:shadow-md';
                  let iconBg = 'bg-slate-600';

                  if (showExplanation) {
                    if (index === question.correctAnswer) {
                      bgColor = 'bg-gradient-to-r from-green-50 to-emerald-50';
                      borderColor = 'border-green-300';
                      textColor = 'text-green-800';
                      shadowClass = 'shadow-md shadow-green-100';
                      iconBg = 'bg-green-600';
                    } else if (index === selectedAnswer && index !== question.correctAnswer) {
                      bgColor = 'bg-gradient-to-r from-red-50 to-pink-50';
                      borderColor = 'border-red-300';
                      textColor = 'text-red-800';
                      shadowClass = 'shadow-md shadow-red-100';
                      iconBg = 'bg-red-600';
                    }
                  } else if (selectedAnswer === index) {
                    bgColor = 'bg-gradient-to-r from-teal-50 to-cyan-50';
                    borderColor = 'border-teal-400';
                    textColor = 'text-teal-800';
                    shadowClass = 'shadow-md shadow-teal-100';
                    iconBg = 'bg-teal-600';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 ${bgColor} ${borderColor} ${textColor} ${shadowClass}`}
                      disabled={showExplanation}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center text-white font-bold shadow-md`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1 font-medium">{option}</span>
                        
                        {/* Result Icons */}
                        {showExplanation && index === question.correctAnswer && (
                          <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        )}
                        {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                          <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
                            <XCircle className="h-5 w-5 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-200">
              {!showExplanation ? (
                <>
                  <Button 
                    onClick={handleSubmitAnswer} 
                    disabled={selectedAnswer === null}
                    className="flex-1 py-3 font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 shadow-lg rounded-xl"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Submit Answer
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetQuestion}
                    className="py-3 font-semibold border-2 transition-all duration-300 rounded-xl px-6"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={handleNextQuestion}
                    className="flex-1 py-3 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 shadow-lg rounded-xl"
                  >
                    {currentIndex >= totalQuestions - 1 ? 'View Results' : 'Next Question'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="py-3 font-semibold border-2 rounded-xl px-6 hover:bg-slate-50"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discuss
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Explanation Panel - Right Side */}
          <div className="space-y-6">
            
            {/* Explanation Header */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-base font-bold">Explanation</div>
                  <div className="text-orange-100 text-xs">Solution & Insights</div>
                </div>
              </div>
            </div>

            {/* Explanation Content */}
            {showExplanation ? (
              <div className="space-y-4">
                
                {/* Result Status */}
                <div className={`p-4 rounded-xl border-2 ${
                  selectedAnswer === question.correctAnswer 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                    : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {selectedAnswer === question.correctAnswer ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600" />
                    )}
                    <div>
                      <p className={`font-bold ${
                        selectedAnswer === question.correctAnswer 
                          ? 'text-green-800' 
                          : 'text-red-800'
                      }`}>
                        {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                      </p>
                      <p className={`text-xs ${
                        selectedAnswer === question.correctAnswer 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        Correct Answer: {String.fromCharCode(65 + question.correctAnswer)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Detailed Explanation */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4 text-slate-600" />
                    <h4 className="font-bold text-slate-800">Solution Steps:</h4>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    {question.explanation}
                  </div>
                </div>
                
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-600 font-medium">Submit your answer</p>
                  <p className="text-slate-500 text-sm">
                    Select an option and submit to see the detailed explanation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Premium CTA */}
        {showExplanation && (
          <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Want to know how you compare?</h3>
            <p className="text-blue-100 mb-3 text-sm">
              See your full analytics and performance insights!
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 font-semibold rounded-lg transition-all duration-300"
            >
              See Your Full Analytics
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuestionDetail;