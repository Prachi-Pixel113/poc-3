import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  SkipForward,
  RotateCcw,
  Trophy,
  Target,
  Clock,
  BookOpen
} from 'lucide-react';
import { mockQuestions, mockTopics } from '../data/mock';

const TopicPractice = ({ topicId, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const topic = mockTopics.find(t => t.id === topicId);
  const questions = mockQuestions[topicId] || [];
  const currentQuestion = questions[currentQuestionIndex];

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const accuracy = answeredQuestions.size > 0 ? (correctAnswers / answeredQuestions.size) * 100 : 0;

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleSkipQuestion = () => {
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
    handleNextQuestion();
  };

  const resetPractice = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnsweredQuestions(new Set());
    setCorrectAnswers(0);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="bg-white rounded-lg">
                <CardContent className="p-12 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <Trophy className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Practice Complete!
                  </h2>
                  
                  <p className="text-xl text-slate-600 mb-8">
                    Excellent work! You've completed all questions in this topic.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{accuracy.toFixed(1)}%</p>
                        <p className="text-sm text-slate-600">Final Accuracy</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{correctAnswers}</p>
                        <p className="text-sm text-slate-600">Correct Answers</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{answeredQuestions.size}</p>
                        <p className="text-sm text-slate-600">Total Attempted</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={onBack} 
                      variant="outline"
                      className="px-8 py-3 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Dashboard
                    </Button>
                    <Button 
                      onClick={resetPractice}
                      className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Practice Again
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        
        {/* Compact Header */}
        <header className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Button>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/20">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {topic?.title}
                </h1>
                <p className="text-slate-600 text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
            </div>
            
            {/* Stats Badges */}
            <div className="flex items-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 px-3 py-1 text-sm font-semibold rounded-lg shadow-lg">
                <Target className="h-3 w-3 mr-1" />
                {accuracy.toFixed(1)}% Accuracy
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-3 py-1 text-sm font-semibold rounded-lg shadow-lg">
                <CheckCircle className="h-3 w-3 mr-1" />
                {correctAnswers} Correct
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content Grid - Fills remaining height */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-4">
          
          {/* Question Panel - Takes 3 columns */}
          <div className="xl:col-span-3 flex flex-col">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl border border-white/20 flex-1 flex flex-col">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg py-3">
                <CardTitle className="text-lg font-bold flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{currentQuestionIndex + 1}</span>
                  </div>
                  <div>
                    <div className="text-base">Question {currentQuestionIndex + 1}</div>
                    <div className="text-blue-100 text-xs font-normal">Choose the best answer</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                
                {/* Question Text */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed font-medium">
                        {currentQuestion.question}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="flex-1 mb-4">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-teal-500" />
                    Answer Options
                  </h3>
                  
                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, index) => {
                      let bgColor = 'bg-white hover:bg-slate-50';
                      let borderColor = 'border-slate-200 hover:border-slate-300';
                      let textColor = 'text-slate-700';
                      let shadowClass = 'hover:shadow-lg';
                      let iconBg = 'bg-slate-600';

                      if (showExplanation) {
                        if (index === currentQuestion.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-blue-50 to-indigo-50';
                          borderColor = 'border-blue-300';
                          textColor = 'text-blue-800';
                          shadowClass = 'shadow-lg shadow-blue-100';
                          iconBg = 'bg-blue-600';
                        } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-red-50 to-pink-50';
                          borderColor = 'border-red-300';
                          textColor = 'text-red-800';
                          shadowClass = 'shadow-lg shadow-red-100';
                          iconBg = 'bg-red-600';
                        }
                      } else if (selectedAnswer === index) {
                        bgColor = 'bg-gradient-to-r from-blue-50 to-indigo-50';
                        borderColor = 'border-blue-400';
                        textColor = 'text-blue-800';
                        shadowClass = 'shadow-lg shadow-blue-100';
                        iconBg = 'bg-blue-600';
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          className={`w-full p-3 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-[1.01] ${bgColor} ${borderColor} ${textColor} ${shadowClass} relative group`}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span className="flex-1 text-sm font-medium leading-relaxed">{option}</span>
                            
                            {/* Result Icons */}
                            {showExplanation && index === currentQuestion.correctAnswer && (
                              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                            )}
                            {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                              <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
                                <XCircle className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3 border-t border-slate-200">
                  {!showExplanation ? (
                    <>
                      <Button 
                        onClick={handleSubmitAnswer} 
                        disabled={selectedAnswer === null}
                        className="flex-1 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg rounded-lg"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Submit Answer
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSkipQuestion}
                        className="py-2 text-sm font-semibold border-2 hover:scale-105 transition-all duration-300 rounded-lg px-4"
                      >
                        <SkipForward className="h-4 w-4 mr-1" />
                        Skip
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={currentQuestionIndex >= questions.length - 1}
                      className="flex-1 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg rounded-lg"
                    >
                      {currentQuestionIndex >= questions.length - 1 ? 'Complete Practice' : 'Next Question'}
                      <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                    </Button>
                  )}
                </div>
                
              </CardContent>
            </Card>
          </div>

          {/* Explanation Panel - Takes 1 column */}
          <div className="xl:col-span-1 flex flex-col">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl border border-white/20 flex-1 flex flex-col">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg py-3">
                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-base">Explanation</div>
                    <div className="text-indigo-100 text-xs font-normal">Answer insights</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                {showExplanation ? (
                  <div className="space-y-4 flex-1">
                    
                    {/* Result Status */}
                    <div className={`p-4 rounded-xl border-2 ${
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' 
                        : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {selectedAnswer === currentQuestion.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-teal-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <div>
                          <p className={`text-sm font-bold ${
                            selectedAnswer === currentQuestion.correctAnswer 
                              ? 'text-blue-800' 
                              : 'text-red-800'
                          }`}>
                            {selectedAnswer === currentQuestion.correctAnswer ? 'Excellent!' : 'Not Quite'}
                          </p>
                          <p className={`text-xs font-medium ${
                            selectedAnswer === currentQuestion.correctAnswer 
                              ? 'text-teal-600' 
                              : 'text-red-600'
                          }`}>
                            Correct: Option {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Detailed Explanation */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200 flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-4 w-4 text-slate-600" />
                        <h4 className="font-bold text-slate-800 text-sm">Solution</h4>
                      </div>
                      <div className="text-slate-700 leading-relaxed text-xs overflow-y-auto max-h-40">
                        {currentQuestion.explanation}
                      </div>
                    </div>
                    
                  </div>
                ) : (
                  <div className="text-center py-8 flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-slate-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-600 font-medium text-sm">Waiting for Answer</p>
                      <p className="text-slate-500 text-xs">
                        Select an option to see the detailed explanation
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPractice;