import { Card } from "@/components/ui/card";
import { 
  Clock,
  HeartHandshake,
  Lightbulb,
  Layers,
  MessageSquare,
  BarChart3
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "We help businesses reclaim the hours lost to manual work.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Execution",
    description: "Every system is built with your workflow and goals in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Design",
    description: "We use cutting-edge AI and automation to move businesses forward.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "All solutions are built to grow with your company.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "You’re kept informed at every stage of your build.",
  },
  {
    icon: BarChart3,
    title: "Results You Can Measure",
    description: "Every automation is designed to improve efficiency and output.",
  },
];

const WhyChoose = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Why Choose <span className="gradient-text">Cognivyx</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by businesses for reliable, transparent, and effective automation solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="p-6 glass border border-border/60 shadow-sm hover:border-primary/30 transition-all duration-300 group will-change-transform hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
