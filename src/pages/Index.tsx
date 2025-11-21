import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Zap, Crown, Plane, Shield, TrendingUp, Check, Globe, Bot, LayoutDashboard, Workflow, Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Problem & Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center md:text-left">
                Why automation matters now
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mt-4 md:mx-0 mx-auto" />
              <ul className="mt-6 space-y-3 text-sm md:text-base text-muted-foreground">
                <li>Too many manual tasks slowing you down every week.</li>
                <li>Leads slipping through the cracks between tools and inboxes.</li>
                <li>Teams repeating the same steps instead of focusing on growth.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left">
                What Cognivyx helps you achieve
              </h3>
              <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mt-4 md:mx-0 mx-auto" />
              <ul className="mt-6 space-y-3 text-sm md:text-base text-muted-foreground">
                <li>Recover hours every week by automating repetitive workflows.</li>
                <li>Give customers faster, more consistent responses 24/7.</li>
                <li>See your operations in one place, with clear dashboards and data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Package Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Choose Your <span className="gradient-text">Build Package</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored automation systems designed to match your business needs
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "LaunchCore",
                icon: Rocket,
                price: "R1,500 – R2,500",
                description: "Entry-level; streamlined, simple, efficient",
              },
              {
                name: "FlowCore",
                icon: Zap,
                price: "R3,000 – R4,500",
                description: "More integrations, control, stronger workflows",
                popular: true,
              },
              {
                name: "EvoCore",
                icon: Crown,
                price: "R5,000 – R7,500+",
                description: "Advanced; full-scale automation infrastructure",
              },
              {
                name: "CustomCore",
                icon: Wrench,
                price: "Quote",
                description: "Pick individual services if you don’t want a full package.",
              },
            ].map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.name}
                  className={`relative glass p-8 rounded-xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                    pkg.popular ? "border-primary/50 shadow-xl shadow-primary/10" : "shadow-sm border-border/60"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/packages">View Full Package Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From websites to AI systems, we automate your business operations
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              { name: "Custom Websites", icon: Globe, description: "Conversion-focused sites tailored to your brand." },
              { name: "AI Chatbots", icon: Bot, description: "AI chatbots for support and sales + optional AI callers." },
              { name: "CRM Dashboards", icon: LayoutDashboard, description: "Central views to track leads, tasks and performance." },
              { name: "Automation Pipelines", icon: Workflow, description: "End-to-end workflows connecting your tools automatically." },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="glass p-6 rounded-xl border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Management Options Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Management</span> Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose how you want your system managed
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Build & Bounce",
                icon: Plane,
                price: "Once-off",
                description: "We build it. You take full control.",
              },
              {
                name: "Build & Maintain",
                icon: Shield,
                price: "R500-R700/mo",
                description: "We host, maintain & manage.",
                recommended: true,
              },
              {
                name: "Build, Maintain & Improve",
                icon: TrendingUp,
                price: "R900-R1,500/mo",
                description: "All of the above + upgrades.",
              },
            ].map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className={`relative glass p-8 rounded-xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 ${
                    option.recommended ? "border-accent/50 shadow-xl shadow-accent/10" : "shadow-sm border-border/60"
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{option.name}</h3>
                  <p className="text-xl font-bold text-accent mb-2">{option.price}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/management-plans">View Management Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Insights / Newsletter Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Learn how modern automation really works
            </h2>
            <p className="text-xl text-muted-foreground">
              Read in-depth articles from Cognivyx Insights on AI chatbots, workflows and automation systems.
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-6 min-w-full snap-x snap-mandatory">
              {[
                {
                  slug: "ai-automation-sa-2025",
                  title: "The Rise of AI Automation in South African Small Businesses",
                  date: "2025-03-12",
                  description: "How lean teams are using AI to save hours every week and compete with bigger players.",
                },
                {
                  slug: "workflow-automation-2026",
                  title: "Why Every Business Will Need Workflow Automation by 2026",
                  date: "2025-04-02",
                  description: "What changes when your operations run on standardised, trackable workflows instead of manual tasks.",
                },
                {
                  slug: "ai-chatbots-customer-support-2025",
                  title: "How AI Chatbots Are Replacing Traditional Support",
                  date: "2025-05-08",
                  description: "Practical examples of chatbots handling support, pre‑sales questions and lead qualification.",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  to={`/newsletter/${article.slug}`}
                  className="snap-start flex-none w-80 glass rounded-xl border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 overflow-hidden"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                  <div className="p-6 space-y-2">
                    <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
                    <h3 className="font-heading text-lg font-bold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </div>
                </Link>
              ))}

              <Link
                to="/newsletter"
                className="snap-start flex-none w-72 glass rounded-xl border border-dashed border-primary/40 text-center flex flex-col items-center justify-center px-6 py-8 hover:border-primary/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <p className="text-sm text-primary/80 mb-2">See all articles</p>
                <p className="font-heading text-xl font-bold">Browse the full Cognivyx Insights library</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/newsletter">Visit Cognivyx Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Past Projects Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse at the kinds of systems we design and ship.
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="glass rounded-xl border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 overflow-hidden flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
              <div className="p-6 space-y-2">
                <h3 className="font-heading text-2xl font-bold">Sales Funnel Automation for Online Store</h3>
                <p className="text-sm text-muted-foreground">
                  Automated lead capture, email sequences and CRM updates for a growing e‑commerce brand.
                </p>
                <p className="text-xs text-muted-foreground">
                  Result: Fewer lost leads and hours saved every week on manual follow-ups.
                </p>
              </div>
            </div>
            <div className="glass rounded-xl border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 overflow-hidden flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-transparent" />
              <div className="p-6 space-y-2">
                <h3 className="font-heading text-2xl font-bold">Client Portal & Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Central place for clients to view requests, statuses and key business metrics.
                </p>
                <p className="text-xs text-muted-foreground">
                  Result: Fewer back‑and‑forth messages and better visibility for internal teams.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
              <Link to="/past-projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you save time and scale operations
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-accent mx-auto" />
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
              <Link to="/contact">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
