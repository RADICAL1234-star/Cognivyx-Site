import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Shield, TrendingUp } from "lucide-react";

const managementOptions = [
  {
    name: "Build & Bounce",
    icon: Plane,
    description: "We build it. You take full control.",
    details: [
      "Complete system handover",
      "Full documentation provided",
      "Training session included",
      "30-day support window",
    ],
    best: "Best for teams with technical resources",
  },
  {
    name: "Build & Maintain",
    icon: Shield,
    description: "We host, maintain & manage the system.",
    details: [
      "Ongoing system hosting",
      "Regular maintenance & updates",
      "Technical support",
      "Performance monitoring",
    ],
    best: "Perfect for businesses wanting peace of mind",
    recommended: true,
  },
  {
    name: "Build, Maintain & Improve",
    icon: TrendingUp,
    description: "All of the above + regular upgrades.",
    details: [
      "Everything in Build & Maintain",
      "Continuous optimization",
      "Feature enhancements",
      "Priority support",
      "Quarterly strategy reviews",
    ],
    best: "Ideal for businesses focused on continuous growth",
  },
];

const Management = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Choose Your <span className="gradient-text">Management Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible options for how you want your automation system managed
          </p>
        </div>

        {/* Management Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {managementOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card
                key={option.name}
                className={`p-8 glass hover:border-accent/50 transition-all duration-300 ${
                  option.recommended ? "border-accent/30 shadow-lg shadow-accent/10" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {option.recommended && (
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
                    <h3 className="font-heading text-2xl font-bold mb-2">{option.name}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>

                  {/* Details */}
                  <ul className="space-y-2">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Best For */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-accent font-medium">{option.best}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="w-full border-accent/30 hover:border-accent/60 hover:bg-accent/5"
                  >
                    Learn More
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

export default Management;
