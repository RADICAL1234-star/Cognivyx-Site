import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Zap, Crown, Check, X } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "LaunchCore",
      icon: Rocket,
      price: "R1,500 – R2,500",
      description: "Entry-level build; streamlined, simple, efficient.",
      features: [
        { name: "Custom Design", included: true },
        { name: "Basic Automation", included: true },
        { name: "API Integrations", value: "Up to 3" },
        { name: "AI Features", value: "Basic" },
        { name: "Custom Dashboard", included: false },
        { name: "Multi-User Access", included: false },
        { name: "Advanced Workflows", included: false },
        { name: "Dedicated Support", included: false },
      ],
      deliverables: [
        "Core automation workflows",
        "Email & notification systems",
        "Basic integrations (up to 3 platforms)",
        "Standard documentation",
        "2 revision rounds",
      ],
      bestFor: "Small businesses & startups getting started with automation",
      timeline: "2-3 weeks",
      technologies: "Make.com, Zapier, Basic APIs",
    },
    {
      name: "FlowCore",
      icon: Zap,
      price: "R3,000 – R4,500",
      description: "More integrations, more control, stronger workflows.",
      popular: true,
      features: [
        { name: "Custom Design", included: true },
        { name: "Basic Automation", included: true },
        { name: "API Integrations", value: "Up to 10" },
        { name: "AI Features", value: "Advanced" },
        { name: "Custom Dashboard", included: true },
        { name: "Multi-User Access", included: true },
        { name: "Advanced Workflows", included: false },
        { name: "Dedicated Support", included: false },
      ],
      deliverables: [
        "Advanced automation workflows",
        "Multiple platform integrations (up to 10)",
        "Custom API connections",
        "Data analytics dashboard",
        "Priority support",
        "3 revision rounds",
      ],
      bestFor: "Growing businesses that need robust automation",
      timeline: "3-5 weeks",
      technologies: "Make.com, Custom APIs, AI Integration, Database Systems",
    },
    {
      name: "EvoCore",
      icon: Crown,
      price: "R5,000 – R7,500+",
      description: "Advanced build; full-scale automation infrastructure.",
      features: [
        { name: "Custom Design", included: true },
        { name: "Basic Automation", included: true },
        { name: "API Integrations", value: "Unlimited" },
        { name: "AI Features", value: "Enterprise" },
        { name: "Custom Dashboard", included: true },
        { name: "Multi-User Access", included: true },
        { name: "Advanced Workflows", included: true },
        { name: "Dedicated Support", included: true },
      ],
      deliverables: [
        "Enterprise-grade workflows",
        "Unlimited integrations",
        "Custom AI implementations",
        "Advanced analytics & reporting",
        "Dedicated success manager",
        "Unlimited revisions",
      ],
      bestFor: "Enterprises requiring complete automation solutions",
      timeline: "6-8 weeks",
      technologies: "Full Stack Development, Custom AI, Advanced Integrations, Enterprise Systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Build Packages</h1>
            <p className="text-xl text-muted-foreground">
              Choose the package that matches your automation needs. Every package includes full system ownership upon completion.
            </p>
          </div>

          {/* Package Cards */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.name}
                    className={`relative glass p-8 rounded-xl ${
                      pkg.popular ? "border-primary/50 shadow-2xl shadow-primary/20" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Header */}
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                        <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                        <p className="text-muted-foreground">{pkg.description}</p>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {pkg.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong className="text-foreground">Best For:</strong> {pkg.bestFor}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Timeline:</strong> {pkg.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-32">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Package Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-heading text-lg">Feature</th>
                    <th className="text-center py-4 px-6 font-heading text-lg">LaunchCore</th>
                    <th className="text-center py-4 px-6 font-heading text-lg bg-primary/5">FlowCore</th>
                    <th className="text-center py-4 px-6 font-heading text-lg">EvoCore</th>
                  </tr>
                </thead>
                <tbody>
                  {packages[0].features.map((feature, idx) => (
                    <tr key={feature.name} className="border-b border-border/50">
                      <td className="py-4 px-6">{feature.name}</td>
                      {packages.map((pkg) => {
                        const feat = pkg.features[idx];
                        return (
                          <td key={pkg.name} className={`text-center py-4 px-6 ${pkg.popular ? 'bg-primary/5' : ''}`}>
                            {feat.value ? (
                              feat.value
                            ) : feat.included ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-32">
            <div className="max-w-4xl mx-auto glass p-12 rounded-xl">
              <h2 className="font-heading text-3xl font-bold mb-6">What's Not Included</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Domain Names:</strong> Not included. You'll need to purchase your own domain (typically R150-R200/year).
                </p>
                <p>
                  <strong className="text-foreground">Hosting Fees:</strong> Separate from our build packages. Costs vary based on your system's requirements and chosen management option.
                </p>
                <p>
                  <strong className="text-foreground">Usage-Based Costs:</strong> Some features incur usage costs:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>AI API tokens (based on actual usage)</li>
                  <li>WhatsApp messaging fees (per message)</li>
                  <li>SMS/calling costs (if applicable)</li>
                  <li>Third-party API usage (varies by service)</li>
                </ul>
                <p className="pt-4">
                  We design all systems to be cost-efficient and usage-based, meaning you only pay for what you actually use. We provide transparent cost estimates during the planning phase.
                </p>
              </div>
            </div>
          </section>

          {/* Custom Plan Section */}
          <section className="mb-32">
            <div className="max-w-5xl mx-auto glass p-12 rounded-xl">
              <div className="text-center mb-8">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Custom Plan — <span className="gradient-text">Tailored Solutions</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Build exactly what you need, nothing more, nothing less
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">
                    This option is ideal for clients who:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      "Only need one specific system or feature",
                      "Want a standalone automation or chatbot",
                      "Want a website without automation",
                      "Want automation without a website",
                      "Need a specialized dashboard or AI solution",
                      "Want to build unique workflows not covered in our packages",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      "Free discovery call",
                      "Requirements analysis",
                      "Technical feasibility check",
                      "Custom quotation based on scope",
                      "Delivery timeline estimate",
                      "Optional management plan selection after completion",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Who it's best for:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Niche businesses with specific needs",
                      "Startups needing a single feature",
                      "Companies replacing one outdated system",
                      "Businesses wanting a custom workflow",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                    <Link to="/contact">Request a Custom Quotation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your package and let's discuss how we can automate your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
                <Link to="/management-plans">View Management Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;