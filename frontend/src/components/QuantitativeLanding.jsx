import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  Calculator, 
  Hash, 
  Percent,
  Clock,
  DollarSign,
  BarChart3,
  ArrowRight,
  Target,
  BookOpen,
  Users
} from 'lucide-react';

const QuantitativeLanding = ({ onNavigate, onBack }) => {
  const quantitativeTopics = [
    {
      id: 'number-systems',
      title: 'Number Systems',
      description: 'Understand different number systems, properties, and mathematical operations',
      icon: Hash,
      color: 'from-blue-500 to-blue-600',
      questions: 45,
      difficulty: 'Easy to Medium',
      avgTime: '2-3 mins',
      concepts: ['Natural Numbers', 'Integers', 'Rational Numbers', 'Prime Numbers', 'HCF & LCM'],
      popularity: 85,
      completed: 0
    },
    {
      id: 'percentages',
      title: 'Percentages',
      description: 'Master percentage calculations, applications, and real-world problem solving',
      icon: Percent,
      color: 'from-indigo-500 to-indigo-600',
      questions: 50,
      difficulty: 'Easy to Hard',
      avgTime: '3-4 mins',
      concepts: ['Basic Calculations', 'Increase/Decrease', 'Successive Changes', 'Applications'],
      popularity: 92,
      completed: 0
    },
    {
      id: 'time-work',
      title: 'Time & Work',
      description: 'Solve efficiency problems, work rates, and collaborative task scenarios',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      questions: 40,
      difficulty: 'Medium to Hard',
      avgTime: '4-5 mins',
      concepts: ['Work Rate', 'Combined Work', 'Pipes & Cisterns', 'Efficiency'],
      popularity: 78,
      completed: 0
    }
  ];

  const topicStats = [
    { label: 'Total Questions', value: '135', icon: Target },
    { label: 'Difficulty Levels', value: '3', icon: BarChart3 },
    { label: 'Study Time', value: '~5 hrs', icon: Clock },
    { label: 'Success Rate', value: '84%', icon: Users }
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
                Back to Aptitude
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Quantitative Aptitude
                </h1>
                <p className="text-slate-600">
                  Master numerical reasoning and mathematical problem-solving
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1">
                <Calculator className="h-3 w-3 mr-1" />
                Mathematical Reasoning
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {topicStats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Topics */}
        <div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Select Your Topic
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Start with any topic and build your quantitative reasoning skills step by step
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quantitativeTopics.map((topic) => {
              const Icon = topic.icon;
              
              return (
                <Card 
                  key={topic.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 cursor-pointer group overflow-hidden relative"
                  onClick={() => onNavigate('questions-list', topic.id)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-6 relative">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                      {topic.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    {/* Difficulty & Time */}
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        {topic.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        {topic.avgTime} per Q
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-6">
                      
                      {/* Key Concepts */}
                      <div className="bg-slate-50 rounded-2xl p-5">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Key Concepts:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {topic.concepts.map((concept, index) => (
                            <Badge key={index} variant="secondary" className="bg-white text-slate-600 text-xs">
                              {concept}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Progress & Stats */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-700">Popularity</span>
                            <span className="text-sm text-slate-500">{topic.popularity}%</span>
                          </div>
                          <Progress value={topic.popularity} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-slate-800">{topic.questions}</p>
                            <p className="text-xs text-slate-600">Questions</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-slate-800">{topic.completed}</p>
                            <p className="text-xs text-slate-600">Completed</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${topic.color} text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 rounded-xl font-semibold`}
                      >
                        <span className="mr-2">Start {topic.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Progress Tracking CTA */}
        <Card className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Want detailed progress tracking?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              See your performance analytics across all quantitative topics with personalized insights
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              Unlock Performance Analytics
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default QuantitativeLanding;