import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Zap, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Jeremei Ngombo",
      role: "Founder & Lead Systems Architect",
      description: "Expert in AI automation and intelligent system design"
    },
    {
      name: "Dillon Lesch",
      role: "Co-Founder & Head of Sales",
      description: "Focused on delivering client success and business growth"
    },
    {
      name: "Ezra Perez",
      role: "Co-Founder & Head of Marketing",
      description: "Driving innovation in automation marketing and strategy"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI and automation"
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Your success is our success. We build systems that truly work for you"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Every system we build is optimized for performance and cost-effectiveness"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear communication, honest timelines, and no hidden surprises"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We're always learning, evolving, and refining our approach"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">About Cognivyx</h1>
            <p className="text-xl text-muted-foreground">
              Building the future of business automation, one intelligent system at a time
            </p>
          </div>

          {/* Mission */}
          <section className="mb-32">
            <div className="max-w-4xl mx-auto glass p-12 rounded-xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Cognivyx, we believe businesses should spend their time growing, not managing repetitive tasks. Our mission is to give businesses back their most valuable asset: time.
                </p>
                <p>
                  We specialize in smart automation systems that transform how companies operate. By combining AI technology with systems thinking, we create solutions that don't just automate tasks—they intelligently adapt to your business needs.
                </p>
                <p>
                  From custom websites to AI chatbots, CRM dashboards to complete automation pipelines, we build systems that work seamlessly behind the scenes, allowing you to focus on what matters most: serving your customers and scaling your business.
                </p>
                <p className="text-foreground font-semibold">
                  We don't just build technology. We empower businesses with AI-driven solutions that create real, measurable impact.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-32">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="glass p-8 rounded-xl space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Team */}
          <section className="mb-32">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="glass p-8 rounded-xl space-y-4 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section>
            <div className="max-w-2xl mx-auto glass p-12 rounded-xl text-center">
              <h2 className="font-heading text-3xl font-bold mb-6">Based in Cape Town</h2>
              <p className="text-muted-foreground text-lg">
                Operating from Cape Town, South Africa, we serve clients globally with cutting-edge automation solutions. Our location gives us a unique perspective on building efficient, scalable systems for businesses worldwide.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
