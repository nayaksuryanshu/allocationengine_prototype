import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Server, Database, HardDrive, Activity, Lightbulb, CheckCircle, Brain, GraduationCap, Building2, Star, Clock, Target, Award, MapPin, Filter, Search } from 'lucide-react';

const Dashboard = () => {
    const [userType, setUserType] = useState('student'); // 'student' or 'company'
    
    // Student data
    const [studentData] = useState({
        profile: {
            name: "John Doe",
            university: "MIT",
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
        { id: 1, company: "Google", role: "Software Engineer Intern", matchScore: 92, status: 'applied', salary: '$8000/month', location: 'Mountain View, CA' },
        { id: 2, company: "Microsoft", role: "Data Science Intern", matchScore: 89, status: 'interview', salary: '$7500/month', location: 'Redmond, WA' },
        { id: 3, company: "Amazon", role: "ML Engineer Intern", matchScore: 85, status: 'waitlist', salary: '$7200/month', location: 'Seattle, WA' },
        { id: 4, company: "Apple", role: "iOS Developer Intern", matchScore: 78, status: 'recommended', salary: '$8200/month', location: 'Cupertino, CA' },
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
        { id: 1, name: "Alice Johnson", university: "Stanford", gpa: 3.9, skills: ["React", "Node.js", "AWS"], matchScore: 94, status: 'offer_sent', year: "4th Year" },
        { id: 2, name: "Bob Smith", university: "MIT", gpa: 3.7, skills: ["Python", "ML", "TensorFlow"], matchScore: 91, status: 'interviewed', year: "3rd Year" },
        { id: 3, name: "Carol Davis", university: "Berkeley", gpa: 3.8, skills: ["Java", "Spring", "Docker"], matchScore: 88, status: 'waitlist', year: "4th Year" },
        { id: 4, name: "David Wilson", university: "CMU", gpa: 3.6, skills: ["JavaScript", "React", "MongoDB"], matchScore: 85, status: 'applied', year: "2nd Year" },
        { id: 5, name: "Eva Brown", university: "Caltech", gpa: 3.9, skills: ["Python", "Data Science", "R"], matchScore: 82, status: 'screening', year: "3rd Year" },
    ]);

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

    // Student Dashboard Component
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

    // Company Dashboard Component
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
                    </div>
                </div>

                {/* Render appropriate dashboard */}
                {userType === 'student' ? <StudentDashboard /> : <CompanyDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;