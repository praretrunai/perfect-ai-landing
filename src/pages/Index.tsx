
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, Database, Users, Clock, BarChart3, Wrench, MessageSquare, TrendingUp } from 'lucide-react';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsModalOpen(true);
  };

  const offerStack = [
    {
      icon: MessageSquare,
      title: "24/7 AI Communication Concierge",
      description: "Never miss a prospect again. Our AI handles inquiries, schedules tours, and nurtures leads around the clock with human-like conversations.",
      benefit: "75%+ faster response times"
    },
    {
      icon: Users,
      title: "AI Lead Engagement & Nurturing", 
      description: "Transform prospects into tenants with intelligent follow-ups, personalized property recommendations, and seamless application processes.",
      benefit: "2× faster unit fill rate"
    },
    {
      icon: Wrench,
      title: "Intelligent Maintenance Coordinator",
      description: "Streamline work orders, vendor scheduling, and tenant communications with AI that understands priority, urgency, and resource allocation.",
      benefit: "60% quicker resolution times"
    },
    {
      icon: BarChart3,
      title: "Automated Owner Reporting & Dashboards",
      description: "Generate comprehensive owner reports automatically with real-time insights, financial summaries, and property performance metrics.",
      benefit: "85% less reporting time"
    },
    {
      icon: Database,
      title: "Unified Data & Analytics Hub",
      description: "Eliminate data silos and record duplication with a centralized intelligence system that connects all your operations seamlessly.",
      benefit: "90%+ drop in record errors"
    }
  ];

  const impactMetrics = [
    { metric: "75%+", description: "Faster response times from AI communication" },
    { metric: "2×", description: "Faster unit fill rate using automated leasing" },
    { metric: "60%", description: "Quicker maintenance resolution via smart coordination" },
    { metric: "85%", description: "Less time spent on owner reports" },
    { metric: "90%+", description: "Drop in tenant record errors using unified data systems" }
  ];

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Our complete AI system deployment typically takes 2-4 weeks, including data migration, staff training, and system optimization. We handle the entire process so your team can focus on operations."
    },
    {
      question: "Will this integrate with our existing property management software?",
      answer: "Yes. Our unified system connects with all major PM platforms including AppFolio, Buildium, RentManager, and others. We eliminate data silos rather than create new ones."
    },
    {
      question: "What about data security and compliance?",
      answer: "We maintain enterprise-grade security with SOC 2 compliance, end-to-end encryption, and GDPR adherence. Your tenant and owner data remains secure and accessible only to authorized personnel."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Absolutely. We include comprehensive training for your entire team, plus ongoing support to ensure maximum adoption and ROI from your AI transformation."
    },
    {
      question: "How is this different from standalone chatbots or automation tools?",
      answer: "Unlike isolated tools that create integration headaches, we deliver a complete AI operating system. This prevents tool sprawl, eliminates duplicate records, and ensures all components work together seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">[LOGO]</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Rentelligence AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:[PHONE_NUMBER]" className="text-blue-600 hover:text-blue-700 font-medium">
                [PHONE_NUMBER]
              </a>
              <Button onClick={openBookingModal} className="bg-blue-600 hover:bg-blue-700">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Complete AI Systems for Property Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Using Isolated Tools.<br />
              <span className="text-blue-600">Start Using AI Systems.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your PM firm with our unified AI operating system. No more tool sprawl, integration headaches, or duplicate records. Just streamlined operations that scale with measurable ROI.
            </p>
            <Button 
              onClick={openBookingModal}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 mb-4"
            >
              Schedule Your AI Transformation Call
            </Button>
            <p className="text-sm text-gray-500">
              Free 30-minute strategy session • No sales pitch • Immediate actionable insights
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Standalone Tools Are Cannibalizing Your Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most PM firms are drowning in disconnected software. Chatbots that don't talk to your CRM. 
              Maintenance apps that don't sync with accounting. Reporting tools that duplicate data entry. 
              The result? Inefficiency, errors, and missed opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete AI System Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five integrated components that work as one unified intelligence layer across your entire operation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerStack.map((item, index) => (
              <Card key={index} className="border-blue-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                    {item.benefit}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Impact, Real Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aggregated performance results from AI deployments across the property management industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {impactMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.metric}
                </div>
                <p className="text-blue-100 leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-blue-200 italic max-w-4xl mx-auto">
              *These figures reflect aggregated performance ranges from similar AI deployments. 
              Real results may vary by firm size, structure, and operations maturity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about AI system implementation and integration.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Enterprise-Grade Security & Compliance
            </h2>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">Secure Data Centers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your PM Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop managing multiple tools. Start operating with unified AI intelligence. 
            Book your strategy call and discover how Rentelligence AI can streamline your entire operation.
          </p>
          <Button 
            onClick={openBookingModal}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 mb-4"
          >
            Schedule Your Free Strategy Call
          </Button>
          <p className="text-sm text-blue-200">
            30 minutes • No commitment • Immediate insights
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">[LOGO]</span>
              </div>
              <span className="font-semibold text-gray-900">Rentelligence AI</span>
            </div>
            <p className="text-sm">
              Complete AI Systems for Property Management • <a href="tel:[PHONE_NUMBER]" className="text-blue-600 hover:text-blue-700">[PHONE_NUMBER]</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-center">
              Schedule Your AI Strategy Call
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-2">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-600 mb-4">
                Calendly integration will be embedded here using:
              </p>
              <code className="bg-white px-4 py-2 rounded border text-blue-600 font-mono">
                [BOOKING_LINK]
              </code>
              <p className="text-sm text-gray-500 mt-4">
                Replace [BOOKING_LINK] with your actual Calendly embed URL
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
