import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Shield, TrendingUp, Check } from "lucide-react";

const ManagementPlans = () => {
  const plans = [
    {
      name: "Build & Bounce",
      icon: Plane,
      price: "Once-off (included in build)",
      description: "We build it. You take full control.",
      features: [
        "Complete system handover",
        "Full documentation provided",
        "Training session included",
        "30-day support window",
        "You own and control everything",
      ],
      details: [
        "We build your system, hand over complete control, and you manage it yourself",
        "Perfect for technical teams who want full ownership",
        "Host on your own platform",
        "No monthly fees",
        "You pay for your own hosting and usage costs",
      ],
      bestFor: "Teams with technical resources who want full control",
      monthlyFee: null,
    },
    {
      name: "Build & Maintain",
      icon: Shield,
      price: "R500 – R700/month",
      description: "We host, maintain & manage the system.",
      features: [
        "Managed hosting by Cognivyx",
        "Regular maintenance & updates",
        "Security patches",
        "Performance monitoring",
        "Technical support",
        "Monthly system backups",
      ],
      details: [
        "We build, host, and maintain your system",
        "You focus on your business while we handle the technical details",
        "Includes hosting on our infrastructure",
        "Monthly maintenance and bug fixes",
        "Client pays automation usage costs (AI, WhatsApp, etc.)",
      ],
      bestFor: "Businesses wanting peace of mind and hassle-free maintenance",
      monthlyFee: "R500-R700",
      recommended: true,
    },
    {
      name: "Build, Maintain & Improve",
      icon: TrendingUp,
      price: "R900 – R1,500/month",
      description: "All of the above + regular upgrades.",
      features: [
        "Everything in Build & Maintain",
        "Continuous optimization",
        "Monthly feature enhancements",
        "Performance tuning",
        "Priority support",
        "Quarterly strategy reviews",
        "Analytics & reporting",
      ],
      details: [
        "Full service management plus continuous improvements",
        "Your system evolves with your business needs",
        "Regular feature updates based on your feedback",
        "Proactive system optimization",
        "Dedicated success manager",
      ],
      bestFor: "Businesses focused on continuous growth and innovation",
      monthlyFee: "R900-R1,500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Management Plans</h1>
            <p className="text-xl text-muted-foreground">
              Choose how you want your automation system managed after we build it
            </p>
          </div>

          {/* Plan Cards */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative glass p-8 rounded-xl ${
                      plan.recommended ? "border-accent/50 shadow-2xl shadow-accent/20" : ""
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>

                      {/* Header */}
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-2xl font-bold text-accent mb-2">{plan.price}</p>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium text-accent mb-2">Best For:</p>
                        <p className="text-sm text-muted-foreground">{plan.bestFor}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Detailed Breakdown */}
          <section className="mb-32">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Detailed Plan Information</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div key={plan.name} className="glass p-8 rounded-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-1">{plan.name}</h3>
                        <p className="text-accent font-semibold">{plan.price}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {plan.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Additional Costs */}
          <section className="mb-32">
            <div className="max-w-4xl mx-auto glass p-12 rounded-xl">
              <h2 className="font-heading text-3xl font-bold mb-6">Understanding the Costs</h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Build & Bounce (Once-off)</h3>
                  <p>
                    No monthly fees. You pay only for the initial build package. You're responsible for your own hosting, domain, and usage costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Build & Maintain (R500-R700/month)</h3>
                  <p>
                    Monthly fee covers hosting on our infrastructure, regular maintenance, security updates, and technical support. You still pay for usage-based costs like AI tokens, WhatsApp messages, etc.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Build, Maintain & Improve (R900-R1,500/month)</h3>
                  <p>
                    Premium plan includes everything in Build & Maintain plus continuous improvements, new features, performance optimization, and strategic guidance. Usage costs are separate.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="text-foreground font-semibold mb-2">Usage-Based Costs (All Plans)</h3>
                  <p>Regardless of your management plan, you'll pay for:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>AI API tokens (ChatGPT, Claude, etc.)</li>
                    <li>WhatsApp Business API messages</li>
                    <li>SMS and calling services (if applicable)</li>
                    <li>Third-party integrations (varies by service)</li>
                  </ul>
                  <p className="mt-2">
                    These costs are usage-based, meaning you only pay for what you actually use. We help you optimize to keep costs low.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Not Sure Which Plan is Right?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and find the perfect management option for your business
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ManagementPlans;