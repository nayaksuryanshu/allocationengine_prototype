import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, BarChart3, LogIn, UserPlus, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import Communication from './communication'; // Import the component

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:shadow-lg transition-all duration-200">
                            <img 
                                src={logo} 
                                alt="SkillSync Logo" 
                                className="h-8 w-8 object-contain filter brightness-110 contrast-110 transform group-hover:scale-105 transition-all duration-200" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900">
                                SkillSync
                            </span>
                            <span className="text-xs text-gray-500 font-medium">
                                Smart Resource Allocation
                            </span>
                        </div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/') 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/dashboard" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/dashboard') 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            <BarChart3 className="h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>
                        <Link 
                            to="/chatbot" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/chatbot') 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            <Bot className="h-4 w-4" />
                            <span>AI Assistant</span>
                        </Link>
                        <Link 
                            to="/connect"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/connect')
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Connect</span>
                        </Link>
                        <Link 
                            to="/about"
                            className={`text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 ${
                                isActive('/about') ? 'bg-blue-100 text-blue-700' : ''
                            }`}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact"
                            className={`text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 ${
                                isActive('/contact') ? 'bg-blue-100 text-blue-700' : ''
                            }`}
                        >
                            Contact
                        </Link>
                        <Link 
                            to="/login" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/login') 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            <LogIn className="h-4 w-4" />
                            <span>Login</span>
                        </Link>
                        <Link 
                            to="/register" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 ${
                                isActive('/register') ? 'bg-blue-700' : ''
                            }`}
                        >
                            <UserPlus className="h-4 w-4" />
                            <span>Register</span>
                        </Link>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
                        <div className="flex flex-col space-y-2">
                            <Link 
                                to="/" 
                                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/') 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/dashboard" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/dashboard') 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BarChart3 className="h-4 w-4" />
                                <span>Dashboard</span>
                            </Link>
                            <Link 
                                to="/chatbot" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/chatbot') 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Bot className="h-4 w-4" />
                                <span>AI Assistant</span>
                            </Link>
                            <Link 
                                to="/connect"
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/connect')
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Connect</span>
                            </Link>
                            <Link 
                                to="/about"
                                className={`text-gray-600 hover:text-blue-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 ${
                                    isActive('/about') ? 'bg-blue-100 text-blue-700' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                to="/contact"
                                className={`text-gray-600 hover:text-blue-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 ${
                                    isActive('/contact') ? 'bg-blue-100 text-blue-700' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link 
                                to="/login" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/login') 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-4 w-4" />
                                <span>Login</span>
                            </Link>
                            <Link 
                                to="/register" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 ${
                                    isActive('/register') ? 'bg-blue-700' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-4 w-4" />
                                <span>Register</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;