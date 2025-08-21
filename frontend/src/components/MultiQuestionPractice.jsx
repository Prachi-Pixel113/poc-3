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
  Clock,
  Target,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';
import { getQuestionsByTopic } from '../data/questions';

const MultiQuestionPractice = ({ topicId, onNavigate, onBack }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(new Set());

  const questions = getQuestionsByTopic(topicId);
  
  const topicNames = {
    'percentages': 'Percentages',
    'number-systems': 'Number Systems', 
    'time-work': 'Time & Work'
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (submittedAnswers.has(questionId)) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmitAnswer = (questionId) => {
    const selectedIndex = selectedAnswers[questionId];
    if (selectedIndex === undefined || submittedAnswers.has(questionId)) return;
    
    setSubmittedAnswers(prev => new Set([...prev, questionId]));
    
    const question = questions.find(q => q.id === questionId);
    if (selectedIndex === question.correctAnswer) {
      setCorrectAnswers(prev => new Set([...prev, questionId]));
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getAnsweredCount = () => submittedAnswers.size;
  const getCorrectCount = () => correctAnswers.size;
  const accuracy = submittedAnswers.size > 0 ? (correctAnswers.size / submittedAnswers.size * 100).toFixed(1) : 0;
  const progressPercentage = (submittedAnswers.size / questions.length) * 100;

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex items-center justify-center">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">No questions available</h2>
            <p className="text-slate-600 mb-4">This topic doesn't have any practice questions yet.</p>
            <Button onClick={onBack} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Topics
              </Button>
              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  {topicNames[topicId]} Practice
                </h1>
                <p className="text-slate-600 text-sm">
                  {questions.length} Questions • Answer each individually
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 text-xs">
                {getAnsweredCount()}/{questions.length} Answered
              </Badge>
              {submittedAnswers.size > 0 && (
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 text-xs">
                  {accuracy}% Accuracy
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-6">
        
        {/* Progress Summary */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{questions.length}</p>
                <p className="text-sm text-slate-600">Total Questions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{getAnsweredCount()}</p>
                <p className="text-sm text-slate-600">Answered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{getCorrectCount()}</p>
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
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                <span className="text-sm text-slate-500">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Scrollable Questions */}
        <div className="space-y-8">
          {questions.map((question, index) => {
            const isSubmitted = submittedAnswers.has(question.id);
            const selectedIndex = selectedAnswers[question.id];
            const isCorrect = correctAnswers.has(question.id);
            const isWrong = isSubmitted && !isCorrect;

            return (
              <Card key={question.id} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${
                        isCorrect ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        isWrong ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                        'bg-gradient-to-r from-teal-500 to-cyan-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-800">
                          Question {index + 1}
                        </CardTitle>
                        <p className="text-sm text-slate-600">{question.topic}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs border ${getDifficultyColor(question.difficulty)}`}>
                        {question.difficulty}
                      </Badge>
                      {isSubmitted && isCorrect && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                      {isSubmitted && isWrong && (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Question Text */}
                  <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-xl p-6 border border-slate-200">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {question.question}
                    </p>
                  </div>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => {
                      let bgColor = 'bg-white hover:bg-slate-50';
                      let borderColor = 'border-slate-200 hover:border-slate-300';
                      let textColor = 'text-slate-700';

                      if (isSubmitted) {
                        if (optionIndex === question.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-green-50 to-emerald-50';
                          borderColor = 'border-green-300';
                          textColor = 'text-green-800';
                        } else if (optionIndex === selectedIndex && optionIndex !== question.correctAnswer) {
                          bgColor = 'bg-gradient-to-r from-red-50 to-pink-50';
                          borderColor = 'border-red-300';
                          textColor = 'text-red-800';
                        }
                      } else if (selectedIndex === optionIndex) {
                        bgColor = 'bg-gradient-to-r from-teal-50 to-cyan-50';
                        borderColor = 'border-teal-400';
                        textColor = 'text-teal-800';
                      }

                      return (
                        <button
                          key={optionIndex}
                          onClick={() => handleAnswerSelect(question.id, optionIndex)}
                          disabled={isSubmitted}
                          className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 ${bgColor} ${borderColor} ${textColor}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                              isSubmitted && optionIndex === question.correctAnswer ? 'bg-green-600' :
                              isSubmitted && optionIndex === selectedIndex && optionIndex !== question.correctAnswer ? 'bg-red-600' :
                              selectedIndex === optionIndex ? 'bg-teal-600' : 'bg-slate-600'
                            }`}>
                              {String.fromCharCode(65 + optionIndex)}
                            </div>
                            <span className="flex-1 font-medium">{option}</span>
                            
                            {/* Result Icons */}
                            {isSubmitted && optionIndex === question.correctAnswer && (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            )}
                            {isSubmitted && optionIndex === selectedIndex && selectedIndex !== question.correctAnswer && (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    {!isSubmitted && selectedIndex !== undefined ? (
                      <Button
                        onClick={() => handleSubmitAnswer(question.id)}
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Answer
                      </Button>
                    ) : !isSubmitted ? (
                      <Button
                        disabled
                        variant="outline"
                        className="px-6 py-2 rounded-xl opacity-50"
                      >
                        Select an answer to submit
                      </Button>
                    ) : (
                      <Badge className={`px-4 py-2 text-sm ${
                        isCorrect 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      }`}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </Badge>
                    )}
                  </div>

                  {/* Explanation (show only after submission) */}
                  {isSubmitted && question.explanation && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="h-5 w-5 text-amber-600" />
                        <h4 className="font-bold text-slate-800">Explanation</h4>
                      </div>
                      <div className="text-slate-700 leading-relaxed">
                        {question.explanation}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Completion Status */}
        {submittedAnswers.size === questions.length && (
          <Card className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-lg mt-8">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Practice Complete!</h3>
                  <p className="text-teal-100">You've answered all {questions.length} questions</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center max-w-md mx-auto">
                <div>
                  <p className="text-3xl font-bold">{questions.length}</p>
                  <p className="text-teal-100 text-sm">Total</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-300">{getCorrectCount()}</p>
                  <p className="text-teal-100 text-sm">Correct</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-300">{accuracy}%</p>
                  <p className="text-teal-100 text-sm">Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default MultiQuestionPractice;