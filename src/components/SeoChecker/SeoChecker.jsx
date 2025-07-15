import React, { useState } from 'react';
import { Search, TrendingUp, Shield, Zap, Eye, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export default function SeoChecker() {
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setReport(null);
    try {
      const res = await fetch('https://devverse-backend-r5ym.onrender.com/api/seo/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (res.ok) setReport(data);
      else setError(data.error || 'Unknown error');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-500';
  };

  const getScoreIcon = (score) => {
    if (score >= 90) return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (score >= 70) return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    return <AlertCircle className="w-5 h-5 text-red-500" />;
  };

  const scoreCards = [
    { key: 'seo', label: 'SEO Score', icon: <Search className="w-6 h-6" /> },
    { key: 'performance', label: 'Performance', icon: <Zap className="w-6 h-6" /> },
    { key: 'accessibility', label: 'Accessibility', icon: <Eye className="w-6 h-6" /> },
    { key: 'best-practices', label: 'Best Practices', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6 shadow-2xl">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">SEO & Performance Checker</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Analyze your website's SEO, performance, and accessibility instantly with our comprehensive audit tool</p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-red-100 max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <label htmlFor="url" className="block text-lg font-semibold text-gray-700 mb-3">
                Website URL
              </label>
              <div className="relative">
                <input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && url && !loading) {
                      handleCheck(e);
                    }
                  }}
                  className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none text-gray-700 text-lg"
                />
                <Search className="absolute left-5 top-5 w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handleCheck}
                disabled={loading || !url}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-3 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-6 h-6" />
                    <span>Check Website</span>
                  </>
                )}
              </button>
              
              {(report || error) && (
                <button
                  onClick={() => {
                    setUrl('');
                    setReport(null);
                    setError('');
                  }}
                  className="px-8 py-4 bg-orange-50 hover:bg-orange-100 text-red-600 font-semibold rounded-xl border-2 border-red-200 hover:border-red-300 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 text-lg"
                >
                  <Search className="w-6 h-6" />
                  <span>Try Another</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-red-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <Loader2 className="w-12 h-12 animate-spin text-red-500" />
              <div>
                <p className="text-2xl font-semibold text-gray-800">Analyzing your website...</p>
                <p className="text-lg text-gray-600">This may take a few moments</p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center space-x-4">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold text-red-800">Error</h3>
                <p className="text-lg text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {report && (
          <div className="space-y-8">
            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {scoreCards.map((card) => {
                const score = Math.round(report.lighthouseResult.categories[card.key].score * 100);
                return (
                  <div
                    key={card.key}
                    className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-red-500 p-3 bg-red-50 rounded-xl">{card.icon}</div>
                      {getScoreIcon(score)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">{card.label}</h3>
                    <div className="flex items-end space-x-2">
                      <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
                        {score}
                      </span>
                      <span className="text-gray-500 text-lg mb-1">/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                      <div
                        className={`h-3 rounded-full transition-all duration-700 ${
                          score >= 90 ? 'bg-green-500' :
                          score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Raw Data */}
            <div className="bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden">
              <details className="group">
                <summary className="px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800">Raw Lighthouse JSON Data</span>
                  <div className="transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8 border-t border-gray-100">
                  <pre className="bg-gray-50 p-6 rounded-xl text-sm text-gray-700 overflow-auto max-h-96 mt-6 border">
                    {JSON.stringify(report, null, 2)}
                  </pre>
                </div>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}