import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  Brain, 
  Code, 
  Users, 
  BookOpen,
  Calculator,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';

const Home = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const mainCategories = [
    {
      id: 'aptitude',
      title: 'Aptitude',
      description: 'Master quantitative reasoning, logical thinking, and verbal skills',
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      topics: 15,
      questions: 500,
      difficulty: ['Easy', 'Medium', 'Hard']
    },
    {
      id: 'technical',
      title: 'Technical',
      description: 'Programming languages, algorithms, and system design concepts',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      topics: 20,
      questions: 800,
      difficulty: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      id: 'interview-prep',
      title: 'Interview Prep',
      description: 'Behavioral questions, HR rounds, and communication skills',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      topics: 12,
      questions: 300,
      difficulty: ['Basic', 'Professional', 'Leadership']
    }
  ];

  const featuredStats = [
    { label: 'Active Learners', value: '50K+', icon: Target },
    { label: 'Questions Available', value: '1600+', icon: BookOpen },
    { label: 'Success Rate', value: '89%', icon: TrendingUp },
    { label: 'Avg. Study Time', value: '2.5h', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Fixed Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduMaster Pro
                </h1>
                <p className="text-xs text-slate-500">Learn. Practice. Excel.</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search topics, questions, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('aptitude-landing')}
                className="text-slate-600 hover:text-blue-600"
              >
                Aptitude
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-indigo-600"
              >
                Technical
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-purple-600"
              >
                Interview Prep
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 bg-clip-text text-transparent mb-4">
                Master Your Skills
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                Comprehensive practice platform for aptitude tests, technical interviews, and career preparation. 
                Learn from curated questions with detailed explanations and AI-powered insights.
              </p>
              
              {/* AI Mock Interview CTA */}
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => onNavigate('ai-interview')}
                  className="px-6 py-3 font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Bot className="h-4 w-4 mr-2" />
                  Start AI Mock Interview
                </Button>
                <Button
                  onClick={() => onNavigate('aptitude-landing')}
                  variant="outline"
                  className="px-6 py-3 font-semibold border-2 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Topics
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {featuredStats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose EduMaster Pro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Why Choose EduMaster Pro?
          </h2>
          <p className="text-center text-slate-600 mb-8">
            The most comprehensive and intelligent learning platform for career success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">AI-Powered Learning</h3>
                <p className="text-sm text-slate-600">Personalized recommendations and intelligent feedback systems</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Detailed Analytics</h3>
                <p className="text-sm text-slate-600">Track progress with comprehensive performance insights</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Explanations</h3>
                <p className="text-sm text-slate-600">Detailed step-by-step solutions for every question</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Community Driven</h3>
                <p className="text-sm text-slate-600">Learn with 50K+ active users and discussion forums</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Choose Your Learning Path
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Dive deep into structured learning with comprehensive topic coverage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <Card 
                  key={category.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 cursor-pointer group overflow-hidden relative"
                  onClick={() => category.id === 'aptitude' ? onNavigate('aptitude-landing') : null}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-6 relative">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <CardTitle className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                      {category.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-6">
                      
                      {/* Stats */}
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">{category.topics}</p>
                            <p className="text-sm text-slate-600">Topics</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">{category.questions}+</p>
                            <p className="text-sm text-slate-600">Questions</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 justify-center">
                          {category.difficulty.map((level, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="bg-white text-slate-600 text-xs"
                            >
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.color} text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 rounded-xl font-semibold text-lg`}
                      >
                        <span className="mr-2">Explore {category.title}</span>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium Teaser */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
          <CardContent className="p-12 text-center relative">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready for Advanced Analytics?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Unlock detailed performance insights, personalized learning paths, and advanced AI feedback
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              See Premium Features
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;