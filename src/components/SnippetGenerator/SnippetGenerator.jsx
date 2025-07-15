import React, { useState } from 'react';
import { Code, Sparkles, Copy, RefreshCw, Zap, Terminal, FileCode, Loader2, CheckCircle2 } from 'lucide-react';

const SnippetGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCode('');
    try {
      const res = await fetch('https://devverse-backend-r5ym.onrender.com/api/snippet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, language }),
      });
      const data = await res.json();
      setCode(data.code || data.msg || JSON.stringify(data));
    } catch (err) {
      setCode('Error: ' + err.message);
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setPrompt('');
    setCode('');
    setLanguage('JavaScript');
    setCopied(false);
  };

  const languages = [
    { value: 'JavaScript', icon: '🟨', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'TypeScript', icon: '🔷', color: 'bg-blue-100 text-blue-800' },
    { value: 'Python', icon: '🐍', color: 'bg-green-100 text-green-800' },
    { value: 'Java', icon: '☕', color: 'bg-orange-100 text-orange-800' },
    { value: 'C++', icon: '⚡', color: 'bg-purple-100 text-purple-800' },
    { value: 'Go', icon: '🚀', color: 'bg-cyan-100 text-cyan-800' }
  ];

  const selectedLang = languages.find(lang => lang.value === language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">AI Code Snippet Generator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by Gemini AI - Generate high-quality code snippets in multiple programming languages
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-red-100 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <label htmlFor="prompt" className="block text-lg font-semibold text-gray-700 mb-3">
                What code do you need?
              </label>
              <div className="relative">
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder="Describe the code you want to generate... (e.g., 'Create a function to validate email addresses')"
                  rows={4}
                  className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none text-gray-700 text-lg resize-none"
                />
                <Terminal className="absolute left-5 top-5 w-6 h-6 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="language" className="block text-lg font-semibold text-gray-700 mb-3">
                Programming Language
              </label>
              <div className="relative">
                <select
                  id="language"
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-20 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none text-gray-700 text-lg appearance-none cursor-pointer bg-white hover:bg-gray-50"
                >
                  {languages.map(lang => (
                    <option key={lang.value} value={lang.value}>
                      {lang.icon} {lang.value}
                    </option>
                  ))}
                </select>
                <FileCode className="absolute left-5 top-5 w-6 h-6 text-gray-400" />
                
                {/* Custom dropdown arrow */}
                <div className="absolute right-5 top-5 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Language badge - positioned to not interfere with dropdown */}
                <div className="absolute right-16 top-3 pointer-events-none">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${selectedLang?.color}`}>
                    {selectedLang?.icon}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-3 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-6 h-6" />
                    <span>Generate Code</span>
                  </>
                )}
              </button>
              
              {(code || prompt) && (
                <button
                  onClick={handleReset}
                  className="px-8 py-4 bg-orange-50 hover:bg-orange-100 text-red-600 font-semibold rounded-xl border-2 border-red-200 hover:border-red-300 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 text-lg"
                >
                  <RefreshCw className="w-6 h-6" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-red-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <div className="relative">
                <Loader2 className="w-12 h-12 animate-spin text-red-500" />
                <Sparkles className="w-6 h-6 text-yellow-500 absolute top-0 right-0 animate-pulse" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-800">Generating your code...</p>
                <p className="text-lg text-gray-600">AI is crafting the perfect snippet for you</p>
              </div>
            </div>
          </div>
        )}

        {/* Code Output */}
        {code && (
          <div className="bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Code className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Generated Code</span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedLang?.color}`}>
                  {selectedLang?.icon} {language}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-8">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {code}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnippetGenerator;