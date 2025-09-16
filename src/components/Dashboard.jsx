import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Server, Database, HardDrive, Activity, Lightbulb, CheckCircle, Brain, GraduationCap, Building2, Star, Clock, Target, Award, MapPin, Filter, Search, Shield, PieChart, AlertTriangle, Eye } from 'lucide-react';

const Dashboard = () => {
    const [userType, setUserType] = useState('student'); // 'student', 'company', or 'admin'
    
    // Student data
    const [studentData] = useState({
        profile: {
            name: "Suryanshu",
            university: "Medicaps",
            gpa: 3.8,
            skills: ["React", "Python", "Machine Learning", "Data Science"],
            year: "3rd Year"
        },
        applications: 15,
        interviews: 8,
        offers: 3,
        matchScore: 87.5
    });

    const [companyRankings] = useState([
        { id: 1, company: "TCS", role: "Software Engineer Intern", matchScore: 92, status: 'applied', stipend: '8000/month', location: 'Mountain View, CA' },
        { id: 2, company: "Wipro", role: "Data Science Intern", matchScore: 89, status: 'interview', stipend: '7500/month', location: 'Redmond, WA' },
        { id: 3, company: "Amazon", role: "ML Engineer Intern", matchScore: 85, status: 'waitlist', stipend: '7200/month', location: 'Seattle, WA' },
        { id: 4, company: "Cognizant", role: "iOS Developer Intern", matchScore: 78, status: 'recommended', stipend: '8200/month', location: 'Cupertino, CA' },
    ]);

    // Company data
    const [companyData] = useState({
        profile: {
            name: "TechCorp Inc.",
            industry: "Technology",
            size: "500-1000 employees",
            openPositions: 12
        },
        totalApplicants: 245,
        interviewed: 67,
        hired: 23,
        avgMatchScore: 76.3
    });

    const [studentRankings] = useState([
        { id: 1, name: "Suryanshu", university: "Acropolis", gpa: 6.9, skills: ["React", "Node.js", "AWS"], matchScore: 44, status: 'offer_sent', year: "4th Year" },
        { id: 2, name: "Tanvi", university: "SAGE", gpa: 7.7, skills: ["Python", "ML", "TensorFlow"], matchScore: 61, status: 'interviewed', year: "3rd Year" },
        { id: 3, name: "Snehal", university: "Medicaps", gpa: 8.8, skills: ["Java", "Spring", "Docker"], matchScore: 38, status: 'waitlist', year: "4th Year" },
        { id: 4, name: "Tanisha", university: "CMU", gpa: 7.6, skills: ["JavaScript", "React", "MongoDB"], matchScore: 85, status: 'applied', year: "2nd Year" },
        { id: 5, name: "Hardik", university: "Caltech", gpa: 6.9, skills: ["Python", "Data Science", "R"], matchScore: 92, status: 'screening', year: "3rd Year" },
    ]);

    // Admin data
    const [adminData] = useState({
        systemMetrics: {
            totalStudents: 12847,
            totalCompanies: 856,
            activeApplications: 34521,
            successfulMatches: 8934,
            systemUptime: 99.7
        },
        transparencyMetrics: {
            algorithmAccuracy: 87.3,
            biasScore: 12.4,
            fairnessIndex: 8.7,
            dataQuality: 94.2
        },
        universityStats: [
            { name: "Medicaps", students: 2341, placements: 89, avgStipend: "7800" },
            { name: "IPS", students: 2156, placements: 91, avgStipend: "8200" },
            { name: "SAGE", students: 1987, placements: 85, avgStipend: "7600" },
            { name: "CMU", students: 1654, placements: 88, avgStipend: "7900" },
            { name: "Caltech", students: 987, placements: 92, avgStipend: "8100" }
        ],
        companyStats: [
            { name: "TCS", applications: 3456, hired: 234, avgMatchScore: 89.2 },
            { name: "Wipro", applications: 2987, hired: 198, avgMatchScore: 86.7 },
            { name: "Infosys", applications: 4123, hired: 287, avgMatchScore: 84.3 },
            { name: "Apple", applications: 2654, hired: 176, avgMatchScore: 87.9 },
            { name: "Meta", applications: 2341, hired: 156, avgMatchScore: 85.6 }
        ],
        allocationTrends: [
            { month: "Jan", students: 1200, companies: 145, matches: 890 },
            { month: "Feb", students: 1350, companies: 162, matches: 1023 },
            { month: "Mar", students: 1580, companies: 178, matches: 1245 },
            { month: "Apr", students: 1890, companies: 201, matches: 1456 },
            { month: "May", students: 2100, companies: 223, matches: 1678 },
            { month: "Jun", students: 2345, companies: 245, matches: 1834 }
        ]
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'applied': return 'bg-blue-100 text-blue-800';
            case 'interview': return 'bg-purple-100 text-purple-800';
            case 'waitlist': return 'bg-yellow-100 text-yellow-800';
            case 'recommended': return 'bg-green-100 text-green-800';
            case 'offer_sent': return 'bg-green-100 text-green-800';
            case 'interviewed': return 'bg-purple-100 text-purple-800';
            case 'screening': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getMatchScoreColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-yellow-600';
        if (score >= 70) return 'text-orange-600';
        return 'text-red-600';
    };

    const getHealthColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    // Simple Bar Chart Component
    const SimpleBarChart = ({ data, title }) => (
        <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="w-16 text-sm text-gray-600">{item.month}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(item.matches / Math.max(...data.map(d => d.matches))) * 100}%` }}
                            ></div>
                        </div>
                        <div className="w-12 text-sm font-medium text-gray-900">{item.matches}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Transparency Chart Component
    const TransparencyChart = ({ metrics }) => (
        <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-6 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                Algorithm Transparency Metrics
            </h4>
            <div className="grid grid-cols-2 gap-6">
                {Object.entries(metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                        <div className="relative w-24 h-24 mx-auto mb-3">
                            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="2"
                                />
                                <path
                                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                    fill="none"
                                    stroke={value >= 80 ? "#10b981" : value >= 60 ? "#f59e0b" : "#ef4444"}
                                    strokeWidth="2"
                                    strokeDasharray={`${value}, 100`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`text-lg font-bold ${getHealthColor(value)}`}>
                                    {value}%
                                </span>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className={`text-xs mt-1 ${getHealthColor(value)}`}>
                            {value >= 80 ? 'Excellent' : value >= 60 ? 'Good' : 'Needs Attention'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

    // Student Dashboard Component (unchanged)
    const StudentDashboard = () => {
        const studentMetrics = [
            {
                icon: <GraduationCap className="h-6 w-6" />,
                label: 'Applications Sent',
                value: studentData.applications,
                color: 'text-blue-600',
                bg: 'bg-blue-100'
            },
            {
                icon: <Users className="h-6 w-6" />,
                label: 'Interviews',
                value: studentData.interviews,
                color: 'text-purple-600',
                bg: 'bg-purple-100'
            },
            {
                icon: <Award className="h-6 w-6" />,
                label: 'Offers Received',
                value: studentData.offers,
                color: 'text-green-600',
                bg: 'bg-green-100'
            },
            {
                icon: <Target className="h-6 w-6" />,
                label: 'Match Score',
                value: `${studentData.matchScore}%`,
                color: 'text-orange-600',
                bg: 'bg-orange-100'
            }
        ];

        return (
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Student Dashboard
                    </h1>
                    <p className="text-lg text-gray-600">
                        Welcome back, {studentData.profile.name}! Track your internship applications and discover new opportunities.
                    </p>
                </div>

                {/* Student Profile Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">University</p>
                            <p className="font-semibold">{studentData.profile.university}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">GPA</p>
                            <p className="font-semibold">{studentData.profile.gpa}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Year</p>
                            <p className="font-semibold">{studentData.profile.year}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Skills</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {studentData.profile.skills.slice(0, 3).map((skill, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {studentMetrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
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

                {/* Company Rankings & Matching */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            <h2 className="text-2xl font-bold text-gray-900">Recommended Companies</h2>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-flex items-center">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                                    <Search className="h-4 w-4 mr-2" />
                                    Find More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4">
                            {companyRankings.map(company => (
                                <div key={company.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gray-100 rounded-lg">
                                                <Building2 className="h-6 w-6 text-gray-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{company.company}</h3>
                                                <p className="text-gray-600">{company.role}</p>
                                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                    <span className="flex items-center">
                                                        <MapPin className="h-4 w-4 mr-1" />
                                                        {company.location}
                                                    </span>
                                                    <span>{company.salary}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Star className="h-4 w-4 text-yellow-500" />
                                                <span className={`font-bold ${getMatchScoreColor(company.matchScore)}`}>
                                                    {company.matchScore}%
                                                </span>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(company.status)}`}>
                                                {company.status.replace('_', ' ')}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                                            {company.status === 'recommended' ? 'Apply Now' : 'View Details'}
                                        </button>
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Company Dashboard Component (unchanged from original)
    const CompanyDashboard = () => {
        const companyMetrics = [
            {
                icon: <Users className="h-6 w-6" />,
                label: 'Total Applicants',
                value: companyData.totalApplicants,
                color: 'text-blue-600',
                bg: 'bg-blue-100'
            },
            {
                icon: <Activity className="h-6 w-6" />,
                label: 'Interviewed',
                value: companyData.interviewed,
                color: 'text-purple-600',
                bg: 'bg-purple-100'
            },
            {
                icon: <CheckCircle className="h-6 w-6" />,
                label: 'Hired',
                value: companyData.hired,
                color: 'text-green-600',
                bg: 'bg-green-100'
            },
            {
                icon: <TrendingUp className="h-6 w-6" />,
                label: 'Avg Match Score',
                value: `${companyData.avgMatchScore}%`,
                color: 'text-orange-600',
                bg: 'bg-orange-100'
            }
        ];

        return (
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Company Dashboard
                    </h1>
                    <p className="text-lg text-gray-600">
                        Welcome to {companyData.profile.name}! Manage your internship program and discover top talent.
                    </p>
                </div>

                {/* Company Profile Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">Industry</p>
                            <p className="font-semibold">{companyData.profile.industry}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Company Size</p>
                            <p className="font-semibold">{companyData.profile.size}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Open Positions</p>
                            <p className="font-semibold">{companyData.profile.openPositions}</p>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {companyMetrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
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

                {/* Student Rankings & Matching */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            <h2 className="text-2xl font-bold text-gray-900">Top Candidate Rankings</h2>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-flex items-center">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 inline-flex items-center">
                                    <Brain className="h-4 w-4 mr-2" />
                                    Auto-Match
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4">
                            {studentRankings.map(student => (
                                <div key={student.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gray-100 rounded-lg">
                                                <GraduationCap className="h-6 w-6 text-gray-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                                                <p className="text-gray-600">{student.university} • {student.year}</p>
                                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                    <span>GPA: {student.gpa}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {student.skills.slice(0, 3).map((skill, index) => (
                                                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Star className="h-4 w-4 text-yellow-500" />
                                                <span className={`font-bold ${getMatchScoreColor(student.matchScore)}`}>
                                                    {student.matchScore}%
                                                </span>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(student.status)}`}>
                                                {student.status.replace('_', ' ')}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        {student.status === 'applied' && (
                                            <>
                                                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                                                    Schedule Interview
                                                </button>
                                                <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 text-sm font-medium">
                                                    Add to Waitlist
                                                </button>
                                            </>
                                        )}
                                        {student.status === 'interviewed' && (
                                            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                                                Send Offer
                                            </button>
                                        )}
                                        {student.status === 'waitlist' && (
                                            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                                                Move to Active
                                            </button>
                                        )}
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Recommendations for Company */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Brain className="h-6 w-6 mr-3 text-blue-600" />
                            AI Recruitment Insights
                        </h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h4 className="font-semibold text-gray-900">Optimize Interview Process</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Consider fast-tracking top 3 candidates with 90%+ match scores to prevent losing them to competitors</p>
                                    <p className="text-green-600 text-sm font-medium">Impact: +25% hiring success rate</p>
                                </div>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Apply
                                </button>
                            </div>
                            
                            <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h4 className="font-semibold text-gray-900">Waitlist Management</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">5 high-potential candidates are on waitlist. Consider expanding your intern program by 20%</p>
                                    <p className="text-blue-600 text-sm font-medium">Impact: +15% talent acquisition</p>
                                </div>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Admin Dashboard Component
    const AdminDashboard = () => {
        const adminMetrics = [
            {
                icon: <Users className="h-6 w-6" />,
                label: 'Total Students',
                value: adminData.systemMetrics.totalStudents.toLocaleString(),
                color: 'text-blue-600',
                bg: 'bg-blue-100'
            },
            {
                icon: <Building2 className="h-6 w-6" />,
                label: 'Active Companies',
                value: adminData.systemMetrics.totalCompanies,
                color: 'text-purple-600',
                bg: 'bg-purple-100'
            },
            {
                icon: <Activity className="h-6 w-6" />,
                label: 'Active Applications',
                value: adminData.systemMetrics.activeApplications.toLocaleString(),
                color: 'text-green-600',
                bg: 'bg-green-100'
            },
            {
                icon: <CheckCircle className="h-6 w-6" />,
                label: 'Successful Matches',
                value: adminData.systemMetrics.successfulMatches.toLocaleString(),
                color: 'text-orange-600',
                bg: 'bg-orange-100'
            }
        ];

        return (
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 flex items-center justify-center">
                        <Shield className="h-8 w-8 mr-3 text-blue-600" />
                        Admin Dashboard
                    </h1>
                    <p className="text-lg text-gray-600">
                        System overview, transparency metrics, and allocation analytics
                    </p>
                </div>

                {/* System Health Alert */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                        <p className="font-medium text-green-800">System Status: Operational</p>
                        <p className="text-sm text-green-600">Uptime: {adminData.systemMetrics.systemUptime}% | All services running normally</p>
                    </div>
                </div>

                {/* System Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {adminMetrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
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

                {/* Transparency & Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <TransparencyChart metrics={adminData.transparencyMetrics} />
                    <SimpleBarChart data={adminData.allocationTrends} title="Monthly Allocation Trends" />
                </div>

                {/* University Performance */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
                            University Performance Analytics
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">University</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Students</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Placement Rate</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Avg Salary</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Performance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adminData.universityStats.map((uni, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium text-gray-900">{uni.name}</td>
                                            <td className="py-3 px-4 text-gray-600">{uni.students.toLocaleString()}</td>
                                            <td className="py-3 px-4">
                                                <span className={`font-medium ${getHealthColor(uni.placements)}`}>
                                                    {uni.placements}%
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-gray-600">{uni.avgSalary}</td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-20 bg-gray-200 rounded-full h-2">
                                                        <div 
                                                            className={`h-2 rounded-full ${uni.placements >= 90 ? 'bg-green-600' : uni.placements >= 80 ? 'bg-yellow-600' : 'bg-red-600'}`}
                                                            style={{ width: `${uni.placements}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm text-gray-600">{uni.placements}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Company Performance */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Building2 className="h-6 w-6 mr-3 text-purple-600" />
                            Company Hiring Analytics
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Company</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Applications</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Hired</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Avg Match Score</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Efficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adminData.companyStats.map((company, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium text-gray-900">{company.name}</td>
                                            <td className="py-3 px-4 text-gray-600">{company.applications.toLocaleString()}</td>
                                            <td className="py-3 px-4 text-gray-600">{company.hired}</td>
                                            <td className="py-3 px-4">
                                                <span className={`font-medium ${getMatchScoreColor(company.avgMatchScore)}`}>
                                                    {company.avgMatchScore}%
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-20 bg-gray-200 rounded-full h-2">
                                                        <div 
                                                            className="bg-blue-600 h-2 rounded-full"
                                                            style={{ width: `${(company.hired / company.applications * 100) * 10}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm text-gray-600">
                                                        {((company.hired / company.applications) * 100).toFixed(1)}%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Algorithm Insights */}
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Brain className="h-6 w-6 mr-3 text-green-600" />
                            AI Algorithm Insights
                        </h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900">System Recommendations</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                                        <TrendingUp className="h-5 w-5 text-green-600 mt-1" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Improve Match Accuracy</p>
                                            <p className="text-xs text-gray-600">Consider adding skill assessment tests to improve algorithm accuracy by ~12%</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Bias Detection</p>
                                            <p className="text-xs text-gray-600">Low bias detected in university preferences. Continue monitoring</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900">Data Quality Metrics</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Profile Completeness</span>
                                        <span className="text-sm font-medium text-green-600">94.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Data Freshness</span>
                                        <span className="text-sm font-medium text-green-600">91.8%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Validation Accuracy</span>
                                        <span className="text-sm font-medium text-yellow-600">87.3%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Dashboard Type Toggle */}
                <div className="flex justify-center">
                    <div className="bg-white rounded-lg p-1 shadow-lg">
                        <button
                            onClick={() => setUserType('student')}
                            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                                userType === 'student'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Student Dashboard
                        </button>
                        <button
                            onClick={() => setUserType('company')}
                            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                                userType === 'company'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Company Dashboard
                        </button>
                        <button
                            onClick={() => setUserType('admin')}
                            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                                userType === 'admin'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Admin Dashboard
                        </button>
                    </div>
                </div>

                {/* Render appropriate dashboard */}
                {userType === 'student' && <StudentDashboard />}
                {userType === 'company' && <CompanyDashboard />}
                {userType === 'admin' && <AdminDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;