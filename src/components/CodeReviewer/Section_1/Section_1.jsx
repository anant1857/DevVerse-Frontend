import React, { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

const Section_1 = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const [reviewData, setReviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleReview = async () => {
    setLoading(true);
    setReviewData(null);
    setErrorMsg("");

    try {
      const response = await axios.post("https://devguardian-backend.onrender.com/api/review", {
        code,
        language,
      });

      setReviewData(response.data);
    } catch (error) {
      console.error(error);
      setErrorMsg("An error occurred while reviewing your code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#232323] text-white p-4">
      <h1 className="text-3xl font-bold text-[#d16439] mb-4 text-center">
      DevVerse Code Reviewer
      </h1>

      {/* Language Selector */}
      <div className="flex justify-center mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1e1e1e] border border-[#d16439] text-white p-2 rounded-lg"
        >
          <option value="javascript">JavaScript</option>
          <option value="jsx">JSX</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      {/* Editors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input Editor */}
        <div className="bg-[#1e1e1e] p-2 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold text-[#d16439] mb-2">Your Code</h2>
          <Editor
            height="60vh"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
          />
        </div>

        {/* Review Section */}
        <div className="bg-[#1e1e1e] p-4 rounded-2xl shadow-lg overflow-y-auto max-h-[70vh] custom-scrollbar">
          {loading ? (
            <p className="text-[#d16439]">Reviewing your code...</p>
          ) : errorMsg ? (
            <p className="text-red-400">{errorMsg}</p>
          ) : reviewData ? (
            <div className="space-y-4">
              <div>
                <p className="text-[#d16439] font-semibold">Rating:</p>
                <p>{reviewData.rating}</p>
              </div>

              <div>
                <p className="text-[#d16439] font-semibold">Suggestions:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {reviewData.suggestions?.map((sug, index) => (
                    <li key={index}>{sug}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[#d16439] font-semibold">Improved Code:</p>
                <Editor
                  height="30vh"
                  language={language}
                  theme="vs-dark"
                  value={reviewData.improvedCode}
                  options={{ readOnly: true }}
                />
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Submit code to get review</p>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleReview}
          className="bg-[#d16439] hover:bg-[#b44f2e] text-white px-6 py-2 rounded-2xl shadow-lg transition duration-300"
        >
          Review Code
        </button>
      </div>
    </div>
  );
};

export default Section_1;
