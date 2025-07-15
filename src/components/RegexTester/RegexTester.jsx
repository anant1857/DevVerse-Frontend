import React, { useState } from 'react';

const RegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState('');

  const handleTest = (e) => {
    e.preventDefault();
    try {
      const regex = new RegExp(pattern, flags);
      const result = testString.match(regex);
      setMatches(result);
      setError('');
    } catch (err) {
      setError('Invalid regex: ' + err.message);
      setMatches(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Regex Tester</h1>
          <p className="text-red-600">Test your regular expressions with real-time feedback</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden">
          {/* Form Section */}
          <div className="p-8 bg-[#f1faee]">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pattern Input */}
                <div className="space-y-2">
                  <label className="text-Black-100  font-semibold text-sm uppercase tracking-wide">
                    Pattern :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter regex pattern..."
                    value={pattern}
                    onChange={e => setPattern(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-400 focus:bg-white focus:outline-none transition-all duration-300 font-mono"
                  />
                </div>

                {/* Flags Input */}
                <div className="space-y-2">
                  <label className="text-Black-100 font-semibold text-sm uppercase tracking-wide">
                    Flags :
                  </label>
                  <input
                    type="text"
                    placeholder="g, i, m, s, u, y..."
                    value={flags}
                    onChange={e => setFlags(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-400 focus:bg-white focus:outline-none transition-all duration-300 font-mono"
                  />
                </div>
              </div>

              {/* Test String Input */}
              <div className="space-y-2">
                <label className="text-Black-100  font-semibold text-sm uppercase tracking-wide">
                  Test String :
                </label>
                <textarea
                  placeholder="Enter text to test against your regex..."
                  value={testString}
                  onChange={e => setTestString(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-400 focus:bg-white focus:outline-none transition-all duration-300 resize-none font-mono"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleTest}
                  className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                >
                  Test Regex
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50">
            {error && (
              <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 rounded-r-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-red-800 font-semibold">Error</p>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {matches && (
              <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
                  <h3 className="text-white font-bold text-lg flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Matches Found
                  </h3>
                </div>
                <div className="p-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <pre className="text-red-900 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                      {JSON.stringify(matches, null, 2)}
                    </pre>
                  </div>
                  {matches.length > 0 && (
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-red-600 font-medium">
                        {matches.length} match{matches.length !== 1 ? 'es' : ''} found
                      </span>
                      <div className="flex space-x-2">
                        {matches.map((match, index) => (
                          <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            {match}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {!matches && !error && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-red-600 font-medium">Enter a pattern and test string to see results</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-red-600 text-sm">
          <p>Built with React • Test your regex patterns with confidence</p>
        </div>
      </div>
    </div>
  );
};

export default RegexTester;