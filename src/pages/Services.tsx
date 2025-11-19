import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Bot, LayoutDashboard, Workflow, Phone, Link2, Gauge, ShoppingCart } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Custom Websites",
      icon: Globe,
      description: "Modern, responsive websites built with cutting-edge technology. Fast, secure, and designed for conversions.",
      features: [
        "Responsive design for all devices",
        "SEO optimization built-in",
        "Fast loading speeds",
        "Secure hosting options",
        "Content management systems",
        "Analytics integration",
        "Conversion-focused layouts",
      ],
      useCases: [
        "Business landing pages",
        "Portfolio websites",
        "E-commerce storefronts",
        "Company websites",
      ],
    },
    {
      name: "AI Chatbots",
      icon: Bot,
      description: "Intelligent chatbots for web, WhatsApp, Instagram, and voice. 24/7 customer support automation.",
      features: [
        "Multi-platform deployment (Web, WhatsApp, Instagram)",
        "Natural language processing",
        "24/7 automated responses",
        "Context-aware conversations",
        "Integration with your data",
        "Voice AI capabilities",
        "Multilingual support",
      ],
      useCases: [
        "Customer support automation",
        "Lead qualification",
        "Appointment booking",
        "FAQ handling",
      ],
    },
    {
      name: "CRM Dashboards",
      icon: LayoutDashboard,
      description: "Custom client relationship management systems. Track leads, manage contacts, visualize your pipeline.",
      features: [
        "Custom data visualization",
        "Lead tracking & scoring",
        "Contact management",
        "Sales pipeline views",
        "Automated reporting",
        "Team collaboration tools",
        "Mobile access",
      ],
      useCases: [
        "Sales team dashboards",
        "Client relationship tracking",
        "Project management",
        "Performance monitoring",
      ],
    },
    {
      name: "Automation Pipelines",
      icon: Workflow,
      description: "End-to-end workflow automation. Connect your tools and eliminate manual tasks.",
      features: [
        "Multi-step workflow creation",
        "Trigger-based automation",
        "Data transformation",
        "Error handling & notifications",
        "Conditional logic",
        "Scheduled automation",
        "API integrations",
      ],
      useCases: [
        "Data synchronization",
        "Email marketing workflows",
        "Order processing",
        "Report generation",
      ],
    },
    {
      name: "AI Calling Systems",
      icon: Phone,
      description: "Automated voice calling systems for customer outreach, follow-ups, and appointment reminders.",
      features: [
        "Natural voice conversations",
        "Automated outbound calls",
        "Appointment reminders",
        "Call scheduling",
        "Conversation recording",
        "CRM integration",
        "Follow-up automation",
      ],
      useCases: [
        "Appointment reminders",
        "Lead follow-ups",
        "Customer surveys",
        "Event notifications",
      ],
    },
    {
      name: "Integration Systems",
      icon: Link2,
      description: "Connect your existing tools seamlessly. API integrations and custom connectors.",
      features: [
        "Third-party API integration",
        "Custom connector development",
        "Data synchronization",
        "Webhook configuration",
        "Real-time updates",
        "Error monitoring",
        "Scalable architecture",
      ],
      useCases: [
        "CRM to email platform sync",
        "Payment gateway integration",
        "Inventory management",
        "Marketing tool connections",
      ],
    },
    {
      name: "Workflow Optimization",
      icon: Gauge,
      description: "Analyze and optimize your business processes with intelligent automation.",
      features: [
        "Process analysis",
        "Bottleneck identification",
        "Efficiency improvements",
        "Performance metrics",
        "Automation recommendations",
        "Cost reduction strategies",
        "Continuous monitoring",
      ],
      useCases: [
        "Business process review",
        "Efficiency audits",
        "Cost optimization",
        "Scalability planning",
      ],
    },
    {
      name: "Ecommerce Automation",
      icon: ShoppingCart,
      description: "Automated inventory, order processing, and customer management for online stores.",
      features: [
        "Inventory synchronization",
        "Order processing automation",
        "Customer communication",
        "Shipping automation",
        "Return management",
        "Analytics & reporting",
        "Multi-channel integration",
      ],
      useCases: [
        "Online store automation",
        "Dropshipping systems",
        "Order fulfillment",
        "Customer notifications",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI automation solutions tailored to your business needs
            </p>
          </div>

          <section className="mb-32">
            <div className="space-y-16 max-w-6xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.name} className="glass p-8 md:p-12 rounded-xl">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-bold mb-3">{service.name}</h3>
                        <p className="text-lg text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-foreground">Example Use Cases:</h4>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase) => (
                            <li key={useCase} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <Button asChild variant="outline" className="border-primary/30 hover:border-primary/60">
                            <Link to="/contact">Request This Service</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which services best fit your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
                <Link to="/packages">View Build Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;