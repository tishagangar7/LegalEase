"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { Users, Target, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Alex Chen", role: "CEO & Founder", bio: "Former legal tech entrepreneur with 10+ years experience." },
    { name: "Dr. Maria Rodriguez", role: "Chief AI Officer", bio: "PhD in Computational Linguistics from Stanford." },
    { name: "James Wilson", role: "Head of Product", bio: "Ex-Google PM focused on accessibility in tech." },
    { name: "Sarah Johnson", role: "Legal Counsel", bio: "JD from Harvard Law with corporate law background." }
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About LegalEase
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto">
                We're on a mission to make legal understanding accessible to everyone, not just lawyers.
              </p>
            </div>

            {/* Our Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-brown-700">
                <p>
                  LegalEase was founded at Cruzhacks 2026 when we wanted to develop a web app to help people better
                  stand legal jargon. A significant divide between people and the government is created when complex legal language 
                  and inaccessible documents hinder the public's ability to understand their rights, obligations, and the reasoning behind government actions.
                </p>
                <p>
                  We realized that legal documents shouldn't be exclusive to lawyers. Everyone deserves to understand 
                  the agreements they sign, the policies they accept, and the documents that shape their lives.
                </p>
                <p>
                  Today, LegalEase combines cutting-edge AI with a deep commitment to accessibility, helping thousands 
                  of people navigate legal complexity with confidence.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-maroon-50 to-amber-50 rounded-2xl p-8 border border-maroon-100">
                <Target className="w-12 h-12 text-maroon-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-brown-700">
                  Democratize legal understanding by making complex documents accessible, clear, and comprehensible for everyone.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <Globe className="w-12 h-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-brown-700">
                  A world where no one signs a document they don't fully understand, and legal literacy is universal.
                </p>
              </div>
            </div>

            {/* Team
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow border border-amber-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mb-4"></div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-maroon-700 text-sm mb-2">{member.role}</p>
                    <p className="text-brown-600 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* CruzHacks */}
            <div className="text-center p-8 bg-gradient-to-r from-maroon-50 to-purple-50 rounded-2xl border border-maroon-100">
              <Heart className="w-12 h-12 text-maroon-700 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Built for CruzHacks 2026
              </h2>
              <p className="text-brown-700 max-w-2xl mx-auto">
                LegalEase started as a project for CruzHacks 2026, where our team came together to solve 
                a real-world problem affecting millions. We're proud to continue developing this tool 
                with the hackathon spirit of innovation and impact.
              </p>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}