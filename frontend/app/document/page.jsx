"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { BookOpen } from "lucide-react";

export default function DocumentPage() {
  return (
    <LayoutWrapper showBackButton={true}>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-maroon-700" />
              <h1 className="text-3xl font-bold text-gray-900">Document Analysis</h1>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Summary</h2>
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-brown-700">
                  This is where your AI-generated document summary will appear.
                  In a real application, this would show the analyzed document content.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-brown-800 mb-4">Uploaded Content:</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    The text from your upload would appear here for review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}