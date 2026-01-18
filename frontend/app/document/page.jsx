// // "use client";

// // // import LayoutWrapper from "@/app/components/LayoutWrapper";
// // import LayoutWrapper from "../components/LayoutWrapper";
// // import { BookOpen } from "lucide-react";

// // export default function DocumentPage() {
// //   return (
// //     <LayoutWrapper showBackButton={true}>
// //       <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
// //         <main className="container mx-auto px-6 py-12">
// //           <div className="max-w-6xl mx-auto">
// //             <div className="flex items-center gap-3 mb-8">
// //               <BookOpen className="w-8 h-8 text-maroon-700" />
// //               <h1 className="text-3xl font-bold text-gray-900">Document Analysis</h1>
// //             </div>
            
// //             <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Summary</h2>
// //               <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
// //                 <p className="text-brown-700">
// //                   This is where your AI-generated document summary will appear.
// //                   In a real application, this would show the analyzed document content.
// //                 </p>
// //               </div>
              
// //               <div className="mt-8">
// //                 <h3 className="text-xl font-semibold text-brown-800 mb-4">Uploaded Content:</h3>
// //                 <div className="p-4 bg-gray-50 rounded-lg">
// //                   <p className="text-gray-600">
// //                     The text from your upload would appear here for review.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </LayoutWrapper>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import LayoutWrapper from "../components/LayoutWrapper";
// import { BookOpen, AlertTriangle, FileText, Copy } from "lucide-react";

// export default function DocumentPage() {
//   const router = useRouter();
//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Get analysis result from sessionStorage
//     const storedData = sessionStorage.getItem("analysisResult");
    
//     if (storedData) {
//       setAnalysisData(JSON.parse(storedData));
//     } else {
//       // No data, redirect back to home
//       router.push("/");
//     }
    
//     setLoading(false);
//   }, [router]);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied to clipboard!");
//   };

//   if (loading) {
//     return (
//       <LayoutWrapper showBackButton={true}>
//         <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
//           <div className="text-center">
//             <div className="w-16 h-16 border-4 border-maroon-700 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
//             <p className="text-brown-700 text-lg">Loading analysis...</p>
//           </div>
//         </div>
//       </LayoutWrapper>
//     );
//   }

//   if (!analysisData) {
//     return null;
//   }

//   const getSeverityColor = (severity) => {
//     switch (severity?.toLowerCase()) {
//       case "high":
//         return "bg-red-50 border-red-300 text-red-800";
//       case "medium":
//         return "bg-yellow-50 border-yellow-300 text-yellow-800";
//       case "low":
//         return "bg-blue-50 border-blue-300 text-blue-800";
//       default:
//         return "bg-gray-50 border-gray-300 text-gray-800";
//     }
//   };

//   return (
//     <LayoutWrapper showBackButton={true}>
//       <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//         <main className="container mx-auto px-6 py-12">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-8">
//               <BookOpen className="w-8 h-8 text-maroon-700" />
//               <h1 className="text-3xl font-bold text-gray-900">Document Analysis</h1>
//             </div>

//             <div className="space-y-6">
//               {/* Summary Section */}
//               <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-2xl font-bold text-gray-900">📄 AI Summary</h2>
//                   <button
//                     onClick={() => copyToClipboard(analysisData.summary)}
//                     className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
//                   >
//                     <Copy className="w-4 h-4" />
//                     <span className="text-sm font-medium">Copy</span>
//                   </button>
//                 </div>
//                 <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
//                   <p className="text-brown-700 text-lg leading-relaxed">
//                     {analysisData.summary}
//                   </p>
//                 </div>
//               </div>

//               {/* Simplified Text */}
//               <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-2xl font-bold text-gray-900">✨ Simplified Version</h2>
//                   <button
//                     onClick={() => copyToClipboard(analysisData.simplified_text)}
//                     className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
//                   >
//                     <Copy className="w-4 h-4" />
//                     <span className="text-sm font-medium">Copy</span>
//                   </button>
//                 </div>
//                 <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
//                   <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
//                     {analysisData.simplified_text}
//                   </p>
//                 </div>
//                 <div className="mt-4 flex items-center gap-6 text-sm text-brown-600">
//                   <span>Original: {analysisData.original_length} characters</span>
//                   <span>Simplified: {analysisData.simplified_length} characters</span>
//                   <span className="font-semibold text-maroon-700">
//                     Reading Level: {analysisData.reading_level || "5th grade"}
//                   </span>
//                 </div>
//               </div>

//               {/* Red Flags Section */}
//               {analysisData.red_flags && analysisData.red_flags.length > 0 && (
//                 <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
//                   <div className="flex items-center gap-3 mb-6">
//                     <AlertTriangle className="w-7 h-7 text-red-600" />
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       🚩 Red Flags Detected ({analysisData.red_flags.length})
//                     </h2>
//                   </div>
//                   <div className="space-y-4">
//                     {analysisData.red_flags.map((flag, index) => (
//                       <div
//                         key={index}
//                         className={`p-5 rounded-xl border-2 ${getSeverityColor(flag.severity)}`}
//                       >
//                         <div className="flex items-start justify-between gap-4 mb-2">
//                           <span className="font-bold text-sm uppercase tracking-wide">
//                             {flag.severity} Risk
//                           </span>
//                         </div>
//                         <div className="mb-3 p-3 bg-white/50 rounded-lg">
//                           <p className="font-semibold text-gray-900 italic">
//                             "{flag.clause}"
//                           </p>
//                         </div>
//                         <p className="text-sm leading-relaxed">
//                           <span className="font-semibold">Concern:</span> {flag.concern}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Original Text */}
//               {analysisData.original_text && (
//                 <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
//                   <h3 className="text-xl font-semibold text-brown-800 mb-4 flex items-center gap-2">
//                     <FileText className="w-5 h-5" />
//                     Original Document
//                   </h3>
//                   <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 max-h-96 overflow-y-auto">
//                     <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-mono">
//                       {analysisData.original_text}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Action Buttons */}
//               <div className="flex gap-4 justify-center">
//                 <button
//                   onClick={() => router.push("/")}
//                   className="px-8 py-4 bg-gradient-to-r from-maroon-700 to-brown-800 text-white font-bold rounded-xl hover:from-maroon-800 hover:to-brown-900 transition-all shadow-lg"
//                 >
//                   Analyze Another Document
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </LayoutWrapper>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import LayoutWrapper from "../components/LayoutWrapper";
import { BookOpen, Highlighter, Sparkles, FileText, MessageSquare, Copy, Download, X, Zap, Shield, Users, ChevronRight } from "lucide-react";

const API_BASE_URL = "http://127.0.0.1:8000";

export default function DocumentPage() {
  const router = useRouter();
  
  // Get real data from API or use demo data
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [documentText, setDocumentText] = useState("");
  const [summaryText, setSummaryText] = useState("");

  // State for text highlighting and AI explanation
  const [highlightedText, setHighlightedText] = useState("");
  const [showExplainButton, setShowExplainButton] = useState(false);
  const [explainPosition, setExplainPosition] = useState({ x: 0, y: 0 });
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [selectedTextRange, setSelectedTextRange] = useState(null);
  const textContainerRef = useRef(null);

  // Load analysis data from sessionStorage
  useEffect(() => {
    const storedData = sessionStorage.getItem("analysisResult");
    
    if (storedData) {
      const data = JSON.parse(storedData);
      setAnalysisData(data);
      setDocumentText(data.original_text || "");
      
      // Format summary with AI analysis
      const formattedSummary = `AI-GENERATED SUMMARY:\n\n${data.summary}\n\n` +
        `SIMPLIFIED VERSION:\n${data.simplified_text}\n\n` +
        `RED FLAGS DETECTED: ${data.red_flags?.length || 0}\n` +
        (data.red_flags?.length > 0 ? data.red_flags.map((flag, i) => 
          `\n${i + 1}. [${flag.severity}] ${flag.clause}\n   Concern: ${flag.concern}`
        ).join('\n') : '');
      
      setSummaryText(formattedSummary);
    } else {
      // No data - redirect to home
      router.push("/");
    }
    
    setLoading(false);
  }, [router]);

  // Handle text selection
  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0 && selectedText.length < 200) {
      setHighlightedText(selectedText);
      
      if (selection.rangeCount > 0) {
        setSelectedTextRange(selection.getRangeAt(0));
      }
      
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setExplainPosition({
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.top + window.scrollY - 60
      });
      setShowExplainButton(true);
    } else {
      setShowExplainButton(false);
    }
  };

  // Handle AI explanation request - REAL API CALL
  const handleExplainText = async () => {
    if (!highlightedText) return;
    
    setIsExplaining(true);
    setShowExplainButton(false);
    
    try {
      const response = await fetch(`${API_BASE_URL}/explain`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: highlightedText,
          context: documentText.substring(
            Math.max(0, documentText.indexOf(highlightedText) - 200),
            Math.min(documentText.length, documentText.indexOf(highlightedText) + highlightedText.length + 200)
          )
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setExplanation(result.explanation);
      } else {
        setExplanation(`AI ANALYSIS OF: "${highlightedText}"\n\nUnable to generate explanation at this time. Please try again.`);
      }
    } catch (error) {
      console.error("Explanation error:", error);
      setExplanation(`AI ANALYSIS OF: "${highlightedText}"\n\nError connecting to AI service. Please ensure the backend is running.`);
    } finally {
      setIsExplaining(false);
      
      if (selectedTextRange) {
        window.getSelection().removeAllRanges();
        setSelectedTextRange(null);
      }
    }
  };

  // Close explain button when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.explain-button') && !e.target.closest('.document-text')) {
        setShowExplainButton(false);
        window.getSelection().removeAllRanges();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle copy and download
  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    alert("Summary copied to clipboard!");
  };

  const handleDownloadSummary = () => {
    const element = document.createElement("a");
    const file = new Blob([summaryText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "legal-ease-document-summary.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Loading state
  if (loading) {
    return (
      <LayoutWrapper showBackButton={true}>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-maroon-700 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-brown-700 text-lg">Loading your analysis...</p>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  if (!analysisData) {
    return null;
  }

  return (
    <LayoutWrapper showBackButton={true}>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-maroon-700" />
                    AI Document Analysis
                  </h1>
                  <p className="text-brown-600 mt-2">
                    Highlight any text to get instant AI explanations. 
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleCopySummary}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 text-brown-700 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Summary
                  </button>
                  <button
                    onClick={handleDownloadSummary}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-maroon-600 to-brown-700 text-white rounded-lg hover:from-maroon-700 hover:to-brown-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Highlighter className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <span className="font-semibold">Interactive Analysis:</span> Select any text in the document below to get an AI-powered explanation. The AI will analyze the legal terminology and provide context.
                  </div>
                </div>
              </div>
            </div>

            {/* CHANGED HERE: Changed from lg:grid-cols-3 to lg:grid-cols-2 for 50/50 split */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Document Text (50% width) */}
              <div className="flex flex-col">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 relative flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-maroon-700" />
                      Your Legal Document
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-brown-600">
                      <Highlighter className="w-4 h-4" />
                      <span>Select text for AI explanation</span>
                    </div>
                  </div>

                  <div 
                    ref={textContainerRef}
                    onMouseUp={handleTextSelection}
                    className="document-text p-8 bg-amber-50/30 rounded-xl border-2 border-amber-300 h-[calc(100vh-300px)] min-h-[600px] overflow-y-auto text-gray-900 cursor-text selection:bg-maroon-300 selection:text-white"
                  >
                    <div className="whitespace-pre-wrap font-sans text-base leading-relaxed space-y-4">
                      {documentText.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Explanation Button */}
                  {showExplainButton && (
                    <button
                      onClick={handleExplainText}
                      className="explain-button fixed z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-maroon-600 to-purple-700 text-white rounded-lg shadow-2xl hover:from-maroon-700 hover:to-purple-800 transition-all transform hover:scale-105 animate-pulse border-2 border-white"
                      style={{
                        left: `${explainPosition.x}px`,
                        top: `${explainPosition.y}px`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {isExplaining ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Explain This Text
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* AI Summary & Explanation Sidebar (50% width) */}
              <div className="flex flex-col space-y-8">
                {/* AI Summary */}
                <div className="bg-gradient-to-b from-maroon-50 to-white rounded-2xl p-6 border border-maroon-100 shadow-lg flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow">
                      <Sparkles className="w-6 h-6 text-maroon-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">AI Summary</h3>
                      <p className="text-sm text-brown-600">Key analysis of your document</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 h-[calc(100%-80px)]">
                    <div className="p-4 bg-white rounded-xl border border-amber-200 h-[calc(100%-100px)] overflow-y-auto">
                      <div className="text-brown-800 text-sm leading-relaxed space-y-3">
                        <p className="font-semibold text-maroon-700">{analysisData.summary}</p>
                        
                        {analysisData.red_flags && analysisData.red_flags.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-amber-200">
                            <p className="font-semibold text-red-700 mb-2">🚩 Red Flags Detected:</p>
                            {analysisData.red_flags.map((flag, i) => (
                              <div key={i} className="mb-2 text-xs">
                                <span className="font-medium">[{flag.severity}]</span> {flag.clause.substring(0, 50)}...
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">{analysisData.original_length}</div>
                        <div className="text-xs text-brown-600">Original</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">{analysisData.red_flags?.length || 0}</div>
                        <div className="text-xs text-brown-600">Red Flags</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">{analysisData.simplified_length}</div>
                        <div className="text-xs text-brown-600">Simplified</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Explanation Panel */}
                <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-lg flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow">
                      <MessageSquare className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">AI Explanation</h3>
                      <p className="text-sm text-blue-600">For highlighted text</p>
                    </div>
                  </div>
                  
                  {explanation ? (
                    <div className="p-4 bg-white rounded-xl border border-blue-200 h-[calc(100%-80px)] overflow-y-auto">
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-sm text-blue-800 font-medium mb-1">You asked about:</div>
                        <div className="text-blue-900 font-semibold text-base">"{highlightedText}"</div>
                      </div>
                      
                      <div className="text-gray-800 whitespace-pre-wrap text-sm leading-relaxed space-y-3">
                        {explanation.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-blue-100">
                        <div className="text-xs text-blue-600">
                          <span className="font-medium">Disclaimer:</span> This AI explanation is for informational purposes only and does not constitute legal advice.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center h-[calc(100%-80px)] flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                        <Highlighter className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Highlight Text to Begin</h4>
                      <p className="text-brown-600 text-sm">
                        Select any text in the document to get an instant AI-powered explanation.
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Tips & Back Button */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">How to Use</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-brown-800">Select text</div>
                          <div className="text-sm text-brown-600">Drag your cursor over any legal term</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-brown-800">Get AI explanation</div>
                          <div className="text-sm text-brown-600">Click "Explain" button that appears</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-brown-800">View results</div>
                          <div className="text-sm text-brown-600">See explanation in the sidebar</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white font-semibold rounded-xl hover:from-maroon-800 hover:to-brown-900 transition-all shadow-lg"
                  >
                    Analyze Another Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}