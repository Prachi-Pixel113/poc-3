import React, { useState } from 'react';
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
  Users,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const QuantitativeLanding = ({ onNavigate, onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Organized subtopics by categories for better structure
  const quantitativeCategories = [
    {
      id: 'fundamentals',
      title: 'Mathematical Fundamentals',
      description: 'Core mathematical concepts and number theory',
      color: 'from-emerald-500 to-teal-500',
      topics: [
        {
          id: 'number-systems',
          title: 'Number Systems',
          description: 'Natural numbers, integers, rational & irrational numbers, properties and operations',
          subtopics: ['Natural Numbers', 'Prime Numbers', 'HCF & LCM', 'Divisibility Rules', 'Number Properties'],
          questions: 45,
          difficulty: 'Easy to Medium',
          avgTime: '25 mins',
          successRate: '85%',
          premium: false
        },
        {
          id: 'squares-cubes',
          title: 'Squares & Cubes',
          description: 'Perfect squares, cubes, square roots, cube roots and their applications',
          subtopics: ['Perfect Squares', 'Square Roots', 'Perfect Cubes', 'Cube Roots', 'Applications'],
          questions: 30,
          difficulty: 'Easy',
          avgTime: '20 mins',
          successRate: '88%',
          premium: false
        }
      ]
    },
    {
      id: 'arithmetic',
      title: 'Arithmetic Applications',
      description: 'Practical mathematical applications in real-world scenarios',
      color: 'from-emerald-500 to-teal-500',
      topics: [
        {
          id: 'percentages',
          title: 'Percentages',
          description: 'Percentage calculations, increase/decrease, successive percentages',
          subtopics: ['Basic Percentages', 'Percentage Change', 'Successive Percentages', 'Percentage Applications', 'Mixed Problems'],
          questions: 60,
          difficulty: 'Easy to Hard',
          avgTime: '30 mins',
          successRate: '78%',
          premium: false
        },
        {
          id: 'profit-loss',
          title: 'Profit & Loss',
          description: 'Cost price, selling price, profit, loss, discount calculations',
          subtopics: ['Basic P&L', 'Discount & Markup', 'Successive Discounts', 'Partnership', 'False Weights'],
          questions: 35,
          difficulty: 'Medium',
          avgTime: '28 mins',
          successRate: '80%',
          premium: false
        },
        {
          id: 'simple-compound-interest',
          title: 'Simple & Compound Interest',
          description: 'Interest calculations, compound interest, installments',
          subtopics: ['Simple Interest', 'Compound Interest', 'Difference of SI & CI', 'Installments', 'Applications'],
          questions: 40,
          difficulty: 'Medium',
          avgTime: '32 mins',
          successRate: '75%',
          premium: true
        }
      ]
    },
    {
      id: 'ratios-proportions',
      title: 'Ratios & Proportions',
      description: 'Relationships between quantities and their applications',
      color: 'from-emerald-500 to-teal-500',
      topics: [
        {
          id: 'ratio-proportion',
          title: 'Ratio & Proportion',
          description: 'Basic ratios, proportions, direct & inverse variations',
          subtopics: ['Basic Ratios', 'Proportion', 'Direct Variation', 'Inverse Variation', 'Compound Ratios'],
          questions: 50,
          difficulty: 'Easy to Medium',
          avgTime: '22 mins',
          successRate: '87%',
          premium: false
        },
        {
          id: 'mixtures-alligations',
          title: 'Mixtures & Alligations',
          description: 'Mixture problems, alligation rule, replacement of mixtures',
          subtopics: ['Basic Mixtures', 'Alligation Rule', 'Replacement', 'Multiple Mixtures', 'Advanced Problems'],
          questions: 25,
          difficulty: 'Medium to Hard',
          avgTime: '35 mins',
          successRate: '65%',
          premium: true
        }
      ]
    },
    {
      id: 'work-time',
      title: 'Work & Time',
      description: 'Efficiency, work rates, and time-based problems',
      color: 'from-orange-500 to-red-500',
      topics: [
        {
          id: 'time-work',
          title: 'Time & Work',
          description: 'Work efficiency, group work, pipes & cisterns',
          subtopics: ['Work Efficiency', 'Group Work', 'Pipes & Cisterns', 'Work & Wages', 'Alternate Working'],
          questions: 40,
          difficulty: 'Medium to Hard',
          avgTime: '35 mins',
          successRate: '72%',
          premium: true
        },
        {
          id: 'time-distance',
          title: 'Time & Distance',
          description: 'Speed, distance, relative motion, trains, boats & streams',
          subtopics: ['Basic Speed-Distance', 'Relative Motion', 'Trains', 'Boats & Streams', 'Races'],
          questions: 45,
          difficulty: 'Medium',
          avgTime: '30 mins',
          successRate: '74%',
          premium: false
        }
      ]
    },
    {
      id: 'geometry',
      title: 'Geometry & Mensuration',
      description: 'Shapes, areas, volumes and geometric properties',
      color: 'from-teal-500 to-cyan-500',
      topics: [
        {
          id: 'geometry',
          title: 'Basic Geometry',
          description: 'Lines, angles, triangles, quadrilaterals, circles',
          subtopics: ['Lines & Angles', 'Triangles', 'Quadrilaterals', 'Circles', 'Coordinate Geometry'],
          questions: 30,
          difficulty: 'Medium to Hard',
          avgTime: '40 mins',
          successRate: '68%',
          premium: true
        },
        {
          id: 'mensuration',
          title: 'Mensuration',
          description: 'Area, perimeter, volume calculations for 2D and 3D shapes',
          subtopics: ['2D Figures', '3D Figures', 'Surface Area', 'Volume', 'Combined Figures'],
          questions: 35,
          difficulty: 'Medium',
          avgTime: '33 mins',
          successRate: '70%',
          premium: false
        }
      ]
    }
  ];

  // Calculate total stats from all categories
  const totalQuestions = quantitativeCategories.reduce((total, category) => 
    total + category.topics.reduce((catTotal, topic) => catTotal + topic.questions, 0), 0);
  
  const totalTopics = quantitativeCategories.reduce((total, category) => 
    total + category.topics.length, 0);

  const featuredStats = [
    { icon: Calculator, value: `${totalQuestions}+`, label: 'Practice Questions' },
    { icon: Users, value: '15K+', label: 'Students Enrolled' },
    { icon: Target, value: `${totalTopics}`, label: 'Topics Covered' },
    { icon: TrendingUp, value: '92%', label: 'Success Rate' }
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
                Back to Aptitude
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Quantitative Aptitude
                </h1>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1">
                  Mathematical Reasoning
                </Badge>
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
            Master Quantitative Reasoning
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Build strong mathematical foundations with our comprehensive collection of quantitative aptitude topics. 
            From basic number systems to advanced problem-solving techniques.
          </p>
        </div>

        {/* Categorized Topics Sections */}
        <div className="space-y-12 mb-16">
          {quantitativeCategories.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} mb-4 mx-auto shadow-lg`}>
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Topics Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.topics.map((topic) => (
                  <Card 
                    key={topic.id}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {/* Premium Badge */}
                    {topic.premium && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                          Premium
                        </Badge>
                      </div>
                    )}

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br ${category.color} to-transparent rounded-full`}></div>
                      <div className={`absolute -left-3 -bottom-3 w-16 h-16 bg-gradient-to-tr ${category.color} to-transparent rounded-full`}></div>
                    </div>

                    <CardHeader className="pb-3 relative">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                        <Calculator className="h-5 w-5 text-white" />
                      </div>
                      
                      <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                        {topic.title}
                      </CardTitle>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 relative space-y-3">
                      {/* Subtopics */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-700">Subtopics:</p>
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

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <p className="text-sm font-bold text-emerald-600">{topic.questions}</p>
                          <p className="text-xs text-slate-600">Questions</p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <p className="text-sm font-bold text-teal-600">{topic.successRate}</p>
                          <p className="text-xs text-slate-600">Success Rate</p>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="flex justify-between text-xs text-slate-600 bg-slate-50 rounded-lg p-2">
                        <span><Clock className="h-3 w-3 inline mr-1" />{topic.avgTime}</span>
                        <span><Target className="h-3 w-3 inline mr-1" />{topic.difficulty}</span>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.color} hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-md transition-all duration-300 py-2 rounded-lg font-semibold text-sm`}
                        disabled={topic.premium}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!topic.premium) {
                            // Navigate to arithmetic-aptitude questions for all quantitative topics
                            onNavigate('practice', 'arithmetic-aptitude');
                          }
                        }}
                      >
                        {topic.premium ? (
                          <>
                            <Award className="h-3 w-3 mr-2" />
                            Upgrade to Access
                          </>
                        ) : (
                          <>
                            <span className="mr-2">Start Practice</span>
                            <ArrowRight className="h-3 w-3" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Category Divider (except for last category) */}
              {categoryIndex < quantitativeCategories.length - 1 && (
                <div className="flex justify-center py-6">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Master Quantitative Aptitude?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
              Start with basic topics and progress to advanced problem-solving. Get detailed explanations, 
              step-by-step solutions, and track your improvement over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('topic-practice')}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Start Free Practice
              </Button>
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                <Award className="h-5 w-5 mr-2" />
                Unlock Premium Topics
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default QuantitativeLanding;