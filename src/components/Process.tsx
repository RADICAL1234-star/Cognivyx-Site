import { Card } from "@/components/ui/card";
import { Search, FileText, Code, Eye, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn about your business, challenges, and automation goals",
  },
  {
    icon: FileText,
    title: "Planning",
    description: "Creating a detailed roadmap and system architecture tailored to you",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building your custom automation system with best practices",
  },
  {
    icon: Eye,
    title: "Review",
    description: "Collaborative feedback sessions to ensure perfect alignment",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous quality checks to guarantee flawless performance",
  },
  {
    icon: Rocket,
    title: "Handover & Management",
    description: "Launch your system with full documentation and ongoing support",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A proven 6-step methodology for delivering exceptional automation systems
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="md:ml-20 p-6 glass hover:border-primary/30 transition-all duration-300 group">
                      {/* Step Number Badge */}
                      <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-mono font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="flex items-start gap-4">
                        {/* Icon (Mobile) */}
                        <div className="md:hidden w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="hidden md:block w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
