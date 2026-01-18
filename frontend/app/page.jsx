// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import LayoutWrapper from "./components/LayoutWrapper";

// import { Upload, FileText, Sparkles, Shield, Clock, CheckCircle, Zap, Lock, Users, ChevronRight, X, BookOpen, Highlighter, MessageSquare, Copy, Download } from "lucide-react";


// export default function LandingPage() {
//   const router = useRouter();
//   // const [uploadedText, setUploadedText] = useState("");
//   const [text, setText] = useState("");  // For textarea
//   const [file, setFile] = useState(null); // For file upload
//   const [isProcessing, setIsProcessing] = useState(false); // For loading state
//   // const [uploadedFile, setUploadedFile] = useState(null);

//   const handleSubmit = async () => {
//     if (!text && !file) {
//       alert("Please paste text or upload a PDF.");
//       return;
//     }

//     setIsProcessing(true);

//     //process doc here
//     //pass data to the document page
//     setTimeout(() => {
//       setIsProcessing(false);
//       // Navigate to document page with the uploaded data
//       router.push("/document");
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//       <LayoutWrapper>

//       <main className="container mx-auto px-6 py-12">
//         {/* Hero Section */}
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 bg-amber-100 text-brown-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Zap className="w-4 h-4" />
//               Trusted by 500+ legal professionals
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               Legal Documents
//               <span className="block text-maroon-700">Made Simple</span>
//             </h1>
//             <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
//               Transform complex legal jargon into clear, actionable insights with our AI-powered summarization tool. 
//               Save hours of reading time instantly.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start">
            
//             {/* Left: Upload Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-100">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-3 bg-gradient-to-br from-maroon-50 to-amber-50 rounded-xl">
//                   <FileText className="w-7 h-7 text-maroon-700" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Upload & Summarize
//                   </h2>
//                   <p className="text-brown-600">Get started in seconds</p>
//                 </div>
//               </div>

//               <div className="space-y-8">
//                 {/* Text Area */}
//                 <div>
//                   <label className="block text-lg font-semibold text-brown-800 mb-3">
//                     Paste Legal Text
//                   </label>
//                   <textarea
//                     placeholder="Paste contracts, terms of service, legal agreements, or any complex legal text here..."
//                     className="w-full h-56 p-5 border-2 border-amber-200 rounded-2xl focus:ring-3 focus:ring-maroon-300 focus:border-maroon-400 resize-none transition-all bg-amber-50/50"
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                   />
//                   <p className="text-sm text-brown-500 mt-2">
//                     Minimum 100 characters for accurate analysis
//                   </p>
//                 </div>

//                 {/* File Upload */}
//                 <div className="border-3 border-dashed border-amber-300 rounded-2xl p-10 text-center bg-gradient-to-b from-amber-50/30 to-transparent hover:border-maroon-400 transition-colors">
//                   <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-maroon-100 to-amber-100 rounded-2xl flex items-center justify-center">
//                     <Upload className="w-10 h-10 text-maroon-700" />
//                   </div>
//                   <label className="cursor-pointer">
//                     <input
//                       type="file"
//                       accept=".pdf,.doc,.docx,.txt"
//                       className="hidden"
//                       onChange={(e) => setFile(e.target.files[0])}
//                     />
//                     <div className="space-y-2">
//                       <div className="text-xl font-semibold text-brown-800">
//                         <span className="text-maroon-700">Browse files</span> or drag & drop
//                       </div>
//                       <div className="text-brown-600">
//                         Supports PDF, DOC, DOCX, TXT (up to 25MB)
//                       </div>
//                     </div>
//                   </label>
//                   {file && (
//                     <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 flex items-center gap-4">
//                       <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
//                       <div className="flex-1">
//                         <div className="font-semibold text-green-800">{file.name}</div>
//                         <div className="text-sm text-green-700">Ready for processing</div>
//                       </div>
//                       <button 
//                         onClick={() => setFile(null)}
//                         className="text-brown-500 hover:text-brown-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Process Button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isProcessing || (!text && !file)}
//                   className={`w-full py-5 px-6 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-4 shadow-xl ${
//                     isProcessing || (!text && !file)
//                       ? 'bg-brown-300 cursor-not-allowed' 
//                       : 'bg-gradient-to-r from-maroon-700 via-maroon-600 to-brown-800 hover:from-maroon-800 hover:via-maroon-700 hover:to-brown-900 transform hover:-translate-y-1 hover:shadow-2xl'
//                   }`}
//                 >
//                   {isProcessing ? (
//                     <>
//                       <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
//                       <span className="text-white">Processing Document...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Sparkles className="w-6 h-6" />
//                       <span className="text-white">Generate AI Summary</span>
//                       <ChevronRight className="w-5 h-5" />
//                     </>
//                   )}
//                 </button>

//                 <div className="flex items-center justify-center gap-6 text-sm text-brown-600">
//                   <div className="flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     <span>Bank-level security</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4" />
//                     <span>30-second processing</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-4 h-4" />
//                     <span>100% confidential</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Features & Benefits */}
//             <div className="space-y-8">
//               {/* Benefits Card */}
//               <div className="bg-gradient-to-br from-maroon-50 to-amber-50 rounded-2xl p-8 border border-maroon-100">
//                 <h3 className="text-2xl font-bold text-brown-900 mb-6">
//                   Why Choose LegalEase?
//                 </h3>
//                 <div className="space-y-6">
//                   {[
//                     { icon: Zap, title: "Lightning Fast", desc: "Summarize 50-page documents in under 30 seconds" },
//                     // { icon: Shield, title: "Military-Grade Security", desc: "End-to-end encryption with automatic file deletion" },
//                     { icon: Sparkles, title: "AI-Powered Accuracy", desc: "95% accuracy rate on complex legal terminology" },
//                     { icon: Users, title: "Team Collaboration", desc: "Share summaries with colleagues securely" },
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-4">
//                       <div className="p-3 bg-white rounded-xl shadow-sm">
//                         <feature.icon className="w-6 h-6 text-maroon-700" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-brown-800 text-lg">{feature.title}</h4>
//                         <p className="text-brown-600">{feature.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Use Cases */}
//               <div className="bg-white rounded-2xl p-8 border border-amber-100 shadow-lg">
//                 <h3 className="text-2xl font-bold text-brown-900 mb-6">
//                   Perfect For
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     "Law Firms", "Legal Students", "Startups", "HR Departments",
//                     "Real Estate", "Contract Review", "Compliance", "Personal Use"
//                   ].map((useCase, idx) => (
//                     <div 
//                       key={idx} 
//                       className="p-4 bg-amber-50 rounded-xl border border-amber-200 hover:border-maroon-300 transition-colors group"
//                     >
//                       <div className="font-semibold text-brown-800 group-hover:text-maroon-700 transition-colors">
//                         {useCase}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
//                   <div className="text-3xl font-bold text-maroon-700">10K+</div>
//                   <div className="text-brown-600 text-sm mt-1">Documents</div>
//                 </div>
//                 <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
//                   <div className="text-3xl font-bold text-maroon-700">98%</div>
//                   <div className="text-brown-600 text-sm mt-1">Satisfaction</div>
//                 </div>
//                 <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
//                   <div className="text-3xl font-bold text-maroon-700">4.9★</div>
//                   <div className="text-brown-600 text-sm mt-1">Rating</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-maroon-800 to-brown-900 text-white mt-20 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Simplify Your Legal Work?</h2>
//           <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-10">
//             Join thousands of legal professionals who save hours every week with LegalEase.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             {/* <button className="px-8 py-4 bg-white text-brown-900 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow-2xl">
//               Start Free Trial
//             </button>*/}
//             <button className="px-8 py-4 bg-transparent border-2 border-amber-300 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
//               Try Now!
//             </button>
          
            

//           </div>
//         </div>
//       </div>

//       </LayoutWrapper>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LayoutWrapper from "./components/LayoutWrapper";

import { Upload, FileText, Sparkles, Shield, Clock, CheckCircle, Zap, Lock, Users, ChevronRight, X, BookOpen, Highlighter, MessageSquare, Copy, Download } from "lucide-react";

const API_BASE_URL = "http://127.0.0.1:8000";

export default function LandingPage() {
  const router = useRouter();
  const [text, setText] = useState("");  
  const [file, setFile] = useState(null); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!text && !file) {
      alert("Please paste text or upload a PDF.");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      let result;

      if (file) {
        // Upload file to backend
        const formData = new FormData();
        formData.append("file", file);
        formData.append("reading_level", "5th grade");

        const response = await fetch(`${API_BASE_URL}/analyze`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        result = await response.json();
      } else {
        // Send text to backend
        const response = await fetch(`${API_BASE_URL}/analyze-text`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
            reading_level: "5th grade",
          }),
        });

        if (!response.ok) {
          throw new Error(`Analysis failed: ${response.statusText}`);
        }

        result = await response.json();
      }

      // Store result in sessionStorage to access on document page
      sessionStorage.setItem("analysisResult", JSON.stringify(result));

      // Navigate to document page
      router.push("/document");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Failed to process document. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <LayoutWrapper>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-brown-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Trusted by 500+ legal professionals
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Legal Documents
              <span className="block text-maroon-700">Made Simple</span>
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              Transform complex legal jargon into clear, actionable insights with our AI-powered summarization tool. 
              Save hours of reading time instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Upload Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-maroon-50 to-amber-50 rounded-xl">
                  <FileText className="w-7 h-7 text-maroon-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Upload & Summarize
                  </h2>
                  <p className="text-brown-600">Get started in seconds</p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-700 font-medium">{error}</p>
                  <p className="text-sm text-red-600 mt-1">
                    Make sure your backend is running: <code className="bg-red-100 px-2 py-1 rounded">uvicorn main:app --reload</code>
                  </p>
                </div>
              )}

              <div className="space-y-8">
                {/* Text Area */}
                <div>
                  <label className="block text-lg font-semibold text-brown-800 mb-3">
                    Paste Legal Text
                  </label>
                  <textarea
                    placeholder="Paste contracts, terms of service, legal agreements, or any complex legal text here..."
                    className="w-full h-56 p-5 border-2 border-amber-200 rounded-2xl focus:ring-3 focus:ring-maroon-300 focus:border-maroon-400 resize-none transition-all bg-amber-50/50"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <p className="text-sm text-brown-500 mt-2">
                    Minimum 100 characters for accurate analysis
                  </p>
                </div>

                {/* File Upload */}
                <div className="border-3 border-dashed border-amber-300 rounded-2xl p-10 text-center bg-gradient-to-b from-amber-50/30 to-transparent hover:border-maroon-400 transition-colors">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-maroon-100 to-amber-100 rounded-2xl flex items-center justify-center">
                    <Upload className="w-10 h-10 text-maroon-700" />
                  </div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-brown-800">
                        <span className="text-maroon-700">Browse files</span> or drag & drop
                      </div>
                      <div className="text-brown-600">
                        Supports PDF, DOC, DOCX, TXT (up to 25MB)
                      </div>
                    </div>
                  </label>
                  {file && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold text-green-800">{file.name}</div>
                        <div className="text-sm text-green-700">Ready for processing</div>
                      </div>
                      <button 
                        onClick={() => setFile(null)}
                        className="text-brown-500 hover:text-brown-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Process Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing || (!text && !file)}
                  className={`w-full py-5 px-6 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-4 shadow-xl ${
                    isProcessing || (!text && !file)
                      ? 'bg-brown-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-maroon-700 via-maroon-600 to-brown-800 hover:from-maroon-800 hover:via-maroon-700 hover:to-brown-900 transform hover:-translate-y-1 hover:shadow-2xl'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-white">Processing Document...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      <span className="text-white">Generate AI Summary</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-6 text-sm text-brown-600">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Bank-level security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>30-second processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>100% confidential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features & Benefits */}
            <div className="space-y-8">
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-maroon-50 to-amber-50 rounded-2xl p-8 border border-maroon-100">
                <h3 className="text-2xl font-bold text-brown-900 mb-6">
                  Why Choose LegalEase?
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Lightning Fast", desc: "Summarize 50-page documents in under 30 seconds" },
                    { icon: Sparkles, title: "AI-Powered Accuracy", desc: "95% accuracy rate on complex legal terminology" },
                    { icon: Users, title: "Team Collaboration", desc: "Share summaries with colleagues securely" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <feature.icon className="w-6 h-6 text-maroon-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brown-800 text-lg">{feature.title}</h4>
                        <p className="text-brown-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 border border-amber-100 shadow-lg">
                <h3 className="text-2xl font-bold text-brown-900 mb-6">
                  Perfect For
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Law Firms", "Legal Students", "Startups", "HR Departments",
                    "Real Estate", "Contract Review", "Compliance", "Personal Use"
                  ].map((useCase, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 bg-amber-50 rounded-xl border border-amber-200 hover:border-maroon-300 transition-colors group"
                    >
                      <div className="font-semibold text-brown-800 group-hover:text-maroon-700 transition-colors">
                        {useCase}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
                  <div className="text-3xl font-bold text-maroon-700">10K+</div>
                  <div className="text-brown-600 text-sm mt-1">Documents</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
                  <div className="text-3xl font-bold text-maroon-700">98%</div>
                  <div className="text-brown-600 text-sm mt-1">Satisfaction</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm">
                  <div className="text-3xl font-bold text-maroon-700">4.9★</div>
                  <div className="text-brown-600 text-sm mt-1">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-maroon-800 to-brown-900 text-white mt-20 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Simplify Your Legal Work?</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-10">
            Join thousands of legal professionals who save hours every week with LegalEase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-transparent border-2 border-amber-300 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Try Now!
            </button>
          </div>
        </div>
      </div>

      </LayoutWrapper>
    </div>
  );
}