import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TopicPractice from './components/TopicPractice';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AptitudeLanding from './components/AptitudeLanding';
import QuantitativeLanding from './components/QuantitativeLanding';
import QuestionsList from './components/QuestionsList';
import QuestionDetail from './components/QuestionDetail';
import ScoreSummary from './components/ScoreSummary';
import PremiumDashboard from './components/PremiumDashboard';
import AIInterview from './components/AIInterview';
import { Toaster } from './components/ui/toaster';

function App() {
  const [currentView, setCurrentView] = useState('home'); // Start with home page
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentView('practice');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedTopic(null);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleSignup = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('home');
    setSelectedTopic(null);
  };

  const handleNavigate = (view, param1, param2) => {
    setCurrentView(view);
    
    if (view === 'dashboard') {
      setSelectedTopic(null);
    } else if (view === 'questions-list') {
      setSelectedTopic(param1);
    } else if (view === 'question-detail') {
      setSelectedTopic(param1);
      setSelectedQuestion(param2);
    } else if (view === 'score-summary') {
      setSelectedTopic(param1);
    }
  };

  const handleBack = () => {
    if (currentView === 'question-detail') {
      setCurrentView('questions-list');
      setSelectedQuestion(null);
    } else if (currentView === 'questions-list') {
      setCurrentView('quantitative-landing');
      setSelectedTopic(null);
    } else if (currentView === 'quantitative-landing') {
      setCurrentView('aptitude-landing');
    } else if (currentView === 'aptitude-landing') {
      setCurrentView('home');
    } else if (currentView === 'score-summary') {
      setCurrentView('questions-list');
    } else {
      setCurrentView('home');
    }
  };

  return (
    <div className="App">
      {/* Navbar - Only show when user is logged in */}
      {currentUser && (
        <Navbar 
          currentUser={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
          currentView={currentView}
        />
      )}

      {/* Main Content */}
      
      {/* Home page - No authentication required */}
      {currentView === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}

      {/* Aptitude section pages */}
      {currentView === 'aptitude-landing' && (
        <AptitudeLanding 
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {currentView === 'quantitative-landing' && (
        <QuantitativeLanding 
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {currentView === 'questions-list' && (
        <QuestionsList 
          topicId={selectedTopic}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {currentView === 'question-detail' && (
        <QuestionDetail 
          topicId={selectedTopic}
          questionId={selectedQuestion}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {currentView === 'score-summary' && (
        <ScoreSummary 
          topicId={selectedTopic}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {currentView === 'premium-dashboard' && (
        <PremiumDashboard onBack={handleBack} />
      )}

      {currentView === 'ai-interview' && (
        <AIInterview 
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}

      {/* Authentication pages */}
      {!currentUser && currentView === 'login' && (
        <Login 
          onLogin={handleLogin}
          onNavigateToSignup={() => setCurrentView('signup')}
        />
      )}
      
      {!currentUser && currentView === 'signup' && (
        <Signup 
          onSignup={handleSignup}
          onNavigateToLogin={() => setCurrentView('login')}
        />
      )}

      {/* Original Dashboard and Practice (for authenticated users) */}
      {currentUser && currentView === 'dashboard' && (
        <Dashboard onSelectTopic={handleSelectTopic} />
      )}
      
      {currentUser && currentView === 'practice' && selectedTopic && (
        <TopicPractice 
          topicId={selectedTopic} 
          onBack={handleBackToDashboard} 
        />
      )}
      
      <Toaster />
    </div>
  );
}

export default App;