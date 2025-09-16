import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart3, Zap, Settings, Target, Clock, Users, DollarSign, UserCheck, TrendingDown, MessageCircle, Shuffle, Radio } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <UserCheck className="h-8 w-8" />,
            title: "Smart Matching Algorithm",
            description: "Advanced AI-powered matching system for optimal student-course and resource allocation"
        },
        {
            icon: <TrendingDown className="h-8 w-8" />,
            title: "Dropout Prediction",
            description: "Predictive analytics to identify at-risk students and enable proactive interventions"
        },
        {
            icon: <Shuffle className="h-8 w-8" />,
            title: "Intelligent Reallocation",
            description: "Dynamic resource reallocation based on real-time demand and performance metrics"
        },
        {
            icon: <Brain className="h-8 w-8" />,
            title: "AI Career Chatbot",
            description: "24/7 AI-powered career guidance and counseling for personalized student support"
        },
        {
            icon: <Radio className="h-8 w-8" />,
            title: "Real-time Communication",
            description: "Live communication system for instant coordination and collaboration"
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Advanced Analytics",
            description: "Comprehensive data visualization and performance insights for informed decisions"
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Lightning Processing",
            description: "High-speed processing for real-time allocation and matching operations"
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Flexible Configuration",
            description: "Customizable parameters and rules to adapt to various institutional needs"
        }
    ];

    const stats = [
        { icon: <Target className="h-6 w-6" />, value: "99.5%", label: "Matching Accuracy" },
        { icon: <Clock className="h-6 w-6" />, value: "50ms", label: "Response Time" },
        { icon: <Users className="h-6 w-6" />, value: "10K+", label: "Students Managed" },
        { icon: <TrendingDown className="h-6 w-6" />, value: "85%", label: "Dropout Prevention" },
        { icon: <MessageCircle className="h-6 w-6" />, value: "24/7", label: "AI Support" },
        { icon: <DollarSign className="h-6 w-6" />, value: "99.9%", label: "System Uptime" }
    ];

    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <section 
                className="relative overflow-hidden text-white"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    minHeight: '100vh'
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                AI-Powered{' '}
                                <span 
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        background: 'linear-gradient(to right, #fbbf24, #f97316)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >
                                    Allocation Engine
                                </span>
                            </h1>
                            <p className="text-xl lg:text-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                Smart Innovation Hackathon 2025 - Complete educational ecosystem with 
                                matching algorithms, dropout prediction, AI career guidance, and real-time collaboration
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/dashboard" 
                                    className="inline-flex items-center justify-center font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5"
                                    style={{
                                        backgroundColor: 'white',
                                        color: '#667eea'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    View Dashboard
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <button 
                                    className="inline-flex items-center justify-center font-semibold py-4 px-8 rounded-lg transition-all duration-200"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: '2px solid white',
                                        color: 'white'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = '#667eea';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = 'white';
                                    }}
                                >
                                    Try AI Chatbot
                                </button>
                            </div>
                        </div>
                        
                        {/* Enhanced visual element */}
                        <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div className="flex flex-col items-center">
                                    <UserCheck className="h-16 w-16 text-white opacity-80 mb-2" />
                                    <p className="text-sm text-white opacity-70">Smart Matching</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <TrendingDown className="h-16 w-16 text-white opacity-80 mb-2" />
                                    <p className="text-sm text-white opacity-70">Dropout Prevention</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MessageCircle className="h-16 w-16 text-white opacity-80 mb-2" />
                                    <p className="text-sm text-white opacity-70">AI Career Guidance</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Radio className="h-16 w-16 text-white opacity-80 mb-2" />
                                    <p className="text-sm text-white opacity-70">Real-time Comm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A complete AI-powered educational platform with matching algorithms, 
                            predictive analytics, career guidance, and seamless communication.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                style={{ transform: 'translateY(0)' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div 
                                    className="inline-flex p-4 rounded-xl mb-6 text-blue-600"
                                    style={{ backgroundColor: '#dbeafe' }}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20" style={{ background: 'linear-gradient(to right, #f9fafb, #f3f4f6)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
                        <p className="text-lg text-gray-600">Real-world impact and system performance</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="inline-flex p-3 rounded-lg mb-4 text-blue-600" style={{ backgroundColor: '#dbeafe' }}>
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold mb-2" style={{ color: '#667eea' }}>
                                    {stat.value}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;