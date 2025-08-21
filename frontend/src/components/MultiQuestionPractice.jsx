import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Topics
              </Button>
              
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {topicNames[topicId]} Practice
                </h1>
                <p className="text-slate-600 text-sm">
                  Practice questions with instant feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-6">

        {/* Scrollable Questions */}
        <div className="space-y-12">
          {questions.map((question, index) => {
            const isSubmitted = submittedAnswers.has(question.id);
            const selectedIndex = selectedAnswers[question.id];
            const isCorrect = correctAnswers.has(question.id);
            const isWrong = isSubmitted && !isCorrect;

            return (
              <div key={question.id} className="space-y-4 pb-8 border-b border-slate-200 last:border-b-0">
                {/* Question Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      isCorrect ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      isWrong ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                      'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        Question {index + 1}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">{question.topic}</span>
                        <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isSubmitted && isCorrect && (
                      <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">Correct</span>
                      </div>
                    )}
                    {isSubmitted && isWrong && (
                      <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        <XCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">Incorrect</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Question Text */}
                <div className="ml-16 mb-6">
                  <p className="text-lg text-slate-800 leading-relaxed">
                    {question.question}
                  </p>
                </div>

                {/* Answer Options */}
                <div className="ml-16 space-y-3 mb-6">
                  {question.options.map((option, optionIndex) => {
                    let buttonClass = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
                    
                    if (isSubmitted) {
                      if (optionIndex === question.correctAnswer) {
                        buttonClass += 'border-green-400 bg-green-50 text-green-800';
                      } else if (optionIndex === selectedIndex && optionIndex !== question.correctAnswer) {
                        buttonClass += 'border-red-400 bg-red-50 text-red-800';
                      } else {
                        buttonClass += 'border-gray-200 bg-gray-50 text-gray-600';
                      }
                    } else if (selectedIndex === optionIndex) {
                      buttonClass += 'border-blue-400 bg-blue-50 text-blue-800';
                    } else {
                      buttonClass += 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-slate-700';
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(question.id, optionIndex)}
                        disabled={isSubmitted}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                            isSubmitted && optionIndex === question.correctAnswer ? 'bg-green-600' :
                            isSubmitted && optionIndex === selectedIndex && optionIndex !== question.correctAnswer ? 'bg-red-600' :
                            selectedIndex === optionIndex ? 'bg-blue-600' : 'bg-gray-400'
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
                <div className="ml-16 mb-6">
                  {!isSubmitted && selectedIndex !== undefined ? (
                    <Button
                      onClick={() => handleSubmitAnswer(question.id)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 rounded-lg font-medium"
                    >
                      Submit Answer
                    </Button>
                  ) : !isSubmitted ? (
                    <Button
                      disabled
                      variant="outline"
                      className="px-6 py-2 rounded-lg opacity-50 cursor-not-allowed"
                    >
                      Select an answer to submit
                    </Button>
                  ) : null}
                </div>

                {/* Explanation (show only after submission) */}
                {isSubmitted && question.explanation && (
                  <div className="ml-16 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-slate-800">Explanation</h4>
                    </div>
                    <div className="text-slate-700 leading-relaxed">
                      {question.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Status */}
        {submittedAnswers.size === questions.length && (
          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800">Practice Complete!</h3>
                <p className="text-green-700">You've answered all {questions.length} questions</p>
              </div>
            </div>
            <div className="flex justify-center gap-8 text-center max-w-md mx-auto">
              <div>
                <p className="text-3xl font-bold text-slate-800">{questions.length}</p>
                <p className="text-green-700 text-sm">Total</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">{getCorrectCount()}</p>
                <p className="text-green-700 text-sm">Correct</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">{accuracy}%</p>
                <p className="text-green-700 text-sm">Accuracy</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MultiQuestionPractice;