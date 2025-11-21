import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Activity, BarChart3, Clock } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              System Performance Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              A behind-the-scenes view of the kind of metrics that matter once your automation systems are live.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="glass p-6 rounded-xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-2">Hours Saved</h2>
              <p className="text-sm text-muted-foreground">
                Track how many manual hours per week are replaced by automated workflows across your tools.
              </p>
            </div>
            <div className="glass p-6 rounded-xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-2">Flow Health</h2>
              <p className="text-sm text-muted-foreground">
                Monitor success rates, error spikes and retries to keep automations reliable over time.
              </p>
            </div>
            <div className="glass p-6 rounded-xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-2">Business Impact</h2>
              <p className="text-sm text-muted-foreground">
                Connect automation data to leads, revenue and response time improvements.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
            <p>
              This page is a conceptual example of the dashboards we help clients build. Real analytics are fully private
              to each client implementation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Analytics;
