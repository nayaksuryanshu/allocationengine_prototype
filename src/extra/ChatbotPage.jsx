import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';

const ChatbotPage = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your AI Career Guidance Assistant powered by SkillSync. I can help you with career planning, skill development, job search strategies, and resource allocation. How can I assist you today?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const careerGuidanceDatabase = {
        'skills': [
            "I can help you identify and develop your key skills! What specific skills are you interested in developing?",
            "Skill development is crucial for career growth. Would you like to explore technical skills, soft skills, or industry-specific competencies?",
            "Let me help you create a personalized skill development plan. What's your current profession or field of interest?"
        ],
        'resume': [
            "I can guide you through creating a compelling resume! Would you like help with formatting, content optimization, or ATS compatibility?",
            "A great resume tells your professional story. Let's start with your target role - what position are you applying for?",
            "Resume building can be overwhelming, but I'm here to help! Should we focus on highlighting your achievements, skills, or work experience?"
        ],
        'interview': [
            "Interview preparation is key to landing your dream job! Are you preparing for a specific type of interview - technical, behavioral, or panel?",
            "I can help you practice common interview questions and develop strong answers. What industry or role are you interviewing for?",
            "Let's boost your interview confidence! Would you like tips on body language, answering tough questions, or asking thoughtful questions?"
        ],
        'career change': [
            "Career transitions can be exciting and rewarding! What's driving your desire for a career change?",
            "I'm here to support your career pivot. Tell me about your current field and what new direction interests you?",
            "Career changes require strategic planning. Let's explore your transferable skills and potential pathways together!"
        ],
        'salary': [
            "Salary negotiation is an important skill! Are you preparing for a job offer negotiation or asking for a raise?",
            "Let me help you research market rates and develop negotiation strategies. What's your role and location?",
            "Confident salary discussions start with preparation. Would you like tips on researching compensation or negotiation techniques?"
        ],
        'networking': [
            "Networking opens doors to amazing opportunities! Are you looking to build your network online, at events, or within your company?",
            "Professional relationships are invaluable. Would you like strategies for LinkedIn networking, industry events, or informational interviews?",
            "Let's expand your professional circle! What's your networking goal - job searching, mentorship, or industry connections?"
        ],
        'education': [
            "Continuous learning is fantastic for career growth! Are you considering formal degrees, professional certifications, or online courses?",
            "I can help you choose the right educational path. What field are you looking to study or what skills do you want to develop?",
            "Education investments should align with your career goals. Tell me about your aspirations and current background!"
        ],
        'job search': [
            "Job searching can be challenging, but I'm here to help! What stage are you at - just starting, actively applying, or stuck in the process?",
            "Let's optimize your job search strategy! Are you using job boards, networking, recruiters, or company websites?",
            "I can help you create a systematic job search approach. What type of role and companies are you targeting?"
        ]
    };

    const getRandomResponse = (responses) => {
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const generateBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! Great to see you here. I'm your AI career assistant, ready to help you navigate your professional journey. What would you like to discuss today?";
        }

        if (message.includes('thank') || message.includes('thanks')) {
            return "You're very welcome! I'm here whenever you need career guidance. Feel free to ask me anything else!";
        }

        for (const [key, responses] of Object.entries(careerGuidanceDatabase)) {
            if (message.includes(key) || message.includes(key.replace(' ', ''))) {
                return getRandomResponse(responses);
            }
        }

        if (message.includes('career') || message.includes('job') || message.includes('work')) {
            return "I'd love to help with your career questions! I can assist with skill development, resume building, interview preparation, career transitions, networking strategies, and much more. What specific area interests you most?";
        }

        if (message.includes('help') || message.includes('advice') || message.includes('guidance')) {
            return "I'm here to provide personalized career guidance! I can help with: 📋 Resume & Cover Letters, 💼 Interview Preparation, 🎯 Skill Development, 🔄 Career Changes, 💰 Salary Negotiation, 🌐 Professional Networking, 📚 Education Planning. What would you like to explore?";
        }

        return "That's an interesting point! While I specialize in career guidance, I'm always here to help. You might want to ask me about: career planning, skill development, job search strategies, interview tips, or professional growth. What career topic interests you most?";
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: inputMessage.trim(),
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputMessage('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: generateBotResponse(inputMessage),
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500 + Math.random() * 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const quickSuggestions = [
        "Help me improve my resume",
        "Interview preparation tips",
        "Career change guidance",
        "Skill assessment and development"
    ];

    const handleSuggestionClick = (suggestion) => {
        setInputMessage(suggestion);
        inputRef.current?.focus();
    };

    const clearChat = () => {
        setMessages([
            {
                id: 1,
                text: "Hello! I'm your AI Career Guidance Assistant powered by SkillSync. I can help you with career planning, skill development, job search strategies, and resource allocation. How can I assist you today?",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <div className="max-w-4xl mx-auto h-[calc(100vh-5rem)] bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Bot className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">AI Career Assistant</h2>
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-blue-100">Online • Ready to help</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={clearChat}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                        title="Clear Chat"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 h-[calc(100vh-16rem)]">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-end space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'}`}>
                                    {message.sender === 'user' ? 
                                        <User className="h-4 w-4 text-white" /> : 
                                        <Sparkles className="h-4 w-4 text-white" />
                                    }
                                </div>
                                <div className={`px-4 py-3 rounded-2xl shadow-md ${
                                    message.sender === 'user' 
                                        ? 'bg-blue-500 text-white rounded-br-md' 
                                        : 'bg-gray-100 text-gray-800 rounded-bl-md border'
                                }`}>
                                    <p className="text-sm leading-relaxed">{message.text}</p>
                                    <span className={`text-xs ${
                                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                                    } block mt-2`}>
                                        {message.timestamp}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex items-end space-x-3">
                                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                                    <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <div className="bg-gray-100 border rounded-2xl rounded-bl-md px-4 py-3">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestions */}
                <div className="px-6 py-3 bg-gray-50 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-2">💡 Quick suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs hover:from-blue-200 hover:to-purple-200 transition-all duration-200 border border-blue-200"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="px-6 py-4 bg-white border-t">
                    <div className="flex gap-3 items-end">
                        <div className="flex-1">
                            <textarea
                                ref={inputRef}
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything about your career journey..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows="1"
                                style={{ minHeight: '44px', maxHeight: '120px' }}
                            />
                        </div>
                        <button 
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim() || isTyping}
                            className={`p-3 rounded-lg transition-all duration-200 ${
                                inputMessage.trim() && !isTyping
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Press Enter to send • Shift+Enter for new line
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;