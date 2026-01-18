import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Examples", href: "/examples" },
      // { name: "Pricing", href: "/pricing" },
      // { name: "API", href: "/api" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      // { name: "Careers", href: "/careers" },
      // { name: "Press", href: "/press" },
    ],
    // Legal: [
    //   { name: "Privacy Policy", href: "/privacy" },
    //   { name: "Terms of Service", href: "/terms" },
    //   { name: "Cookie Policy", href: "/cookies" },
    //   { name: "Compliance", href: "/compliance" },
    // ],
    Support: [
      // { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      // { name: "Status", href: "/status" },
      { name: "Documentation", 
        href: "https://devpost.com/software/legalease-c2xwto",
        external: true },
    ],
  };

  return (
    <footer className="bg-brown-950 text-amber-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon-600 to-amber-700 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">LegalEase</h2>
                <p className="text-amber-200/80 text-lg">AI Legal Assistant</p>
              </div>
            </div>
            <p className="text-amber-200/60 mb-8 max-w-md text-lg">
              Making legal documents accessible and understandable for everyone through cutting-edge AI technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200">contact@legalease.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200">(555) 123-4567</span>
              </div> 
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200">Santa Cruz, California</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-white mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-amber-200/70 hover:text-amber-100 transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800/50 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className="text-amber-200/80">
              © {currentYear} LegalEase AI. All rights reserved.
            </p>
            <p className="text-amber-200/60 mt-2">
              Built with ❤️ for CruzHacks 2026
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200/70 hover:text-amber-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200/70 hover:text-amber-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/tishagangar7/LegalEase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200/70 hover:text-amber-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            
            {/* Language Selector */}
            <div className="ml-6">
              <select className="bg-brown-900 border border-amber-800 text-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-amber-800/30 text-center">
          <p className="text-amber-200/50 text-sm max-w-3xl mx-auto">
            <strong className="text-amber-200/70">Disclaimer:</strong> LegalEase is an AI-powered tool designed to assist with document analysis. 
            It does not provide legal advice and is not a substitute for professional legal counsel. 
            Always consult with a qualified attorney for legal matters.
          </p>
        </div>
      </div>
    </footer>
  );
}