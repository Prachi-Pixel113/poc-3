import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  Clock, 
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Filter
} from 'lucide-react';
import { getQuestionsByTopic } from '../data/questions';

const QuestionsList = ({ topicId, onNavigate, onBack }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const questions = getQuestionsByTopic(topicId);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  const topicNames = {
    'percentages': 'Percentages',
    'number-systems': 'Number Systems', 
    'time-work': 'Time & Work'
  };

  const topicName = topicNames[topicId] || 'Questions';
  
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const filteredQuestions = selectedDifficulty === 'All' 
    ? questions 
    : questions.filter(q => q.difficulty === selectedDifficulty);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const completionRate = questions.length > 0 ? (completedQuestions.size / questions.length) * 100 : 0;

  const stats = [
    { label: 'Total Questions', value: questions.length.toString(), icon: Target },
    { label: 'Completed', value: completedQuestions.size.toString(), icon: CheckCircle },
    { label: 'Progress', value: `${Math.round(completionRate)}%`, icon: TrendingUp },
    { label: 'Avg. Time', value: '3-4 min', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
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
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {topicName} Questions
                </h1>
                <p className="text-slate-600">
                  Practice questions with detailed explanations and instant feedback
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1">
                <BookOpen className="h-3 w-3 mr-1" />
                {filteredQuestions.length} Questions
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Bar */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Your Progress</h3>
              <span className="text-lg font-bold text-slate-600">{Math.round(completionRate)}% Complete</span>
            </div>
            <Progress value={completionRate} className="h-3 mb-2" />
            <p className="text-sm text-slate-500">{completedQuestions.size} of {questions.length} questions completed</p>
          </CardContent>
        </Card>

        {/* Filter Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Filter by difficulty:</span>
              </div>
              <div className="flex gap-2">
                {difficulties.map((diff) => (
                  <Button
                    key={diff}
                    variant={selectedDifficulty === diff ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`text-xs ${selectedDifficulty === diff ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}`}
                  >
                    {diff}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredQuestions.map((question, index) => (
            <Card 
              key={question.id}
              className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              onClick={() => onNavigate('question-detail', topicId, question.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`text-xs border ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </Badge>
                  {completedQuestions.has(question.id) && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Question {index + 1}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed line-clamp-3">
                    {question.question}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {question.topic}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      ~3 min
                    </span>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl"
                  >
                    <span className="mr-2">Solve Question</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">No questions found</h3>
              <p className="text-slate-600 mb-6">
                No questions match the selected difficulty level. Try selecting a different filter.
              </p>
              <Button onClick={() => setSelectedDifficulty('All')}>
                Show All Questions
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Premium CTA */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Want to track your performance?</h3>
            <p className="text-blue-100 mb-6">
              Get detailed analytics on your solving patterns and improvement areas
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              See Your Analytics
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default QuestionsList;