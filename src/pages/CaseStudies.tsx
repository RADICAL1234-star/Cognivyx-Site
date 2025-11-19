import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Real-world automation solutions and their impact
            </p>
          </div>

          {/* Upcoming Case Studies */}
          <div className="max-w-6xl mx-auto">
            <div className="glass p-12 rounded-xl text-center space-y-8 mb-12">
              <h2 className="font-heading text-3xl font-bold">Case Studies Coming Soon</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're currently documenting our client success stories. Check back soon to see detailed breakdowns of automation systems we've built and the results they've delivered.
              </p>
            </div>

            {/* Placeholder Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl space-y-4">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                <h3 className="font-heading text-2xl font-bold">Automation Case Study 1</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Problem:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Solution:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Tools Used:</strong> Coming soon</p>
                </div>
              </div>

              <div className="glass p-8 rounded-xl space-y-4">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                <h3 className="font-heading text-2xl font-bold">Automation Case Study 2</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Problem:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Solution:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Tools Used:</strong> Coming soon</p>
                </div>
              </div>

              <div className="glass p-8 rounded-xl space-y-4">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                <h3 className="font-heading text-2xl font-bold">Automation Case Study 3</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Problem:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Solution:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Tools Used:</strong> Coming soon</p>
                </div>
              </div>

              <div className="glass p-8 rounded-xl space-y-4">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                <h3 className="font-heading text-2xl font-bold">Automation Case Study 4</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Problem:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Solution:</strong> Coming soon</p>
                  <p><strong className="text-foreground">Tools Used:</strong> Coming soon</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Interested in becoming a case study?
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudies;
