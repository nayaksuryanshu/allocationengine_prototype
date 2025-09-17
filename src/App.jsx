import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ChatbotPage from './extra/ChatbotPage';
import About from './components/About'; // Add this import
import Contact from './components/Contact'; // Add this import
import Communication from './components/communication'; // Import the Communication component

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/connect" element={<Communication />} /> {/* Add this route */}
            <Route path="/about" element={<About />} /> {/* Add this route */}
            <Route path="/contact" element={<Contact />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;