import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TopicPractice from './components/TopicPractice';
import Login from './components/Login';
import Signup from './components/Signup';
import { Toaster } from './components/ui/toaster';

function App() {
  const [currentView, setCurrentView] = useState('login'); // Start with login
  const [selectedTopic, setSelectedTopic] = useState(null);
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
    setCurrentView('login');
    setSelectedTopic(null);
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'dashboard') {
      setSelectedTopic(null);
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