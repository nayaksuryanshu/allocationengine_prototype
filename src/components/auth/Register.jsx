import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentId: '',
        university: '',
        course: '',
        year: '',
        cgpa: '',
        skills: '',
        resume: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        if (!formData.university) newErrors.university = 'University is required';
        if (!formData.course) newErrors.course = 'Course is required';
        if (!formData.year) newErrors.year = 'Year of study is required';
        if (!formData.cgpa) newErrors.cgpa = 'CGPA is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Handle registration logic here
            console.log('Registration submitted:', formData);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join us and get started with your internship journey
                    </p>
                </div>
                
                <div className="bg-white shadow-xl rounded-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Basic Information */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            {/* Student Credentials */}
                            <div>
                                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                                    Student ID
                                </label>
                                <input
                                    id="studentId"
                                    name="studentId"
                                    type="text"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.studentId ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Enter your student ID"
                                    value={formData.studentId}
                                    onChange={handleChange}
                                />
                                {errors.studentId && <p className="mt-1 text-sm text-red-600">{errors.studentId}</p>}
                            </div>

                            <div>
                                <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                                    University/Institution
                                </label>
                                <input
                                    id="university"
                                    name="university"
                                    type="text"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.university ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Enter your university name"
                                    value={formData.university}
                                    onChange={handleChange}
                                />
                                {errors.university && <p className="mt-1 text-sm text-red-600">{errors.university}</p>}
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                                    Course/Program
                                </label>
                                <input
                                    id="course"
                                    name="course"
                                    type="text"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.course ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="e.g., Computer Science, MBA"
                                    value={formData.course}
                                    onChange={handleChange}
                                />
                                {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
                            </div>

                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                                    Year of Study
                                </label>
                                <select
                                    id="year"
                                    name="year"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.year ? 'border-red-300' : 'border-gray-300'} rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    value={formData.year}
                                    onChange={handleChange}
                                >
                                    <option value="">Select year</option>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                    <option value="graduate">Graduate</option>
                                </select>
                                {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
                            </div>

                            <div>
                                <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700 mb-1">
                                    CGPA/GPA
                                </label>
                                <input
                                    id="cgpa"
                                    name="cgpa"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    max="10"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.cgpa ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="e.g., 8.5"
                                    value={formData.cgpa}
                                    onChange={handleChange}
                                />
                                {errors.cgpa && <p className="mt-1 text-sm text-red-600">{errors.cgpa}</p>}
                            </div>

                            <div>
                                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                                    Skills (Optional)
                                </label>
                                <textarea
                                    id="skills"
                                    name="skills"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                                    placeholder="List your relevant skills (separated by commas)"
                                    value={formData.skills}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                                    Resume (Optional)
                                </label>
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <span className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                                Sign in here
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;