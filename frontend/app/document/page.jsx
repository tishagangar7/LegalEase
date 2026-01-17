"use client";

import { useState, useRef, useEffect } from "react";
// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { BookOpen, Highlighter, Sparkles, FileText, MessageSquare, Copy, Download, X, Zap, Shield, Users, ChevronRight } from "lucide-react";

export default function DocumentPage() {
  // State for the document text DEMO TEST -- should be what the user uploaded or pasted in
  const [documentText] = useState(`CONFIDENTIALITY AGREEMENT

This Confidentiality Agreement (the "Agreement") is entered into as of [Effective Date] by and between:
[Company Name], a [State] corporation ("Disclosing Party"), and
[Recipient Name], an individual ("Receiving Party").

1. DEFINITION OF CONFIDENTIAL INFORMATION
For purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged. This includes, but is not limited to:
- Business plans and strategies
- Financial information and projections
- Customer lists and data
- Technical specifications and designs
- Marketing plans and research
- Trade secrets and proprietary information

2. OBLIGATIONS OF RECEIVING PARTY
Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential Information to employees, contractors, and third parties as is reasonably required and shall require those persons to sign nondisclosure restrictions at least as protective as those in this Agreement.

3. TIME PERIOD
The nondisclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party's duty to hold Confidential Information in confidence shall remain in effect until the Confidential Information no longer qualifies as a trade secret or until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this Agreement, whichever occurs first.

4. EXCEPTIONS TO CONFIDENTIALITY
Receiving Party shall have no obligation to maintain the confidentiality of information that:
(a) Was in the public domain at the time it was disclosed or has entered the public domain through no fault of Receiving Party;
(b) Was known to Receiving Party, without restriction, at the time of disclosure;
(c) Is disclosed with the prior written consent of Disclosing Party;
(d) Becomes known to Receiving Party, without restriction, from a source other than Disclosing Party without breach of this Agreement;
(e) Is independently developed by Receiving Party without use of the Confidential Information.

5. REMEDIES
The parties acknowledge and agree that due to the unique and sensitive nature of the Confidential Information, any breach of this Agreement would cause irreparable harm for which damages and other legal remedies would be inadequate. Consequently, the parties agree that, in addition to any other remedies available at law, the non-breaching party shall be entitled to seek immediate injunctive relief and other equitable remedies to prevent such breach.

6. GOVERNING LAW AND JURISDICTION
This Agreement shall be governed by and construed in accordance with the laws of the State of California without regard to its conflict of law principles. Any legal action or proceeding arising under this Agreement will be brought exclusively in the federal or state courts located in Santa Clara County, California, and the parties hereby consent to personal jurisdiction and venue therein.

7. MISCELLANEOUS
This Agreement represents the entire understanding between the parties concerning the subject matter herein and supersedes all prior discussions, agreements, and understandings. This Agreement may not be amended except in writing signed by both parties. If any provision of this Agreement is found to be unenforceable, the remainder shall be enforced as fully as possible.

IN WITNESS WHEREOF, the parties have executed this Confidentiality Agreement as of the Effective Date.

DISCLOSING PARTY:
______________________________
Name: 
Title: 
Date: 

RECEIVING PARTY:
______________________________
Name: 
Title: 
Date: `);

  // State for AI summary
  const [summaryText] = useState(`AI-GENERATED SUMMARY:

CONFIDENTIALITY AGREEMENT ANALYSIS
This is a standard Non-Disclosure Agreement (NDA) between two parties: a "Disclosing Party" sharing confidential information and a "Receiving Party" receiving it.

KEY PROVISIONS:

1. CONFIDENTIAL INFORMATION DEFINITION
   • Broad definition covering business, financial, technical, and customer information
   • Includes both existing information and potential future developments
   • Protected information must have commercial value

2. RECEIVING PARTY OBLIGATIONS
   • Must maintain strict confidentiality
   • Can only share with employees/contractors who need to know
   • Must require third parties to sign similar agreements

3. DURATION
   • Confidentiality survives agreement termination
   • Continues until information is no longer a trade secret
   • Or until written release from Disclosing Party

4. EXCEPTIONS (When confidentiality doesn't apply)
   • Information becomes public through no fault of Receiving Party
   • Already known to Receiving Party before disclosure
   • Independently developed without using confidential information
   • Received from another source without restriction

5. LEGAL PROTECTIONS
   • Injunctive relief available for breaches
   • California law applies
   • Santa Clara County, CA courts have jurisdiction

RISK ASSESSMENT: MEDIUM
This is a comprehensive but fairly standard NDA. The broad definition of confidential information could potentially cover too much. Consider narrowing if appropriate for your situation.

RECOMMENDATIONS:
1. Review the definition of "Confidential Information" to ensure it's not overly broad
2. Consider adding a "residuals" clause if appropriate
3. Verify the jurisdiction clause works for your situation
4. Ensure all exceptions to confidentiality are clearly understood`);

  // State for text highlighting and AI explanation
  const [highlightedText, setHighlightedText] = useState("");
  const [showExplainButton, setShowExplainButton] = useState(false);
  const [explainPosition, setExplainPosition] = useState({ x: 0, y: 0 });
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [selectedTextRange, setSelectedTextRange] = useState(null);
  const textContainerRef = useRef(null);

  // Handle text selection
  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0 && selectedText.length < 200) {
      setHighlightedText(selectedText);
      
      // Store the range for highlighting
      if (selection.rangeCount > 0) {
        setSelectedTextRange(selection.getRangeAt(0));
      }
      
      // Get position for button
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

  // Handle AI explanation request
  const handleExplainText = async () => {
    if (!highlightedText) return;
    
    setIsExplaining(true);
    setShowExplainButton(false);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // Mock AI explanations for common legal terms
      const explanations = {
        "Confidential Information": `"Confidential Information" refers to any information disclosed by one party to another that:
• Has commercial value
• Is not publicly known
• Would harm the disclosing party if revealed

LEGAL SIGNIFICANCE: This definition establishes what information is protected under the agreement. A broader definition gives more protection to the disclosing party.

COMMON TYPES:
- Trade secrets
- Business plans
- Customer lists
- Financial data
- Technical specifications

TIP: Review if the definition is appropriately narrow or broad for your needs.`,
        
        "trade secret": `"Trade Secret" refers to information that:
• Derives economic value from not being generally known
• Is subject to reasonable efforts to maintain secrecy

EXAMPLES:
- Coca-Cola's formula
- Google's search algorithm
- KFC's original recipe

LEGAL PROTECTION: Trade secrets are protected indefinitely as long as they remain secret (unlike patents which expire).

REQUIREMENTS TO QUALIFY:
1. Not generally known to the public
2. Has economic value because it's secret
3. Subject to reasonable secrecy measures`,
        
        "injunctive relief": `"Injunctive Relief" is a court order that either:
• Requires a party to do something (mandatory injunction)
• Prohibits a party from doing something (prohibitory injunction)

WHEN USED:
- To prevent irreparable harm
- When monetary damages are insufficient
- To maintain the status quo

COMMON IN NDAs: Used to stop unauthorized disclosure of confidential information immediately.

PROCESS: Can be granted quickly (temporary restraining order) or after hearing (preliminary injunction).`,
        
        "Governing Law": `"Governing Law" determines which state's laws will interpret the agreement.

IN THIS AGREEMENT: California law applies, specifically:
• California Civil Code
• California Uniform Trade Secrets Act
• California case law

IMPLICATIONS:
- Determines how courts interpret contract language
- Affects available remedies
- Influences statute of limitations

TIP: Choose a jurisdiction familiar with your type of business and agreements.`
      };
      
      // Find matching explanation or generate generic one
      let aiExplanation = explanations[highlightedText];
      
      if (!aiExplanation) {
        // Generate generic explanation for unmatched text
        aiExplanation = `AI ANALYSIS OF: "${highlightedText}"

CONTEXT: This appears to be standard legal terminology commonly found in contracts and agreements.

LIKELY MEANING: The text establishes rights, obligations, or definitions within the legal framework of the document.

COMMON USAGE IN LEGAL DOCUMENTS:
• Defines relationships between parties
• Establishes rules and procedures
• Allocates risks and responsibilities
• Creates enforceable obligations

RECOMMENDATION: Review this clause carefully with legal counsel to ensure you understand:
1. Your specific obligations
2. Potential liabilities
3. Duration of commitments
4. Any exceptions or limitations

NOTE: This AI explanation is for informational purposes only and not legal advice.`;
      }
      
      setExplanation(aiExplanation);
      setIsExplaining(false);
      
      // Clear the visual highlight
      if (selectedTextRange) {
        window.getSelection().removeAllRanges();
        setSelectedTextRange(null);
      }
    }, 1500);
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

  // Demo highlighting helper
  const demoHighlight = (text) => {
    const docText = documentText;
    const startIndex = docText.indexOf(text);
    
    if (startIndex !== -1) {
      const textNode = textContainerRef.current.querySelector('.document-text');
      const range = document.createRange();
      range.setStart(textNode.firstChild, startIndex);
      range.setEnd(textNode.firstChild, startIndex + text.length);
      
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      
      // Trigger the selection handler
      setTimeout(() => handleTextSelection(), 100);
    }
  };

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

              {/* Quick Demo Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="text-sm text-brown-600 font-medium">Try highlighting:</div>
                <button
                  onClick={() => demoHighlight("Confidential Information")}
                  className="px-3 py-1 bg-maroon-100 text-maroon-800 rounded-lg text-sm hover:bg-maroon-200 transition-colors"
                >
                  "Confidential Information"
                </button>
                <button
                  onClick={() => demoHighlight("trade secret")}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-sm hover:bg-amber-200 transition-colors"
                >
                  "trade secret"
                </button>
                <button
                  onClick={() => demoHighlight("injunctive relief")}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                >
                  "injunctive relief"
                </button>
                <button
                  onClick={() => demoHighlight("Governing Law")}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm hover:bg-green-200 transition-colors"
                >
                  "Governing Law"
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Document Text (2/3 width) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 relative">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-maroon-700" />
                      Legal Document
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-brown-600">
                      <Highlighter className="w-4 h-4" />
                      <span>Select text for AI explanation</span>
                    </div>
                  </div>

                  <div 
                    ref={textContainerRef}
                    onMouseUp={handleTextSelection}
                    className="document-text p-8 bg-white rounded-xl border-2 border-amber-300 min-h-[600px] overflow-y-auto text-gray-900 cursor-text selection:bg-maroon-300 selection:text-white"
>
                    <div className="whitespace-pre-wrap font-sans text-xl leading-10 tracking-wide space-y-6">
                      {documentText.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6 last:mb-0">
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

              {/* AI Summary & Explanation Sidebar (1/3 width) */}
              <div className="space-y-8">
                {/* AI Summary */}
                <div className="bg-gradient-to-b from-maroon-50 to-white rounded-2xl p-6 border border-maroon-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow">
                      <Sparkles className="w-6 h-6 text-maroon-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">AI Summary</h3>
                      <p className="text-sm text-brown-600">Key analysis of entire document</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-amber-200 max-h-[300px] overflow-y-auto">
                      <div className="text-brown-800 whitespace-pre-wrap text-sm leading-relaxed">
                        {summaryText}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">7</div>
                        <div className="text-xs text-brown-600">Sections</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">4</div>
                        <div className="text-xs text-brown-600">Key Risks</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="font-bold text-maroon-700">94%</div>
                        <div className="text-xs text-brown-600">Confidence</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Explanation Panel */}
                <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-lg">
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
                    <div className="p-4 bg-white rounded-xl border border-blue-200 max-h-[400px] overflow-y-auto">
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-sm text-blue-800 font-medium mb-1">You asked about:</div>
                        <div className="text-blue-900 font-semibold text-lg">"{highlightedText}"</div>
                      </div>
                      
                      <div className="text-gray-800 whitespace-pre-wrap text-sm leading-relaxed space-y-4">
                        {explanation.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-3 last:mb-0">
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
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                        <Highlighter className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Highlight Text to Begin</h4>
                      <p className="text-brown-600 text-sm">
                        Select any text in the document to get an instant AI-powered explanation.
                      </p>
                      <div className="mt-4 text-xs text-brown-500">
                        Try: "Confidential Information" or "Governing Law"
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Tips */}
                <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Demo Tips</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-brown-800">Click demo buttons</div>
                        <div className="text-sm text-brown-600">To automatically highlight common legal terms</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-brown-800">Select any text</div>
                        <div className="text-sm text-brown-600">Drag your cursor over text to highlight it</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-brown-800">Real explanations</div>
                        <div className="text-sm text-brown-600">Pre-programmed AI responses for demo terms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}