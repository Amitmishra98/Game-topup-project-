import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { TopUp } from './pages/TopUp';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg flex flex-col font-sans text-slate-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topup/:gameId" element={<TopUp />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;