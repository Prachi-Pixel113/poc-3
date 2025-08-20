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
  SkipForward,
  RotateCcw,
  Trophy,
  Target,
  Clock,
  Sparkles,
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
              <div className="bg-white rounded-lg">
                <CardContent className="p-12 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                      <Trophy className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    Practice Complete!
                  </h2>
                  
                  <p className="text-xl text-slate-600 mb-8">
                    Excellent work! You've completed all questions in this topic.
                  </p>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{accuracy.toFixed(1)}%</p>
                        <p className="text-sm text-slate-600">Final Accuracy</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{correctAnswers}</p>
                        <p className="text-sm text-slate-600">Correct Answers</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
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
                      className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 transition-all duration-300 shadow-lg"
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          {/* Top Navigation Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onBack}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                Dashboard
              </Button>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {topic?.title}
                </h1>
                <p className="text-slate-600 font-medium text-sm lg:text-base">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
            </div>
            
            {/* Stats Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-2 text-sm font-semibold rounded-xl shadow-lg">
                <Target className="h-4 w-4 mr-1" />
                {accuracy.toFixed(1)}% Accuracy
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2 text-sm font-semibold rounded-xl shadow-lg">
                <CheckCircle className="h-4 w-4 mr-1" />
                {correctAnswers} Correct
              </Badge>
            </div>
          </div>

          {/* Progress Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl border border-white/20">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-slate-700">Overall Progress</span>
                </div>
                <span className="text-lg font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <Progress value={progressPercentage} className="h-4" />
              <div className="flex justify-between mt-2 text-sm text-slate-500">
                <span>Question {currentQuestionIndex + 1}</span>
                <span>Total {questions.length}</span>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Question Panel - Takes 3 columns on large screens */}
          <div className="xl:col-span-3">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl border border-white/20">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{currentQuestionIndex + 1}</span>
                  </div>
                  <div>
                    <div className="text-xl">Question {currentQuestionIndex + 1}</div>
                    <div className="text-indigo-100 text-sm font-normal">Choose the best answer</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                
                {/* Question Text */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-xl text-slate-700 leading-relaxed font-medium">
                        {currentQuestion.question}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <Target className="h-5 w-5 text-indigo-500" />
                    Answer Options
                  </h3>
                  
                  <div className="grid gap-4">
                    {currentQuestion.options.map((option, index) => {
                      let bgColor = 'bg-white hover:bg-slate-50';
                      let borderColor = 'border-slate-200 hover:border-slate-300';
                      let textColor = 'text-slate-700';
                      let shadowClass = 'hover:shadow-lg';
                      let iconBg = 'bg-slate-600';

                      if (showExplanation) {
                        if (index === currentQuestion.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-emerald-50 to-teal-50';
                          borderColor = 'border-emerald-300';
                          textColor = 'text-emerald-800';
                          shadowClass = 'shadow-xl shadow-emerald-100';
                          iconBg = 'bg-emerald-600';
                        } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-red-50 to-pink-50';
                          borderColor = 'border-red-300';
                          textColor = 'text-red-800';
                          shadowClass = 'shadow-xl shadow-red-100';
                          iconBg = 'bg-red-600';
                        }
                      } else if (selectedAnswer === index) {
                        bgColor = 'bg-gradient-to-r from-blue-50 to-indigo-50';
                        borderColor = 'border-blue-400';
                        textColor = 'text-blue-800';
                        shadowClass = 'shadow-xl shadow-blue-100';
                        iconBg = 'bg-blue-600';
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          className={`w-full p-6 text-left border-2 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] ${bgColor} ${borderColor} ${textColor} ${shadowClass} relative group`}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span className="flex-1 text-lg font-medium leading-relaxed">{option}</span>
                            
                            {/* Result Icons */}
                            {showExplanation && index === currentQuestion.correctAnswer && (
                              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                            )}
                            {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                                <XCircle className="h-6 w-6 text-white" />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                  {!showExplanation ? (
                    <>
                      <Button 
                        onClick={handleSubmitAnswer} 
                        disabled={selectedAnswer === null}
                        className="flex-1 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Submit Answer
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSkipQuestion}
                        className="py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300 rounded-xl px-8"
                      >
                        <SkipForward className="h-5 w-5 mr-2" />
                        Skip Question
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={currentQuestionIndex >= questions.length - 1}
                      className="flex-1 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl"
                    >
                      {currentQuestionIndex >= questions.length - 1 ? 'Complete Practice' : 'Next Question'}
                      <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
                    </Button>
                  )}
                </div>
                
              </CardContent>
            </Card>
          </div>

          {/* Explanation Panel - Takes 1 column on large screens */}
          <div className="xl:col-span-1">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl sticky top-6 border border-white/20">
              <CardHeader className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div>Explanation</div>
                    <div className="text-orange-100 text-sm font-normal">Answer insights</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                {showExplanation ? (
                  <div className="space-y-6">
                    
                    {/* Result Status */}
                    <div className={`p-6 rounded-2xl border-2 ${
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200' 
                        : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        {selectedAnswer === currentQuestion.correctAnswer ? (
                          <CheckCircle className="h-8 w-8 text-emerald-600" />
                        ) : (
                          <XCircle className="h-8 w-8 text-red-600" />
                        )}
                        <div>
                          <p className={`text-xl font-bold ${
                            selectedAnswer === currentQuestion.correctAnswer 
                              ? 'text-emerald-800' 
                              : 'text-red-800'
                          }`}>
                            {selectedAnswer === currentQuestion.correctAnswer ? 'Excellent!' : 'Not Quite'}
                          </p>
                          <p className={`text-sm font-medium ${
                            selectedAnswer === currentQuestion.correctAnswer 
                              ? 'text-emerald-600' 
                              : 'text-red-600'
                          }`}>
                            Correct: Option {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Detailed Explanation */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-slate-600" />
                        <h4 className="font-bold text-slate-800 text-lg">Solution</h4>
                      </div>
                      <div className="text-slate-700 leading-relaxed text-base">
                        {currentQuestion.explanation}
                      </div>
                    </div>
                    
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-10 w-10 text-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-600 font-medium">Waiting for Answer</p>
                      <p className="text-slate-500 text-sm">
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