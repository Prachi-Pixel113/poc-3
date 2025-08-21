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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
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

      <main className="max-w-4xl mx-auto px-6 py-8">

        {/* Questions */}
        <div className="space-y-16">
          {questions.map((question, index) => {
            const isSubmitted = submittedAnswers.has(question.id);
            const selectedIndex = selectedAnswers[question.id];
            const isCorrect = correctAnswers.has(question.id);
            const isWrong = isSubmitted && !isCorrect;

            return (
              <div key={question.id} className="space-y-6">
                {/* Question Header */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-slate-600">{question.topic}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {question.difficulty}
                      </span>
                      {isSubmitted && (
                        <span className={`text-xs px-2 py-1 rounded ${
                          isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-slate-900 leading-relaxed">
                      {question.question}
                    </p>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="ml-14 space-y-3">
                  {question.options.map((option, optionIndex) => {
                    let className = 'w-full p-3 text-left border rounded-lg transition-colors ';
                    
                    if (isSubmitted) {
                      if (optionIndex === question.correctAnswer) {
                        className += 'border-green-500 bg-green-50 text-green-800';
                      } else if (optionIndex === selectedIndex && optionIndex !== question.correctAnswer) {
                        className += 'border-red-500 bg-red-50 text-red-800';
                      } else {
                        className += 'border-gray-200 bg-gray-50 text-gray-600';
                      }
                    } else if (selectedIndex === optionIndex) {
                      className += 'border-blue-500 bg-blue-50 text-blue-800';
                    } else {
                      className += 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-slate-700';
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(question.id, optionIndex)}
                        disabled={isSubmitted}
                        className={className}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span>{option}</span>
                          {isSubmitted && optionIndex === question.correctAnswer && (
                            <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                          )}
                          {isSubmitted && optionIndex === selectedIndex && selectedIndex !== question.correctAnswer && (
                            <XCircle className="h-4 w-4 text-red-600 ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Submit Button */}
                {!isSubmitted && (
                  <div className="ml-14">
                    <Button
                      onClick={() => handleSubmitAnswer(question.id)}
                      disabled={selectedIndex === undefined}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                    >
                      {selectedIndex === undefined ? 'Select an answer' : 'Submit Answer'}
                    </Button>
                  </div>
                )}

                {/* Explanation */}
                {isSubmitted && question.explanation && (
                  <div className="ml-14 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-slate-600" />
                      <span className="font-medium text-slate-800">Explanation</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Status */}
        {submittedAnswers.size === questions.length && (
          <div className="mt-16 p-6 bg-green-50 rounded-lg border border-green-200 text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">Practice Complete!</h3>
            <p className="text-green-700 mb-4">You've answered all {questions.length} questions</p>
            <div className="flex justify-center gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-slate-800">{getCorrectCount()}</p>
                <p className="text-green-700 text-sm">Correct</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-600">{submittedAnswers.size - getCorrectCount()}</p>
                <p className="text-green-700 text-sm">Incorrect</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{accuracy}%</p>
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