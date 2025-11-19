import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Crown, Check, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    name: "LaunchCore",
    icon: Rocket,
    description: "Entry-level build; streamlined, simple, efficient.",
    features: [
      "Core automation workflows",
      "Basic integrations",
      "Email & notification systems",
      "Standard support",
      "Up to 3 workflows",
    ],
    ideal: "Perfect for startups and small teams getting started with automation",
  },
  {
    name: "FlowCore",
    icon: Zap,
    description: "More integrations, more control, stronger workflows.",
    features: [
      "Advanced automation workflows",
      "Multiple platform integrations",
      "Custom API connections",
      "Priority support",
      "Up to 10 workflows",
      "Data analytics dashboard",
    ],
    ideal: "Ideal for growing businesses that need robust automation",
    popular: true,
  },
  {
    name: "EvoCore",
    icon: Crown,
    description: "Advanced build; full-scale automation infrastructure.",
    features: [
      "Enterprise-grade workflows",
      "Unlimited integrations",
      "Custom AI implementations",
      "24/7 dedicated support",
      "Unlimited workflows",
      "Advanced analytics & reporting",
      "Dedicated success manager",
    ],
    ideal: "Built for enterprises requiring complete automation solutions",
  },
  {
    name: "Custom Plan",
    icon: Settings,
    description: "On-Demand Solutions",
    features: [
      "A flexible option for clients who want a personalized solution.",
      "Ideal for businesses needing one specific item such as a website, automation flow, AI chatbot, CRM dashboard, verification system, or any standalone feature.",
      "Select only what you need — we provide a tailored quotation based on your requirements.",
    ],
    ideal: "Perfect for clients who need a specific solution tailored to their exact needs",
    custom: true,
  },
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePackageClick = (pkg: any) => {
    if (pkg.custom) {
      navigate("/packages");
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Choose Your <span className="gradient-text">Build Package</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored automation systems designed to match your business needs and scale
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.name}
                className={`relative p-8 glass hover:border-primary/50 transition-all duration-300 group ${
                  pkg.popular ? "border-primary/50 shadow-2xl shadow-primary/20" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Header */}
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-3 ${pkg.custom ? '' : ''}`}>
                        {pkg.custom ? (
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        ) : (
                          <>
                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Ideal For */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">{pkg.ideal}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => handlePackageClick(pkg)}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 glow-primary"
                        : pkg.custom
                        ? "bg-accent hover:bg-accent/90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {pkg.custom ? "Request Custom Solution" : "Get Started"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
