import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Monitor, Smartphone } from "lucide-react";

const PastProjects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-stack automation system for inventory and order management",
      type: "desktop"
    },
    {
      title: "WhatsApp AI Assistant",
      description: "Intelligent customer support bot with natural language processing",
      type: "mobile"
    },
    {
      title: "CRM Integration System",
      description: "Multi-platform integration connecting sales tools and databases",
      type: "desktop"
    },
    {
      title: "Appointment Booking Flow",
      description: "Automated scheduling system with SMS confirmations",
      type: "mobile"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence and reporting system",
      type: "desktop"
    },
    {
      title: "Instagram Bot Prototype",
      description: "Automated engagement and response system for social media",
      type: "mobile"
    },
    {
      title: "Workflow Automation Platform",
      description: "Custom no-code automation builder for internal processes",
      type: "desktop"
    },
    {
      title: "AI Voice Assistant",
      description: "Voice-activated customer service system with call routing",
      type: "mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Past Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of automation systems and solutions we've built
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="glass p-6 rounded-xl space-y-4 hover:border-primary/50 transition-all">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Mockup Frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.type === "desktop" ? (
                      <div className="w-4/5 h-4/5 border-4 border-border/50 rounded-lg flex items-center justify-center">
                        <Monitor className="w-12 h-12 text-muted-foreground/30" />
                      </div>
                    ) : (
                      <div className="w-2/5 h-4/5 border-4 border-border/50 rounded-2xl flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground/50 z-10">Preview Coming Soon</span>
                </div>
                <h3 className="font-heading text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                    {project.type === "desktop" ? "Desktop System" : "Mobile Flow"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-16 glass p-8 rounded-xl text-center">
            <p className="text-muted-foreground">
              Screenshots and detailed case studies are being prepared. These projects represent a variety of automation solutions across different industries and use cases.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PastProjects;
