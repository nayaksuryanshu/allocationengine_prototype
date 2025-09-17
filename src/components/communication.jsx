import React, { useState } from 'react';

// Student Communication Component
const StudentCommunication = ({ companies = [], students = [] }) => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [search, setSearch] = useState('');
    const [filterCompany, setFilterCompany] = useState('');

    const handleSend = () => {
        if (selectedStudent && selectedCompany && message.trim()) {
            setMessages([
                ...messages,
                {
                    student: selectedStudent,
                    company: selectedCompany,
                    text: message,
                    time: new Date().toLocaleString(),
                    type: 'student'
                },
            ]);
            setMessage('');
        }
    };

    const filteredMessages = messages.filter(
        msg =>
            (!search || msg.text.toLowerCase().includes(search.toLowerCase())) &&
            (!filterCompany || msg.company === filterCompany)
    );

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎓</span>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-blue-700">Student Communication Portal</h2>
                    <p className="text-gray-600">Students can reach out to companies for opportunities</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label className="flex flex-col text-sm font-medium">
                    Select Your Name:
                    <select
                        className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 bg-blue-50"
                        value={selectedStudent}
                        onChange={e => setSelectedStudent(e.target.value)}
                    >
                        <option value="">Choose Student</option>
                        {students.map(s => (
                            <option key={s.id} value={s.name}>{s.name} - {s.course}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col text-sm font-medium">
                    Send Message To:
                    <select
                        className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500"
                        value={selectedCompany}
                        onChange={e => setSelectedCompany(e.target.value)}
                    >
                        <option value="">Select Company</option>
                        {companies.map(c => (
                            <option key={c.id} value={c.name}>{c.name} - {c.industry}</option>
                        ))}
                    </select>
                </label>
            </div>

            <textarea
                rows={4}
                className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:border-blue-500"
                placeholder="Dear Hiring Manager, I am interested in opportunities at your company..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            
            <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={handleSend}
            >
                Send Message 📤
            </button>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">📨 Sent Messages</h3>
                <div className="flex gap-4 mb-4">
                    <input
                        className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:border-blue-500"
                        type="text"
                        placeholder="Search your messages..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <select
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500"
                        value={filterCompany}
                        onChange={e => setFilterCompany(e.target.value)}
                    >
                        <option value="">All Companies</option>
                        {companies.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>
                
                <div className="space-y-4">
                    {filteredMessages.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <span className="text-4xl mb-4 block">💌</span>
                            <p>No messages sent yet. Start reaching out to companies!</p>
                        </div>
                    ) : (
                        filteredMessages.map((msg, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-bold text-blue-700 text-lg">🎓 {msg.student}</span>
                                        <span className="mx-3 text-gray-500">→</span>
                                        <span className="font-bold text-green-700 text-lg">🏢 {msg.company}</span>
                                    </div>
                                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                        Student Message
                                    </span>
                                </div>
                                <div className="text-gray-800 mb-3 leading-relaxed">{msg.text}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                    <span className="mr-2">🕒</span>
                                    {msg.time}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

// Company Communication Component
const CompanyCommunication = ({ companies = [], students = [] }) => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [priority, setPriority] = useState('Normal');
    const [search, setSearch] = useState('');
    const [filterStudent, setFilterStudent] = useState('');

    const handleSend = () => {
        if (selectedCompany && selectedStudent && message.trim()) {
            setMessages([
                ...messages,
                {
                    company: selectedCompany,
                    student: selectedStudent,
                    text: message,
                    time: new Date().toLocaleString(),
                    priority,
                    type: 'company'
                },
            ]);
            setMessage('');
            setPriority('Normal');
        }
    };

    const filteredMessages = messages.filter(
        msg =>
            (!search || msg.text.toLowerCase().includes(search.toLowerCase())) &&
            (!filterStudent || msg.student === filterStudent)
    );

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-green-700">Company Communication Portal</h2>
                    <p className="text-gray-600">Companies can connect with students for recruitment</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <label className="flex flex-col text-sm font-medium">
                    Company Name:
                    <select
                        className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-green-500 bg-green-50"
                        value={selectedCompany}
                        onChange={e => setSelectedCompany(e.target.value)}
                    >
                        <option value="">Select Company</option>
                        {companies.map(c => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col text-sm font-medium">
                    Contact Student:
                    <select
                        className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-green-500"
                        value={selectedStudent}
                        onChange={e => setSelectedStudent(e.target.value)}
                    >
                        <option value="">Select Student</option>
                        {students.map(s => (
                            <option key={s.id} value={s.name}>{s.name} - {s.skills}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col text-sm font-medium">
                    Message Priority:
                    <select
                        className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-green-500"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                    >
                        <option value="Normal">Normal</option>
                        <option value="High">High Priority</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </label>
            </div>

            <textarea
                rows={4}
                className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:border-green-500"
                placeholder="We are impressed by your profile and would like to discuss opportunities..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            
            <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                onClick={handleSend}
            >
                Send Message 📬
            </button>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">📋 Sent Messages</h3>
                <div className="flex gap-4 mb-4">
                    <input
                        className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:border-green-500"
                        type="text"
                        placeholder="Search company messages..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <select
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-green-500"
                        value={filterStudent}
                        onChange={e => setFilterStudent(e.target.value)}
                    >
                        <option value="">All Students</option>
                        {students.map(s => (
                            <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                    </select>
                </div>
                
                <div className="space-y-4">
                    {filteredMessages.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <span className="text-4xl mb-4 block">📧</span>
                            <p>No messages sent yet. Start connecting with talented students!</p>
                        </div>
                    ) : (
                        filteredMessages.map((msg, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-500">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-bold text-green-700 text-lg">🏢 {msg.company}</span>
                                        <span className="mx-3 text-gray-500">→</span>
                                        <span className="font-bold text-blue-700 text-lg">🎓 {msg.student}</span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        msg.priority === 'Urgent' ? 'bg-red-200 text-red-800' :
                                        msg.priority === 'High' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-green-200 text-green-800'
                                    }`}>
                                        {msg.priority} Priority
                                    </span>
                                </div>
                                <div className="text-gray-800 mb-3 leading-relaxed">{msg.text}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                    <span className="mr-2">🕒</span>
                                    {msg.time}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

// Main App Component with Toggle
const PrototypeCommunicationApp = () => {
    const [activeView, setActiveView] = useState('student'); // 'student' or 'company'

    // Sample Companies Data
    const companies = [
        { id: 1, name: 'TechCorp Solutions', industry: 'Technology', location: 'Bangalore' },
        { id: 2, name: 'InnovateLabs', industry: 'Software Development', location: 'Mumbai' },
        { id: 3, name: 'DataDrive Systems', industry: 'Data Analytics', location: 'Pune' },
        { id: 4, name: 'CloudFirst Technologies', industry: 'Cloud Computing', location: 'Hyderabad' },
        { id: 5, name: 'AI Innovations', industry: 'Artificial Intelligence', location: 'Chennai' },
        { id: 6, name: 'CyberSecure Inc', industry: 'Cybersecurity', location: 'Delhi' },
        { id: 7, name: 'FinTech Masters', industry: 'Financial Technology', location: 'Indore' },
        { id: 8, name: 'RoboTech Industries', industry: 'Robotics & Automation', location: 'Ahmedabad' }
    ];

    // Sample Students Data
    const students = [
        { id: 1, name: 'Arjun Sharma', course: 'Computer Science', year: '4th Year', skills: 'React, Node.js, MongoDB' },
        { id: 2, name: 'Priya Patel', course: 'Information Technology', year: '3rd Year', skills: 'Python, Django, PostgreSQL' },
        { id: 3, name: 'Rohit Kumar', course: 'Electronics', year: '4th Year', skills: 'IoT, Arduino, Raspberry Pi' },
        { id: 4, name: 'Sneha Gupta', course: 'Computer Science', year: '3rd Year', skills: 'Java, Spring Boot, MySQL' },
        { id: 5, name: 'Vikash Singh', course: 'Data Science', year: '2nd Year', skills: 'Machine Learning, Python, Pandas' },
        { id: 6, name: 'Anita Rao', course: 'Cybersecurity', year: '4th Year', skills: 'Ethical Hacking, Network Security' },
        { id: 7, name: 'Kiran Joshi', course: 'AI & ML', year: '3rd Year', skills: 'TensorFlow, Deep Learning, OpenCV' },
        { id: 8, name: 'Rahul Mehta', course: 'Software Engineering', year: '4th Year', skills: 'Full Stack Development, DevOps' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            🎯 Student-Company Communication Platform
                        </h1>
                        <p className="text-gray-600 text-lg">Bridging the gap between talent and opportunities</p>
                    </div>
                    
                    {/* Toggle Switch */}
                    <div className="flex justify-center">
                        <div className="bg-gray-200 p-1 rounded-lg flex">
                            <button
                                onClick={() => setActiveView('student')}
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    activeView === 'student'
                                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                🎓 Student View
                            </button>
                            <button
                                onClick={() => setActiveView('company')}
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    activeView === 'company'
                                        ? 'bg-green-600 text-white shadow-md transform scale-105'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                            >
                                🏢 Company View
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl mb-2">🏢</div>
                        <div className="text-2xl font-bold text-blue-600">{companies.length}</div>
                        <div className="text-gray-600">Companies</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl mb-2">🎓</div>
                        <div className="text-2xl font-bold text-green-600">{students.length}</div>
                        <div className="text-gray-600">Students</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl mb-2">📨</div>
                        <div className="text-2xl font-bold text-purple-600">47</div>
                        <div className="text-gray-600">Messages Sent</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl mb-2">🤝</div>
                        <div className="text-2xl font-bold text-orange-600">12</div>
                        <div className="text-gray-600">Connections Made</div>
                    </div>
                </div>

                {/* Communication Components */}
                <div className="transition-all duration-300">
                    {activeView === 'student' ? (
                        <StudentCommunication companies={companies} students={students} />
                    ) : (
                        <CompanyCommunication companies={companies} students={students} />
                    )}
                </div>
            </div>

            {/* Demo Instructions */}
            <div className="bg-white border-t">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="text-center text-gray-600">
                        <p className="font-medium mb-2">🎭 Prototype Demo Instructions</p>
                        <p className="text-sm">
                            Toggle between Student and Company views to demonstrate different user perspectives. 
                            Each view shows how the respective users would interact with the communication platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrototypeCommunicationApp;