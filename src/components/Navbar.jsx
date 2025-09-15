import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, BarChart3, LogIn, UserPlus } from 'lucide-react';

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
                        <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg group-hover:shadow-lg transition-all duration-200">
                            <Bot className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            AI Allocation Engine
                        </span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/') 
                                    ? 'bg-primary-100 text-primary-700' 
                                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/dashboard" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/dashboard') 
                                    ? 'bg-primary-100 text-primary-700' 
                                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                            }`}
                        >
                            <BarChart3 className="h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>
                        <a 
                            href="#about" 
                            className="text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100"
                        >
                            About
                        </a>
                        <a 
                            href="#contact" 
                            className="text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100"
                        >
                            Contact
                        </a>
                        <Link 
                            to="/login" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/login') 
                                    ? 'bg-primary-100 text-primary-700' 
                                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                            }`}
                        >
                            <LogIn className="h-4 w-4" />
                            <span>Login</span>
                        </Link>
                        <Link 
                            to="/register" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-primary-600 text-white hover:bg-primary-700 ${
                                isActive('/register') ? 'bg-primary-700' : ''
                            }`}
                        >
                            <UserPlus className="h-4 w-4" />
                            <span>Register</span>
                        </Link>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
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
                                        ? 'bg-primary-100 text-primary-700' 
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/dashboard" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/dashboard') 
                                        ? 'bg-primary-100 text-primary-700' 
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BarChart3 className="h-4 w-4" />
                                <span>Dashboard</span>
                            </Link>
                            <a 
                                href="#about" 
                                className="text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a 
                                href="#contact" 
                                className="text-gray-600 hover:text-primary-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <Link 
                                to="/login" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive('/login') 
                                        ? 'bg-primary-100 text-primary-700' 
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-4 w-4" />
                                <span>Login</span>
                            </Link>
                            <Link 
                                to="/register" 
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-600 text-white hover:bg-primary-700 ${
                                    isActive('/register') ? 'bg-primary-700' : ''
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