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
  Clock,
  BarChart3
} from 'lucide-react';

const Home = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const mainCategories = [
    {
      id: 'aptitude',
      title: 'Aptitude',
      description: 'Master quantitative reasoning, logical thinking, and verbal skills',
      icon: Brain,
      color: 'from-teal-500 to-cyan-600',
      topics: 15,
      questions: 500,
      difficulty: ['Easy', 'Medium', 'Hard']
    },
    {
      id: 'technical',
      title: 'Technical',
      description: 'Programming languages, algorithms, and system design concepts',
      icon: Code,
      color: 'from-cyan-500 to-teal-600',
      topics: 20,
      questions: 800,
      difficulty: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      id: 'interview-prep',
      title: 'Interview Prep',
      description: 'Behavioral questions, HR rounds, and communication skills',
      icon: Users,
      color: 'from-teal-500 to-emerald-600',
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
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
                className="text-slate-600 hover:text-teal-600"
              >
                Aptitude
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-cyan-600"
              >
                Technical
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-teal-600"
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
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-800 via-cyan-700 to-teal-800 bg-clip-text text-transparent mb-4">
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
                  className="px-6 py-3 font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
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

        {/* Stats Section - Clean without cards */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose EduMaster Pro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Why Choose EduMaster Pro?
          </h2>
          <p className="text-center text-slate-600 mb-8">
            The most comprehensive and intelligent learning platform for career success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">AI-Powered Learning</h3>
                <p className="text-sm text-slate-600">Personalized recommendations and intelligent feedback systems</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Detailed Analytics</h3>
                <p className="text-sm text-slate-600">Track progress with comprehensive performance insights</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Explanations</h3>
                <p className="text-sm text-slate-600">Detailed step-by-step solutions for every question</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Community Driven</h3>
                <p className="text-sm text-slate-600">Learn with 50K+ active users and discussion forums</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Choose Your Learning Path
          </h2>
          <p className="text-center text-slate-600 mb-6 text-sm">
            Dive deep into structured learning with comprehensive topic coverage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <Card 
                  key={category.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative"
                  onClick={() => category.id === 'aptitude' ? onNavigate('aptitude-landing') : null}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-4 relative">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-slate-800 mb-3">
                      {category.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-4">
                      
                      {/* Stats */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-800">{category.topics}</p>
                            <p className="text-xs text-slate-600">Topics</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-800">{category.questions}+</p>
                            <p className="text-xs text-slate-600">Questions</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 justify-center">
                          {category.difficulty.map((level, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="bg-white text-slate-600 text-xs px-2 py-1"
                            >
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.color} text-white border-0 shadow-md transition-all duration-300 py-3 rounded-lg font-semibold text-sm`}
                      >
                        <span className="mr-2">Explore {category.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium Teaser */}
        <Card className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-cyan-600/50"></div>
          <CardContent className="p-6 text-center relative">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ready for Advanced Analytics?</h3>
            <p className="text-sm text-teal-100 mb-4 max-w-xl mx-auto">
              Unlock detailed performance insights, personalized learning paths, and advanced AI feedback
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-teal-600 hover:bg-teal-50 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300"
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