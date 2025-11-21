import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link, useParams } from "react-router-dom";

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  sections: { heading: string; bullets?: string[]; paragraphs?: string[] }[];
};

const allArticles: Article[] = [
  {
    slug: "ai-automation-sa-2025",
    title: "The Rise of AI Automation in South African Small Businesses (2025 Report)",
    description:
      "A breakdown of how small and medium enterprises in SA are adopting automation to reduce workload, scale operations, and compete with larger companies.",
    date: "2025-03-12",
    readTime: "8 min read",
    sections: [
      {
        heading: "Why this matters now",
        paragraphs: [
          "South African small businesses are under pressure: higher input costs, tougher competition and customers who expect instant responses across multiple channels.",
          "AI automation is no longer a nice-to-have experiment. It is becoming the difference between teams that constantly firefight and those that scale calmly and predictably.",
        ],
      },
      {
        heading: "Market trends",
        bullets: [
          "SMEs lead adoption due to cost pressure and lean teams",
          "Messaging-first workflows (WhatsApp, email) dominate initial automations",
          "Low-code platforms reduce time-to-value from months to weeks",
        ],
      },
      {
        heading: "Real automation use cases",
        bullets: [
          "Lead capture → CRM sync → auto-responders",
          "Invoice generation and payment reconciliation",
          "Support triage with AI-driven categorisation and routing",
        ],
      },
      {
        heading: "Predictions for 2026",
        bullets: [
          "AI agents handle 30–50% of first‑line support",
          "End-to-end workflow orchestration becomes standard for SMEs",
          "Compliance and audit logs become built-in to automations",
        ],
      },
      {
        heading: "Practical advice for business owners",
        paragraphs: [
          "Start with one painful manual process and measure time saved.",
          "Choose tools your team can maintain. Document everything simply.",
          "Track metrics weekly: response times, error rates, conversion uplift.",
        ],
      },
    ],
  },
  {
    slug: "workflow-automation-2026",
    title: "Why Every Business Will Need a Workflow Automation System by 2026",
    description:
      "Explains the global shift toward automated business operations and the compounding cost of staying manual.",
    date: "2025-04-02",
    readTime: "9 min read",
    sections: [
      {
        heading: "From ad-hoc tasks to operating system",
        paragraphs: [
          "Most businesses still run on WhatsApp messages, email threads and spreadsheets. It works — until it suddenly does not.",
          "A workflow automation system turns that chaos into a simple, visible set of steps that your whole team can follow and improve over time.",
        ],
      },
      {
        heading: "Traditional vs automated operations",
        bullets: [
          "Manual: slow handoffs, inconsistent outputs, hidden costs",
          "Automated: standardised steps, observability, predictable delivery",
        ],
      },
      {
        heading: "Cost breakdown",
        bullets: [
          "Labour hours on repeatable tasks",
          "Switching costs and context loss",
          "Opportunity cost from delayed responses",
        ],
      },
      {
        heading: "Case studies",
        paragraphs: [
          "SME reduced onboarding time from 3 days to 4 hours via document parsing and e‑sign flows.",
          "E‑commerce team cut refund handling by 70% through rules + AI categorisation.",
        ],
      },
      {
        heading: "How SMEs benefit the most",
        bullets: [
          "Fewer people means higher impact per workflow",
          "Faster iteration against market changes",
          "Lower cost to scale without hiring",
        ],
      },
    ],
  },
  {
    slug: "ai-chatbots-customer-support-2025",
    title: "How AI Chatbots Are Replacing Traditional Customer Support in 2025",
    description:
      "Explores how AI chatbots outperform human support in speed, accuracy, and cost-effectiveness.",
    date: "2025-05-08",
    readTime: "7 min read",
    sections: [
      {
        heading: "Customer support is changing fast",
        paragraphs: [
          "Customers are used to instant answers. They do not want to wait 24 hours for a reply to a simple question about pricing, delivery or refunds.",
          "AI chatbots give smaller teams the ability to respond in seconds, keep context across channels and hand off to humans only when it truly matters.",
        ],
      },
      {
        heading: "Rule‑based vs AI agents",
        bullets: [
          "Rule‑based: deterministic, brittle, low coverage",
          "AI agents: flexible, context‑aware, higher resolution rate",
        ],
      },
      {
        heading: "Industries adopting AI support",
        bullets: ["Retail and e‑commerce", "Fintech", "Logistics", "Hospitality"],
      },
      {
        heading: "Examples of ROI",
        paragraphs: [
          "Median first‑response time under 10 seconds increases CSAT and conversion.",
          "Deflection of tier‑1 tickets lowers cost per issue by 40–65%.",
        ],
      },
    ],
  },
  {
    slug: "true-cost-of-manual-admin",
    title: "The True Cost of Manual Admin (And How Automation Fixes It)",
    description:
      "A practical analysis of how businesses waste time and money on repetitive tasks, with breakdowns of workflow inefficiencies.",
    date: "2025-06-19",
    readTime: "10 min read",
    sections: [
      {
        heading: "The hidden admin tax on your team",
        paragraphs: [
          "Most leaders know admin is frustrating, but very few know what it truly costs in rands and lost opportunities.",
          "Once you measure it, the numbers are usually shocking — and it becomes obvious where automation should start.",
        ],
      },
      {
        heading: "Top 10 time‑consuming tasks",
        bullets: [
          "Copy‑pasting between tools",
          "Manual data cleanup",
          "Email triage and follow‑ups",
          "Invoice creation and chasing",
          "Meeting notes and action items",
          "Report compilation",
          "File naming and storage",
          "CRM updates",
          "Onboarding checklists",
          "Support ticket routing",
        ],
      },
      {
        heading: "Hard numbers on lost productivity",
        paragraphs: [
          "Teams lose 5–12 hours per week per person on avoidable admin.",
          "Automation recovers these hours and reduces error rates by 30–60%.",
        ],
      },
      {
        heading: "Automations that eliminate each task",
        paragraphs: [
          "Use AI extraction for documents, programmable rules for routing, and scheduled jobs for reporting.",
        ],
      },
    ],
  },
  {
    slug: "websites-and-automation-growth",
    title: "How Websites + Automation Work Together to Drive Growth",
    description:
      "An educational article teaching businesses how websites can integrate automation to create a 24/7 sales engine.",
    date: "2025-07-03",
    readTime: "8 min read",
    sections: [
      {
        heading: "Your website as a sales teammate",
        paragraphs: [
          "A modern website should not be a static brochure. It should capture leads, qualify interest and feed your automation stack 24/7.",
          "When your site and automations work together, every visit is an opportunity to educate, nurture and convert — even while you sleep.",
        ],
      },
      {
        heading: "Modern website expectations",
        bullets: [
          "Fast, accessible, mobile‑first",
          "Clear CTAs and frictionless forms",
          "Trust signals and social proof",
        ],
      },
      {
        heading: "Automations to connect",
        bullets: [
          "Lead capture → CRM → nurture sequences",
          "Abandoned cart recovery",
          "Booking and reminders",
        ],
      },
      {
        heading: "Funnel flows and real‑world examples",
        paragraphs: [
          "Tie content to capture, nurture with personalised journeys, and hand off to sales with context.",
        ],
      },
    ],
  },
];

const Newsletter = () => {
  const { slug } = useParams();
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

  const article = useMemo(() => allArticles.find((a) => a.slug === slug), [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2">Cognivyx Insights</h1>
              <p className="text-xl text-muted-foreground">News, reports and practical guides on automation</p>
            </div>

            {!article ? (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allArticles.map((a) => (
                    <div key={a.slug} className="glass rounded-xl overflow-hidden flex flex-col border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
                      <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                      <div className="p-6 flex flex-col gap-3 flex-1">
                        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                          <span>{new Date(a.date).toLocaleDateString()}</span>
                          <span>{a.readTime}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold">{a.title}</h3>
                        <p className="text-sm text-muted-foreground flex-1">{a.description}</p>
                        <Button asChild size="sm" className="mt-2 bg-primary hover:bg-primary/90">
                          <Link to={`/newsletter/${a.slug}`}>Read Article</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <article className="prose prose-invert max-w-none">
                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground mb-3">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>{article.readTime}</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
                <p className="text-lg text-muted-foreground mb-8">{article.description}</p>
                <div className="rounded-xl h-48 mb-8 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                {article.sections.map((s) => (
                  <section key={s.heading} className="mb-8">
                    <h2 className="font-heading text-2xl font-bold mb-3">{s.heading}</h2>
                    {s.paragraphs?.map((p) => (
                      <p key={p} className="text-muted-foreground">{p}</p>
                    ))}
                    {s.bullets && (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </article>
            )}

            <div className="glass p-12 rounded-xl mt-16">
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
