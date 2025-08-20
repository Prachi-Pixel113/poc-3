import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Play,
  Pause,
  RotateCcw,
  Clock,
  Brain,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Award
} from 'lucide-react';

const AIInterview = ({ onNavigate, onBack }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const questions = [
    {
      id: 1,
      category: 'Behavioral',
      question: "Tell me about a time when you had to work under pressure. How did you handle it?",
      tips: "Use the STAR method: Situation, Task, Action, Result",
      timeLimit: 120
    },
    {
      id: 2,
      category: 'Technical',
      question: "How would you approach debugging a complex software issue that's affecting production?",
      tips: "Mention systematic approaches, logging, and collaboration",
      timeLimit: 180
    },
    {
      id: 3,
      category: 'Problem Solving',
      question: "Describe a challenging project you worked on. What obstacles did you face and how did you overcome them?",
      tips: "Focus on your problem-solving process and learnings",
      timeLimit: 150
    }
  ];

  const currentQuestionData = questions[currentQuestion];

  useEffect(() => {
    let interval;
    if (interviewStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Auto move to next question
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [timeLeft, interviewStarted]);

  const handleStartInterview = () => {
    setInterviewStarted(true);
    setTimeLeft(currentQuestionData.timeLimit);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(questions[currentQuestion + 1].timeLimit);
      setIsRecording(false);
    } else {
      // Interview completed
      onNavigate('score-summary');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!interviewStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4">
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
                    AI Mock Interview
                  </h1>
                  <p className="text-sm text-slate-600">Practice with AI-powered interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Setup Card */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
            <Card className="bg-white m-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready for Your AI Interview?</h2>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                    Test your interview skills with our AI-powered system. Get real-time feedback, 
                    performance analysis, and personalized improvement suggestions.
                  </p>
                </div>

                {/* Interview Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Duration</h3>
                    <p className="text-sm text-slate-600">8-12 minutes total</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <Brain className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Questions</h3>
                    <p className="text-sm text-slate-600">{questions.length} AI-curated questions</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <Sparkles className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Feedback</h3>
                    <p className="text-sm text-slate-600">Real-time AI analysis</p>
                  </div>
                </div>

                {/* Camera/Mic Setup */}
                <div className="bg-slate-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Setup Check</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      variant={videoEnabled ? "default" : "outline"}
                      className={videoEnabled 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" 
                        : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                      }
                    >
                      {videoEnabled ? <Video className="h-4 w-4 mr-2" /> : <VideoOff className="h-4 w-4 mr-2" />}
                      Camera {videoEnabled ? 'On' : 'Off'}
                    </Button>
                    <Button
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      variant={audioEnabled ? "default" : "outline"}
                      className={audioEnabled 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" 
                        : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                      }
                    >
                      {audioEnabled ? <Mic className="h-4 w-4 mr-2" /> : <MicOff className="h-4 w-4 mr-2" />}
                      Microphone {audioEnabled ? 'On' : 'Off'}
                    </Button>
                  </div>
                </div>

                {/* Start Button */}
                <div className="text-center">
                  <Button
                    onClick={handleStartInterview}
                    size="lg"
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-lg"
                  >
                    <Play className="h-6 w-6 mr-2" />
                    Start Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header with Progress */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setInterviewStarted(false)}
                className="hover:bg-emerald-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit Interview
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AI Interview in Progress
                </h1>
                <p className="text-sm text-slate-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                {currentQuestionData.category}
              </Badge>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-lg font-bold text-slate-700">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Current Question */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-slate-800">
                Question {currentQuestion + 1}
              </CardTitle>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                {formatTime(currentQuestionData.timeLimit)} total
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              {currentQuestionData.question}
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800">AI Tip</span>
              </div>
              <p className="text-sm text-emerald-700">{currentQuestionData.tips}</p>
            </div>
          </CardContent>
        </Card>

        {/* Recording Controls */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-6">
              <Button
                onClick={() => setIsRecording(!isRecording)}
                size="lg"
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
                }`}
              >
                {isRecording ? (
                  <>
                    <Pause className="h-5 w-5 mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Start Recording
                  </>
                )}
              </Button>
              
              <Button
                onClick={handleNextQuestion}
                variant="outline"
                size="lg"
                className="px-6 py-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-xl font-semibold"
              >
                Next Question
              </Button>
            </div>
            
            {isRecording && (
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-600 font-medium">Recording in progress...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${audioEnabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="font-medium text-slate-700">
                  Audio: {audioEnabled ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${videoEnabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="font-medium text-slate-700">
                  Video: {videoEnabled ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AIInterview;