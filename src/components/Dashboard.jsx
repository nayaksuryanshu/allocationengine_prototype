import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Server, Database, HardDrive, Activity, Lightbulb, CheckCircle, Brain } from 'lucide-react';

const Dashboard = () => {
    const [allocations, setAllocations] = useState([
        { id: 1, resource: 'Server A', allocated: 85, capacity: 100, status: 'optimal', icon: <Server className="h-5 w-5" /> },
        { id: 2, resource: 'Server B', allocated: 92, capacity: 100, status: 'high', icon: <Server className="h-5 w-5" /> },
        { id: 3, resource: 'Database 1', allocated: 67, capacity: 100, status: 'normal', icon: <Database className="h-5 w-5" /> },
        { id: 4, resource: 'Storage Unit', allocated: 45, capacity: 100, status: 'low', icon: <HardDrive className="h-5 w-5" /> },
    ]);

    const [metrics] = useState({
        totalResources: 24,
        activeAllocations: 18,
        efficiency: 94.2,
        costSavings: 23.5
    });

    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            setAllocations(prev => prev.map(item => ({
                ...item,
                allocated: Math.max(0, Math.min(100, item.allocated + (Math.random() - 0.5) * 8))
            })));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'optimal': return 'bg-green-500';
            case 'high': return 'bg-orange-500';
            case 'normal': return 'bg-blue-500';
            case 'low': return 'bg-gray-500';
            default: return 'bg-blue-500';
        }
    };

    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'optimal': return 'bg-green-100 text-green-800';
            case 'high': return 'bg-orange-100 text-orange-800';
            case 'normal': return 'bg-blue-100 text-blue-800';
            case 'low': return 'bg-gray-100 text-gray-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    };

    const metricsData = [
        {
            icon: <BarChart3 className="h-6 w-6" />,
            label: 'Total Resources',
            value: metrics.totalResources,
            color: 'text-blue-600',
            bg: 'bg-blue-100'
        },
        {
            icon: <Activity className="h-6 w-6" />,
            label: 'Active Allocations',
            value: metrics.activeAllocations,
            color: 'text-green-600',
            bg: 'bg-green-100'
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            label: 'Efficiency Rate',
            value: `${metrics.efficiency}%`,
            color: 'text-purple-600',
            bg: 'bg-purple-100'
        },
        {
            icon: <DollarSign className="h-6 w-6" />,
            label: 'Cost Savings',
            value: `${metrics.costSavings}%`,
            color: 'text-orange-600',
            bg: 'bg-orange-100'
        }
    ];

    const recommendations = [
        {
            icon: <Lightbulb className="h-6 w-6" />,
            title: 'Server B Optimization',
            description: 'Consider redistributing 15% load from Server B to maintain optimal performance',
            impact: '+12% efficiency',
            impactColor: 'text-green-600'
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: 'Storage Expansion',
            description: 'Storage Unit utilization is low. Consider reallocating resources for better efficiency',
            impact: '+8% cost savings',
            impactColor: 'text-blue-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        AI Allocation Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real-time resource allocation monitoring and management powered by artificial intelligence
                    </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metricsData.map((metric, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                                </div>
                                <div className={`p-3 rounded-lg ${metric.bg} ${metric.color}`}>
                                    {metric.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Allocation Overview */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            <h2 className="text-2xl font-bold text-gray-900">Resource Allocation Overview</h2>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                                <Activity className="h-4 w-4 mr-2" />
                                Optimize All
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {allocations.map(item => (
                                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">{item.resource}</h3>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadgeColor(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Allocated: {item.allocated.toFixed(1)}%</span>
                                            <span>Capacity: {item.capacity}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div 
                                                className={`h-3 rounded-full transition-all duration-500 ${getStatusColor(item.status)}`}
                                                style={{ width: `${item.allocated}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-2 mt-4">
                                        <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                                            Adjust
                                        </button>
                                        <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm font-medium">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Recommendations */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Brain className="h-6 w-6 mr-3 text-blue-600" />
                            AI Recommendations
                        </h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="space-y-4">
                            {recommendations.map((rec, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                                        {rec.icon}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{rec.description}</p>
                                        <p className={`text-sm font-medium ${rec.impactColor}`}>
                                            Impact: {rec.impact}
                                        </p>
                                    </div>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm flex items-center">
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Apply
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;