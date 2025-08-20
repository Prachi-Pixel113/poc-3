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
  RotateCcw
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Practice Complete!
              </h2>
              <p className="text-slate-600 mb-6">
                Final Accuracy: {accuracy.toFixed(1)}% ({correctAnswers}/{answeredQuestions.size} correct)
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={onBack} variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
                <Button onClick={resetPractice}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Practice Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{topic?.title}</h1>
              <p className="text-slate-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700">
              {accuracy.toFixed(1)}% Accuracy
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              {correctAnswers} Correct
            </Badge>
          </div>
        </div>

        {/* Progress Bar */}
        <Card className="mb-6 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">Progress</span>
              <span className="text-sm text-slate-500">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">
                  Question {currentQuestionIndex + 1}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  {currentQuestion.question}
                </p>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    let bgColor = 'bg-slate-50 hover:bg-slate-100';
                    let borderColor = 'border-slate-200';
                    let textColor = 'text-slate-700';

                    if (showExplanation) {
                      if (index === currentQuestion.correctAnswer) {
                        bgColor = 'bg-emerald-50';
                        borderColor = 'border-emerald-300';
                        textColor = 'text-emerald-800';
                      } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                        bgColor = 'bg-red-50';
                        borderColor = 'border-red-300';
                        textColor = 'text-red-800';
                      }
                    } else if (selectedAnswer === index) {
                      bgColor = 'bg-blue-50';
                      borderColor = 'border-blue-300';
                      textColor = 'text-blue-800';
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${bgColor} ${borderColor} ${textColor}`}
                        disabled={showExplanation}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {showExplanation && index === currentQuestion.correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          )}
                          {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-3 mt-6">
                  {!showExplanation ? (
                    <>
                      <Button 
                        onClick={handleSubmitAnswer} 
                        disabled={selectedAnswer === null}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Submit Answer
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSkipQuestion}
                      >
                        <SkipForward className="h-4 w-4 mr-2" />
                        Skip
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={currentQuestionIndex >= questions.length - 1}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Next Question
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Explanation Panel */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showExplanation ? (
                  <div className="space-y-4">
                    <div className={`p-3 rounded-lg ${
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? 'bg-emerald-50 border border-emerald-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}>
                      <p className={`font-medium ${
                        selectedAnswer === currentQuestion.correctAnswer 
                          ? 'text-emerald-800' 
                          : 'text-red-800'
                      }`}>
                        {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                      </p>
                      <p className={`text-sm ${
                        selectedAnswer === currentQuestion.correctAnswer 
                          ? 'text-emerald-600' 
                          : 'text-red-600'
                      }`}>
                        Correct answer: {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                      </p>
                    </div>
                    
                    <div className="text-slate-700 leading-relaxed">
                      {currentQuestion.explanation}
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-500 italic">
                    Answer the question to see the explanation
                  </p>
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