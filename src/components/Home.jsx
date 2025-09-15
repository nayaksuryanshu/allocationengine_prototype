import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart3, Zap, Settings, Target, Clock, Users, DollarSign } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <Brain className="h-8 w-8" />,
            title: "Smart AI Algorithms",
            description: "Advanced machine learning models for optimal resource allocation and distribution"
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Real-time Analytics",
            description: "Live data visualization and performance metrics for informed decision making"
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Efficient Processing",
            description: "Lightning-fast allocation processing with minimal computational overhead"
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Customizable Rules",
            description: "Flexible configuration options to adapt to various allocation scenarios"
        }
    ];

    const stats = [
        { icon: <Target className="h-6 w-6" />, value: "99.5%", label: "Allocation Accuracy" },
        { icon: <Clock className="h-6 w-6" />, value: "50ms", label: "Response Time" },
        { icon: <Users className="h-6 w-6" />, value: "10K+", label: "Resources Managed" },
        { icon: <DollarSign className="h-6 w-6" />, value: "24/7", label: "System Availability" }
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
                                Smart Innovation Hackathon 2024 - Revolutionizing resource allocation 
                                with artificial intelligence and machine learning algorithms
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
                                    Learn More
                                </button>
                            </div>
                        </div>
                        
                        {/* Simple visual element */}
                        <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                            <div className="text-center">
                                <Brain className="h-32 w-32 mx-auto mb-4 text-white opacity-80" />
                                <p className="text-xl text-white opacity-70">AI-Powered Intelligence</p>
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
                            Key Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the powerful capabilities that make our AI allocation engine 
                            the perfect solution for your resource management needs.
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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