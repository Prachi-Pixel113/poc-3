import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  Trophy,
  Target,
  Clock,
  BookOpen,
  Award
} from 'lucide-react';
import { mockQuestions, mockTopics } from '../data/mock';

const TopicPractice = ({ topicId, onBack }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  const topic = mockTopics.find(t => t.id === topicId);
  const questions = mockQuestions[topicId] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleSubmitAll = () => {
    // Submit all remaining questions that have selected answers
    questions.forEach(question => {
      if (!submittedAnswers.has(question.id) && selectedAnswers[question.id] !== undefined) {
        handleSubmitAnswer(question.id);
      }
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
  const accuracy = submittedAnswers.size > 0 ? (correctAnswers / submittedAnswers.size * 100).toFixed(1) : 0;

  if (!topic || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">No questions available</h2>
            <p className="text-slate-600 mb-4">This topic doesn't have any practice questions yet.</p>
            <Button onClick={onBack} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {topic?.title}
                </h1>
                <p className="text-sm text-slate-600">Practice all questions • {questions.length} questions total</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-sm font-semibold">{formatTime(timeSpent)}</span>
              </div>
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                {getAnsweredCount()}/{questions.length} Answered
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                {correctAnswers}/{submittedAnswers.size} Correct
              </Badge>
              {submittedAnswers.size > 0 && (
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
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
                <p className="text-2xl font-bold text-slate-800">{correctAnswers}</p>
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
              {topic?.title} Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              <div className="space-y-1">
                {questions.map((question, index) => {
                  const isSubmitted = submittedAnswers.has(question.id);
                  const selectedIndex = selectedAnswers[question.id];
                  const isCorrect = isSubmitted && selectedIndex === question.correctAnswer;
                  const isWrong = isSubmitted && selectedIndex !== question.correctAnswer;

                  return (
                    <div key={question.id} className="p-6 border-b border-slate-100 last:border-b-0">
                      {/* Question Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">Question {index + 1}</h3>
                            <p className="text-sm text-slate-600">{question.category}</p>
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
                        {question.options.map((option, optionIndex) => {
                          let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ";
                          
                          if (isSubmitted) {
                            if (optionIndex === question.correctAnswer) {
                              buttonClass += "border-green-500 bg-green-50 text-green-800";
                            } else if (optionIndex === selectedIndex && optionIndex !== question.correctAnswer) {
                              buttonClass += "border-red-500 bg-red-50 text-red-800";
                            } else {
                              buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                            }
                          } else if (selectedIndex === optionIndex) {
                            buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
                          } else {
                            buttonClass += "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-slate-700";
                          }

                          return (
                            <button
                              key={optionIndex}
                              onClick={() => handleAnswerSelect(question.id, optionIndex)}
                              disabled={isSubmitted}
                              className={buttonClass}
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold">
                                  {String.fromCharCode(65 + optionIndex)}
                                </span>
                                <span className="flex-1">{option}</span>
                                {isSubmitted && optionIndex === question.correctAnswer && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                                {isSubmitted && optionIndex === selectedIndex && selectedIndex !== question.correctAnswer && (
                                  <XCircle className="h-4 w-4 text-red-600" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        {!isSubmitted && selectedIndex !== undefined ? (
                          <Button
                            onClick={() => handleSubmitAnswer(question.id)}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg"
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
                            <p className="text-sm text-slate-700">
                              {question.explanation}
                            </p>
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

export default TopicPractice;