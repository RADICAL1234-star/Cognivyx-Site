import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Zap, Crown, Plane, Shield, TrendingUp, Check, Globe, Bot, LayoutDashboard, Workflow } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Quick Package Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Choose Your <span className="gradient-text">Build Package</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored automation systems designed to match your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "LaunchCore",
                icon: Rocket,
                price: "R1,500 – R2,500",
                description: "Entry-level; streamlined, simple, efficient",
              },
              {
                name: "FlowCore",
                icon: Zap,
                price: "R3,000 – R4,500",
                description: "More integrations, control, stronger workflows",
                popular: true,
              },
              {
                name: "EvoCore",
                icon: Crown,
                price: "R5,000 – R7,500+",
                description: "Advanced; full-scale automation infrastructure",
              },
            ].map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.name}
                  className={`relative glass p-8 rounded-xl ${
                    pkg.popular ? "border-primary/50 shadow-xl shadow-primary/10" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/packages">View Full Package Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From websites to AI systems, we automate your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              { name: "Custom Websites", icon: Globe },
              { name: "AI Chatbots", icon: Bot },
              { name: "CRM Dashboards", icon: LayoutDashboard },
              { name: "Automation Pipelines", icon: Workflow },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="glass p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{service.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Management Options Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Management</span> Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose how you want your system managed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Build & Bounce",
                icon: Plane,
                price: "Once-off",
                description: "We build it. You take full control.",
              },
              {
                name: "Build & Maintain",
                icon: Shield,
                price: "R500-R700/mo",
                description: "We host, maintain & manage.",
                recommended: true,
              },
              {
                name: "Build, Maintain & Improve",
                icon: TrendingUp,
                price: "R900-R1,500/mo",
                description: "All of the above + upgrades.",
              },
            ].map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className={`relative glass p-8 rounded-xl ${
                    option.recommended ? "border-accent/50 shadow-xl shadow-accent/10" : ""
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{option.name}</h3>
                  <p className="text-xl font-bold text-accent mb-2">{option.price}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/management-plans">View Management Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">Cognivyx</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Specialize in AI automation",
              "Transparent communication",
              "Fast delivery",
              "Usage-based systems",
              "Secure & scalable",
              "No lock-in; you own your system",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what we've built for businesses like yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[1, 2].map((i) => (
              <div key={i} className="glass p-8 rounded-xl aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Project Preview {i}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/past-projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you save time and scale operations
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
              <Link to="/contact">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
