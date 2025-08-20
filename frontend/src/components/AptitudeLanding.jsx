import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Calculator, 
  Brain, 
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const AptitudeLanding = ({ onNavigate, onBack }) => {
  const aptitudeTopics = [
    {
      id: 'quantitative',
      title: 'Quantitative Aptitude',
      description: 'Master numerical reasoning, mathematical concepts, and problem-solving techniques',
      icon: Calculator,
      color: 'from-emerald-500 to-teal-600',
      subtopics: ['Number Systems', 'Percentages', 'Time & Work', 'Profit & Loss', 'Ratio & Proportion'],
      questions: 250,
      difficulty: 'Easy to Hard',
      avgTime: '45 mins',
      successRate: '78%'
    },
    {
      id: 'logical',
      title: 'Logical Reasoning',
      description: 'Develop analytical thinking, pattern recognition, and logical deduction skills',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      subtopics: ['Series', 'Coding-Decoding', 'Blood Relations', 'Direction Sense', 'Puzzles'],
      questions: 200,
      difficulty: 'Medium to Hard',
      avgTime: '35 mins',
      successRate: '71%'
    },
    {
      id: 'verbal',
      title: 'Verbal Reasoning',
      description: 'Enhance language skills, comprehension, and communication abilities',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      subtopics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Analogies', 'Sentence Correction'],
      questions: 180,
      difficulty: 'Easy to Medium',
      avgTime: '40 mins',
      successRate: '82%'
    }
  ];

  const featuredStats = [
    { icon: Calculator, value: '630+', label: 'Practice Questions' },
    { icon: Users, value: '25K+', label: 'Students Enrolled' },
    { icon: Target, value: '77%', label: 'Average Score' },
    { icon: TrendingUp, value: '90%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="hover:bg-emerald-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Aptitude Tests
                </h1>
                <p className="text-sm text-slate-600">Master quantitative, logical, and verbal reasoning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Choose Your Aptitude Domain
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Select from our comprehensive aptitude test categories designed to enhance your problem-solving abilities
          </p>
        </div>

        {/* Aptitude Topics Grid - Made Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aptitudeTopics.map((topic) => {
            const Icon = topic.icon;
            
            return (
              <Card 
                key={topic.id}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative"
                onClick={() => topic.id === 'quantitative' ? onNavigate('question-practice') : null}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                  <div className="absolute -left-2 -bottom-2 w-10 h-10 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                </div>

                <CardHeader className="pb-2 relative">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                    {topic.title}
                  </CardTitle>
                  
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {topic.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 relative space-y-3">
                  {/* Subtopics */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Key Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {topic.subtopics.slice(0, 3).map((subtopic, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5"
                        >
                          {subtopic}
                        </Badge>
                      ))}
                      {topic.subtopics.length > 3 && (
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5"
                        >
                          +{topic.subtopics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div>
                        <p className="text-sm font-bold text-slate-800">{topic.questions}</p>
                        <p className="text-xs text-slate-600">Questions</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-600">{topic.successRate}</p>
                        <p className="text-xs text-slate-600">Success Rate</p>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">Avg Time:</span> {topic.avgTime} • 
                        <span className="font-semibold"> Difficulty:</span> {topic.difficulty}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${topic.color} text-white border-0 shadow-sm transition-all duration-300 py-2 rounded-lg font-semibold text-xs`}
                  >
                    <span className="mr-2">Start Practice</span>
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Test Your Skills?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
              Take comprehensive aptitude tests with detailed explanations and instant feedback. 
              Track your progress and identify areas for improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('quantitative-landing')}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                Start Free Practice Test
              </Button>
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                View Premium Features
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AptitudeLanding;