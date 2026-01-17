"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
import { Check, Zap, Users, Building } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      icon: Zap,
      color: "from-gray-400 to-gray-600",
      features: [
        "5 documents per month",
        "Basic AI summaries",
        "Text-only uploads",
        "Standard processing speed",
        "Web access only"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      icon: Users,
      color: "from-maroon-600 to-brown-700",
      popular: true,
      features: [
        "50 documents per month",
        "Advanced AI analysis",
        "PDF & DOCX support",
        "Priority processing",
        "Team collaboration (3 users)",
        "API access",
        "Export to PDF/Word"
      ],
      buttonText: "Start Free Trial",
      buttonColor: "bg-gradient-to-r from-maroon-700 to-brown-800 hover:from-maroon-800 hover:to-brown-900"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored",
      icon: Building,
      color: "from-gray-800 to-black",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "Full API integration",
        "Dedicated support",
        "Unlimited team members",
        "SLA guarantee",
        "On-premise deployment",
        "Custom security audits"
      ],
      buttonText: "Contact Sales",
      buttonColor: "bg-gray-900 hover:bg-black"
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI technology.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border ${plan.popular ? 'border-maroon-300 shadow-xl' : 'border-amber-100'} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-maroon-600 to-brown-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-brown-600">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-brown-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 text-white rounded-xl font-semibold transition-all ${plan.buttonColor}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Can I switch plans later?",
                    a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately."
                  },
                  {
                    q: "Is there a free trial for Pro?",
                    a: "Yes, Pro includes a 14-day free trial with full access to all features."
                  },
                  {
                    q: "What payment methods do you accept?",
                    a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise."
                  },
                  {
                    q: "Can I cancel anytime?",
                    a: "Yes, cancel anytime with no penalties. We'll prorate any unused time."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-amber-100">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-brown-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}