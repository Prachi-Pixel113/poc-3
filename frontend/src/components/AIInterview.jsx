import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Bot, 
  User,
  Send,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Mic,
  MicOff
} from 'lucide-react';

const AIInterview = ({ onBack, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, interview, feedback, complete
  const [userResponse, setUserResponse] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const interviewQuestion = "Tell me about a time when you had to work under pressure to meet a tight deadline. How did you handle the situation and what was the outcome?";
  
  const aiFeedback = {
    strengths: ["Clear structure in your response", "Specific example provided", "Good outcome mentioned"],
    improvements: ["Could elaborate more on the challenges faced", "Add more details about your thought process", "Mention what you learned from the experience"],
    score: 7,
    overallFeedback: "Good response! You provided a clear example and mentioned the outcome. To strengthen your answer, consider using the STAR method (Situation, Task, Action, Result) and adding more specific details about the challenges you overcame."
  };

  const startInterview = () => {
    setCurrentStep('interview');
    setConversation([
      {
        type: 'ai',
        message: "Hello! I'm your AI interview coach. I'll ask you a behavioral question and provide detailed feedback on your response. Are you ready to begin?",
        timestamp: new Date().toLocaleTimeString()
      },
      {
        type: 'ai', 
        message: interviewQuestion,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  };

  const submitResponse = () => {
    if (!userResponse.trim()) return;
    
    const newConversation = [...conversation, {
      type: 'user',
      message: userResponse,
      timestamp: new Date().toLocaleTimeString()
    }];
    
    setConversation(newConversation);
    setUserResponse('');
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsTyping(false);
      setCurrentStep('feedback');
    }, 2000);
  };

  const restartInterview = () => {
    setCurrentStep('intro');
    setConversation([]);
    setUserResponse('');
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Mock Interview
                </h1>
                <p className="text-slate-600">
                  Practice behavioral questions with AI-powered feedback
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="bg-white rounded-lg">
                <CardContent className="p-12 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <Bot className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    AI Interview Coach
                  </h2>
                  
                  <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Experience a realistic interview scenario with our AI coach. Get instant feedback on your responses and improve your interview skills.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <MessageCircle className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-slate-800 mb-2">Behavioral Questions</h3>
                      <p className="text-sm text-slate-600">Practice common interview questions</p>
                    </div>
                    
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-slate-800 mb-2">AI Feedback</h3>
                      <p className="text-sm text-slate-600">Get detailed analysis of your responses</p>
                    </div>
                    
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-slate-800 mb-2">Improve Skills</h3>
                      <p className="text-sm text-slate-600">Learn and practice for real interviews</p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={startInterview}
                    className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <Bot className="h-5 w-5 mr-2" />
                    Start Interview Session
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  if (currentStep === 'interview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={onBack}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Exit Interview
                </Button>
                
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mock Interview in Progress
                  </h1>
                  <p className="text-slate-600 text-sm">Take your time to provide a thoughtful response</p>
                </div>
              </div>
              
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1">
                <Clock className="h-3 w-3 mr-1" />
                Active Session
              </Badge>
            </div>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl h-[600px] flex flex-col">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3">
                    <Bot className="h-6 w-6" />
                    Interview Session
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col p-0">
                  
                  {/* Messages */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {conversation.map((message, index) => (
                      <div key={index} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'ai' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                        }`}>
                          {message.type === 'ai' ? (
                            <Bot className="h-4 w-4 text-white" />
                          ) : (
                            <User className="h-4 w-4 text-white" />
                          )}
                        </div>
                        
                        <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block p-4 rounded-xl max-w-md ${
                            message.type === 'ai'
                              ? 'bg-slate-100 text-slate-800'
                              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          }`}>
                            <p className="leading-relaxed">{message.message}</p>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-slate-100 p-4 rounded-xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Input Area */}
                  <div className="p-6 border-t border-slate-200">
                    <div className="flex gap-3">
                      <Input
                        value={userResponse}
                        onChange={(e) => setUserResponse(e.target.value)}
                        placeholder="Type your response here..."
                        className="flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && submitResponse()}
                      />
                      <Button
                        onClick={submitResponse}
                        disabled={!userResponse.trim()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 rounded-xl hover:scale-105 transition-all duration-300"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Press Enter to send or use the send button</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    Interview Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-1">STAR Method</h4>
                      <p className="text-blue-700">Situation, Task, Action, Result</p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-1">Be Specific</h4>
                      <p className="text-green-700">Use concrete examples and numbers</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-1">Show Impact</h4>
                      <p className="text-purple-700">Highlight your contributions and results</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-1">Stay Positive</h4>
                      <p className="text-orange-700">Focus on learning and growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (currentStep === 'feedback') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Interview Feedback
                </h1>
                <p className="text-slate-600">
                  AI analysis of your interview response
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-6 py-8">
          
          {/* Overall Score */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{aiFeedback.score}/10</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Overall Performance Score</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {aiFeedback.overallFeedback}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Strengths */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6" />
                  What You Did Well
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {aiFeedback.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-green-800">{strength}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Improvements */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <ArrowRight className="h-6 w-6" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {aiFeedback.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-orange-800">{improvement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Button 
              onClick={restartInterview}
              className="h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Try Another Question
            </Button>
            
            <Button 
              onClick={() => onNavigate('home')}
              variant="outline"
              className="h-16 border-2 font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300"
            >
              Explore Topics
            </Button>
            
            <Button 
              onClick={() => onNavigate('premium-dashboard')}
              className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Full Analytics
            </Button>
          </div>
        </main>
      </div>
    );
  }
};

export default AIInterview;