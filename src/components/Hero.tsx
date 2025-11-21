import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/95" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50 pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI-Powered Automation Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Simplify. <span className="gradient-text">Streamline.</span>
            <br />
            Automate.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI-powered automation systems that save time, reduce workload and grow your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-primary group"
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            >
              <Link to="/packages">View Our Packages</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-mono gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-mono gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-mono gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
