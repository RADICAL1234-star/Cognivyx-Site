import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, FileText, Cookie, RotateCcw, FileSignature, Scale } from "lucide-react";

const Legal = () => {
  const items = [
    {
      href: "/privacy",
      title: "Privacy Policy",
      description: "How we collect, use, and protect client and visitor data.",
      icon: Shield,
    },
    {
      href: "/terms",
      title: "Terms of Service",
      description: "The core rules that govern how we work with clients.",
      icon: FileText,
    },
    {
      href: "/cookies",
      title: "Cookie Policy",
      description: "How we use cookies, analytics, and tracking technologies.",
      icon: Cookie,
    },
    {
      href: "/refund",
      title: "Refund Policy",
      description: "How deposits, cancellations, and refunds are handled.",
      icon: RotateCcw,
    },
    {
      href: "/service-agreement",
      title: "Startup Service Agreement",
      description: "Core operational terms for automation and digital projects.",
      icon: FileSignature,
    },
    {
      href: "/service-pricing",
      title: "Service & Pricing Agreement",
      description: "Detailed service scope, pricing structure, and payment rules.",
      icon: Scale,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <header className="mb-10 max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Legal & Agreements
            </h1>
            <p className="text-muted-foreground">
              All of our core legal documents in one place. These policies and agreements
              explain how Cognivyx Technologies operates, protects data, and works with clients.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card/70 p-5 hover:border-primary/70 hover:bg-card transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <span className="mt-auto text-xs font-medium text-primary group-hover:underline">
                    View details
                  </span>
                </Link>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
