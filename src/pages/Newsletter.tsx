import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been added to the Cognivyx Insights newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Join Cognivyx Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay ahead with the latest in AI automation, business optimization, and system innovation
              </p>
            </div>

            {/* Benefits */}
            <div className="glass p-12 rounded-xl mb-12">
              <h2 className="font-heading text-2xl font-bold mb-8 text-center">What You'll Get</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Automation Tips</h3>
                    <p className="text-sm text-muted-foreground">
                      Practical strategies to streamline your operations and save time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI News & Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay informed about the latest AI tools and automation trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">System Upgrades</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about new features and capabilities for automation systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Exclusive Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Behind-the-scenes looks at projects and case studies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="glass p-12 rounded-xl">
              <h2 className="font-heading text-2xl font-bold mb-6 text-center">Subscribe Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 glow-primary sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Join hundreds of business owners and entrepreneurs who are transforming their operations with AI automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;
