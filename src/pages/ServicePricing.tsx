import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServicePricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Service & Pricing Agreement
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            This page summarises how Cognivyx Technologies structures services, pricing,
            payments, and project scope. It should be read together with the Startup
            Service Agreement, Refund Policy, and other legal documents on the Legal page.
          </p>

          <div className="glass p-8 rounded-xl space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Scope of Services</h2>
              <p>
                Cognivyx provides digital and automation services including custom websites
                and systems, CRM dashboards, AI chatbot and calling automation, social
                workflow automation, and data integration. The exact deliverables for each
                project are defined in the proposal or scope of work shared with the Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Packages & Engagement Models</h2>
              <p>
                Services may be delivered under structured tiers such as LaunchCore (build
                and handover), FlowCore (build and maintain), or EvoCore (build, maintain,
                and improve), or via custom solutions. Each engagement clearly states what
                is included, what is excluded, and any ongoing maintenance or improvement
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Pricing & Deposits</h2>
              <p>
                Project pricing is confirmed in an approved quotation or invoice. Unless
                otherwise stated, a deposit is payable before development commencement,
                with the balance due before final handover. Third-party costs such as
                domains, hosting, APIs, WhatsApp or AI usage are billed separately and may
                change over time based on external providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Payment Terms</h2>
              <p>
                Payment schedules and due dates are defined in the proposal or invoice.
                Late payments may result in suspension of work or access until outstanding
                balances are settled. Ownership and long-term licences only transfer once
                all agreed fees have been paid in full.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Scope, Revisions & Change Requests</h2>
              <p>
                The initial scope covers all features, pages, and automations listed in the
                approved proposal. Minor revisions are included as specified; new features,
                redesigns, or material scope changes require written approval and may
                impact cost and timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Refunds & Cancellations</h2>
              <p>
                Deposits and fees follow the rules set out in the Refund Policy. In
                general, once development work has started, deposits become non-refundable
                and any refunds are calculated based on work completed and third-party
                costs already incurred.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Ownership & Handover</h2>
              <p>
                After full payment, the Client receives ownership of agreed deliverables,
                including system assets necessary for live use. Until then, the Client
                holds a temporary, limited licence to use the solution. Any unauthorised
                modification or use outside the agreed scope may void warranties and
                support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Support, Maintenance & Third-Party Services</h2>
              <p>
                Ongoing support and maintenance are provided under separate plans where
                applicable. Cognivyx is not responsible for outages, policy changes, or
                pricing changes introduced by independent third-party platforms such as
                hosting providers, messaging platforms, or API vendors.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong className="text-foreground">Note:</strong> This summary is for
                clarity. In case of any conflict between this page and a signed proposal
                or agreement, the signed document will prevail.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePricing;
