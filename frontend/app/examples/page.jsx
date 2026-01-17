"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { FileText, Briefcase, Building, GraduationCap, Home, User } from "lucide-react";

export default function ExamplesPage() {
  const examples = [
    {
      icon: FileText,
      title: "Non-Disclosure Agreements",
      description: "Quickly understand confidentiality obligations and key restrictions.",
      before: "5 pages of complex legal language",
      after: "Key points in plain English"
    },
    {
      icon: Briefcase,
      title: "Employment Contracts",
      description: "Identify important clauses about compensation, benefits, and termination.",
      before: "15-page contract with legal jargon",
      after: "Clear summary of rights and obligations"
    },
    {
      icon: Building,
      title: "Commercial Leases",
      description: "Understand rent terms, maintenance responsibilities, and renewal options.",
      before: "20+ pages of property law",
      after: "Simple breakdown of lease terms"
    },
    {
      icon: GraduationCap,
      title: "Academic Papers",
      description: "Extract key findings and methodology from complex research.",
      before: "Dense academic writing",
      after: "Concise research summary"
    },
    {
      icon: Home,
      title: "Real Estate Contracts",
      description: "Clarify purchase terms, contingencies, and closing requirements.",
      before: "Confusing property terms",
      after: "Clear purchase obligations"
    },
    {
      icon: User,
      title: "Privacy Policies",
      description: "Understand how your data is collected, used, and shared.",
      before: "Thousands of words of legalese",
      after: "Simple privacy overview"
    }
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Real-World Examples
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto">
                See how LegalEase transforms complex documents into clear, actionable insights.
              </p>
            </div>

            {/* Examples Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {examples.map((example, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-maroon-100 to-amber-100 rounded-xl flex items-center justify-center">
                      <example.icon className="w-7 h-7 text-maroon-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {example.title}
                      </h3>
                      <p className="text-brown-600">
                        {example.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <div className="text-sm font-semibold text-red-700 mb-1">Before</div>
                      <div className="text-red-900">{example.before}</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="text-sm font-semibold text-green-700 mb-1">After</div>
                      <div className="text-green-900">{example.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Want to see your documents transformed?
                </h2>
                <p className="text-brown-600 mb-6 max-w-2xl mx-auto">
                  Upload a sample document and see the magic in action. No signup required.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Try Live Demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}