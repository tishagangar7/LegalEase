"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { Zap, Shield, Users, FileText, Sparkles, Lock } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Get summaries of 50-page documents in under 30 seconds using our optimized AI models.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption with automatic file deletion. Your documents are never stored or shared.",
      color: "from-maroon-600 to-brown-700"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Accuracy",
      description: "Trained on thousands of legal documents with 95% accuracy on complex legal terminology.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share summaries securely with colleagues and collaborate on document analysis.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "Upload PDF, DOC, DOCX, TXT, and even images with OCR text extraction.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Lock,
      title: "100% Confidential",
      description: "Your data is processed in isolated environments and never used for training.",
      color: "from-gray-700 to-gray-900"
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
                Features
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto">
                Everything you need to simplify legal document analysis, powered by cutting-edge AI technology.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brown-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-maroon-50 to-amber-50 rounded-2xl border border-maroon-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to experience these features?
                </h2>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-xl font-semibold hover:from-maroon-800 hover:to-brown-900 transition-all"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}