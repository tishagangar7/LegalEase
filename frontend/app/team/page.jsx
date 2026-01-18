"use client";

import LayoutWrapper from "../components/LayoutWrapper";
import { Users, Github, Linkedin, Mail, Code, Palette, Zap, Heart } from "lucide-react";
import inikaImage from "./images/inika.jpg";
import lillianImage from "./images/lillian.jpg";
import tishaImage from "./images/tisha.jpg";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Tisha Gangar",
      role: "Backend Developer & AI Integration",
      bio: "Computer Science major, built the AI pipeline and the backend infrastructure behind LegalEase.",
      skills: ["Next.js", "Python", "OpenAI API", "System Architecture"],
      contributions: [
        "Led AI model integration",
        "Built document processing pipeline",
        "Implemented real-time text analysis",
        "Designed scalable backend"
      ],
      funFact: "Once held a lion cub",
      image: tishaImage,
      color: "from-blue-600 to-cyan-600",
      github: "https://github.com/tishagangar7",
      linkedin: "https://www.linkedin.com/in/tisha-gangar-700583350/",
      email: "tgangar@ucsc.edu"
    },
    {
      name: "Lillian Hamilton",
      role: "UI/UX Designer & Frontend Developer",
      bio: "Computer Science major, crafted the user experience and visual identity of LegalEase.",
      skills: ["Figma", "React", "Tailwind CSS", "Accessibility Design"],
      contributions: [
        "Designed the complete user interface",
        "Implemented responsive layouts",
        "Created the maroon/brown brand system"
      ],
      funFact: "Loves dark chocolate",
      image: lillianImage,
      color: "from-maroon-700 to-purple-700",
      github: "https://github.com/Lillypadhamilton",
      linkedin: "https://www.linkedin.com/in/lillian-hamilton/",
      email: "lihamilt@ucsc.edu"
    },
    {
      name: "Inika Bhargava",
      role: "Product Manager & Frontend Developer",
      bio: "Computer Engineering major, assisted with frontend development and product management.",
      skills: ["Product Strategy", "Legal Research", "User Testing", "Project Management"],
      contributions: [
        "Provided descriptions and documentation",
        "Managed project timeline and deliverables",
        "Crafted the justice-focused narrative"
      ],
      funFact: "Plays the haromica",
      image: inikaImage,
      color: "from-amber-600 to-orange-600",
      github: "https://github.com/in1ka",
      linkedin: "https://www.linkedin.com/in/inika-bhargava/",
      email: "ibhargav@ucsc.edu@ucsc.edu"
    }
  ];

  const projectHighlights = [
    {
      title: "36 Hours",
      description: "From concept to working prototype at CruzHacks 2026"
    },
    {
      title: "100+ Documents",
      description: "Tested with real legal agreements during development"
    },
    {
      title: "3 Justice Pillars",
      description: "Accessibility, Transparency, Empowerment"
    },
    {
      title: "0 Lawyers Required",
      description: "Designed for people without legal backgrounds"
    }
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-maroon-100 to-amber-100 text-brown-800 px-6 py-3 rounded-full text-lg font-medium mb-8">
                <Users className="w-6 h-6" />
                Meet the Team Behind LegalEase
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                The Minds Making Law
                <span className="block text-maroon-700">Accessible to All</span>
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
                Three students united by a common mission: using technology to bridge the justice gap 
                and make legal understanding a right, not a privilege.
              </p>
            </div>

            {/* Project Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {projectHighlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 text-center"
                >
                  <div className="text-3xl font-bold text-maroon-700 mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-brown-600 text-sm">
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Team Members Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Member Header */}
                  <div className="text-center mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <img 
                        src={member.image.src}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-maroon-50 text-brown-800 rounded-full text-sm font-semibold mb-4">
                      {member.role}
                    </div>
                    <p className="text-brown-600">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-600" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-amber-50 text-brown-800 rounded-full text-sm border border-amber-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contributions */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {member.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-maroon-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-brown-700">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fun Fact */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      Fun Fact
                    </h4>
                    <p className="text-brown-700 text-sm">
                      {member.funFact}
                    </p>
                  </div>

                  {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-amber-100">
                {member.github && (
                    <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors hover:scale-110 transform"
                    aria-label={`Visit ${member.name}'s GitHub profile`}
                    title="GitHub Profile"
                    >
                    <Github className="w-5 h-5" />
                    </a>
                )}
                {member.linkedin && (
                    <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors hover:scale-110 transform"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    title="LinkedIn Profile"
                    >
                    <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {member.email && (
                    <a 
                    href={member.email.startsWith('mailto:') ? member.email : `mailto:${member.email}`}
                    className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors hover:scale-110 transform"
                    aria-label={`Email ${member.name}`}
                    title="Send Email"
                    >
                    <Mail className="w-5 h-5" />
                    </a>
                )}
                </div>
                </div>
              ))}
            </div>

            {/* Our Story Section */}
            <div className="bg-gradient-to-br from-maroon-50 to-amber-50 rounded-2xl p-10 border border-maroon-100 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our CruzHacks 2026 Journey
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-maroon-700 mb-4">1</div>
                  <h3 className="font-bold text-gray-900 mb-3">The Spark</h3>
                  <p className="text-brown-700">
                    United in our difficulties as students trying to understand off-campus lease agreements sparked our mission to democratize legal understanding.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-maroon-700 mb-4">2</div>
                  <h3 className="font-bold text-gray-900 mb-3">The Build</h3>
                  <p className="text-brown-700">
                    36 hours of coding, designing, and testing. We built LegalEase during CruzHacks 2026.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-maroon-700 mb-4">3</div>
                  <h3 className="font-bold text-gray-900 mb-3">The Impact</h3>
                  <p className="text-brown-700">
                    We're committed to continuing development to help thousands understand their legal rights and obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-block p-10 bg-gradient-to-r from-maroon-800 to-brown-900 text-white rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  Want to Join Our Mission?
                </h2>
                <p className="text-amber-100 mb-8 max-w-2xl mx-auto text-lg">
                  We believe in open collaboration and making legal technology accessible to all developers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-brown-900 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow-2xl"
                  >
                    Contact the Team
                  </a>
                  <a
                    href="https://github.com/tishagangar7/LegalEase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-transparent border-2 border-amber-300 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
                <p className="mt-8 text-amber-200/80 text-sm">
                  LegalEase • CruzHacks 2026 • Making Justice Accessible
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}