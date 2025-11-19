import { Card } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  DollarSign, 
  Shield, 
  Building2,
  Unlock,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "AI Automation Specialists",
    description: "We specialize in cutting-edge AI automation tailored to your business needs",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear updates at every stage. You're always in the loop.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient workflows mean faster implementation without compromising quality",
  },
  {
    icon: DollarSign,
    title: "Usage-Based Systems",
    description: "You control costs with scalable, pay-as-you-grow automation",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security that grows with your business",
  },
  {
    icon: Building2,
    title: "Built for Real Businesses",
    description: "Practical solutions for actual business challenges, not theoretical concepts",
  },
  {
    icon: Unlock,
    title: "No Lock-In",
    description: "You own your system. Full transparency and control from day one",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by time saved and productivity gained",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="p-6 glass hover:border-primary/30 transition-all duration-300 group"
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
