import { Card } from "@/components/ui/card";
import { ExternalLink, Clock } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real automation systems delivering measurable results
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 glass text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <Clock className="w-10 h-10 text-accent" />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold">
                Portfolio Expanding Soon
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're actively building our public portfolio. Our systems are already delivering results for clients across various industries—from e-commerce automation to AI-powered customer service workflows.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Interested in seeing specific examples? Reach out to discuss your use case and we'll share relevant case studies.
              </p>
            </div>

            {/* Placeholder Grid - Shows credibility */}
            <div className="grid md:grid-cols-3 gap-4 pt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-lg border border-border bg-secondary/20 flex items-center justify-center group hover:border-primary/30 transition-colors"
                >
                  <ExternalLink className="w-8 h-8 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              Case studies featuring actual client systems, dashboards, and workflow automations coming soon
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
