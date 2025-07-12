
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BeforeLoginPage = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const redirectToLogin = () => {
     
      navigate("/login");
    };
  return (
   <>
      <div className="min-h-screen bg-green-50">
      {/* Navigation Bar */}
    

      {/* Hero Section */}
      <div className="bg-green-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Secure Your Code with</span>
                <span className="block text-red-500">Dev<span className="text-gray-900">Guardian</span></span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Your ultimate code defense system - Analyze, Validate, and Protect your development workflow. Catch bugs and vulnerabilities before they reach production.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={redirectToLogin}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md shadow"
                >
                  Get Started
                </button>
                <a 
                  href="#features" 
                  className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md shadow flex items-center justify-center"
                >
                  Learn More
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
                  <p>$ devguardian scan</p>
                  <p className="mt-2">Scanning project code...</p>
                  <p className="mt-2 text-yellow-400">⚠️ Potential vulnerability found in auth.js:</p>
                  <p className="text-white">  - Line 42: Insecure password hashing</p>
                  <p className="mt-2 text-red-400">❌ Security issue found in api.js:</p>
                  <p className="text-white">  - Line 87: SQL injection vulnerability</p>
                  <p className="mt-2 text-green-400">✓ Generated fix suggestions</p>
                  <p className="text-white">  - Apply patches? [Y/n]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Tools for Developers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              DevVerse provides comprehensive tools to ensure your code is clean, correct, and original.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Code Reviewer */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="bg-red-500 p-2 rounded-full">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-white">Code Reviewer</h3>
                </div>
                <p className="mt-4 text-gray-300">
                  Advanced AI-powered code analysis that identifies bugs, security vulnerabilities, and performance issues in real-time.
                </p>
                <button 
                  onClick={redirectToLogin}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Explore
                  <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* JSON Checker */}
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6m3 6v-6m3 6v-6" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-800">JSON Checker</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Validate, format, and analyze your JSON data structure with precision and ease.
                </p>
                <button 
                  onClick={redirectToLogin}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                >
                  Explore
                  <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Plagiarism Checker */}
            <div className="bg-green-100 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="bg-green-500 p-2 rounded-full">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-800">Plagiarism Checker</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Ensure code originality with our powerful plagiarism detection engine that searches across millions of repositories.
                </p>
                <button 
                  onClick={redirectToLogin}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
                >
                  Explore
                  <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Key Benefits
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Detect bugs before they reach production</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Our intelligent scanning finds issues early in your development cycle.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Improve code quality with actionable suggestions</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Get smart recommendations to enhance your code's performance and security.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Learn best practices while coding</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Continuous feedback helps you become a better developer with each line of code.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button 
                  onClick={redirectToLogin}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600"
                >
                  Start Improving Your Code
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Why developers love our Code Reviewer</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Productivity boost</p>
                    <p className="text-3xl font-bold text-gray-900">47%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Issues prevented</p>
                    <p className="text-3xl font-bold text-gray-900">10k+</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Time saved</p>
                    <p className="text-3xl font-bold text-gray-900">5h/week</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Satisfaction</p>
                    <p className="text-3xl font-bold text-gray-900">98%</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How DevVerse Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple yet powerful workflow to elevate your code quality in minutes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Upload Your Code</h3>
              <p className="mt-2 text-base text-gray-600">
                Upload your code or connect your repository for seamless integration with our platform.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Automated Analysis</h3>
              <p className="mt-2 text-base text-gray-600">
                Our AI-engine analyzes your code for bugs, vulnerabilities, and plagiarism in seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Issue Identification</h3>
              <p className="mt-2 text-base text-gray-600">
                Get detailed reports on potential problems with actionable suggestions for improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Fix & Verify</h3>
              <p className="mt-2 text-base text-gray-600">
                Implement the suggested changes and verify your code is clean, secure, and original.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={redirectToLogin}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600"
            >
              Try DevVerse Now
            </button>
          </div>
        </div>
      </div>

      </div>
   </>
  )
}

export default BeforeLoginPage
