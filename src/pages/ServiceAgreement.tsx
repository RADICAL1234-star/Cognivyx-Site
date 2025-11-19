import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServiceAgreement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Startup Service Agreement</h1>
          
          <div className="glass p-8 rounded-xl space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement Overview</h2>
              <p>
                This Startup Service Agreement ("Agreement") is entered into between Cognivyx Technologies ("Service Provider") and the Client for the provision of AI automation and system development services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope of Services</h2>
              <p>Service Provider agrees to deliver the following services as outlined in the selected package:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Custom automation system development</li>
                <li>Integration setup and configuration</li>
                <li>Testing and quality assurance</li>
                <li>Documentation and training</li>
                <li>Support as specified in the selected management plan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
              <p>
                Payment shall be made according to the selected package pricing. A 50% deposit is required before work commences, with the remaining balance due upon project completion and handover.
              </p>
              <p className="mt-2">
                Monthly management fees (if applicable) are billed in advance and are due on the 1st of each month.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Project Timeline</h2>
              <p>
                Project timelines are estimates based on the selected package and project complexity. Delays caused by late feedback, content provision, or scope changes may extend the timeline accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
              <p>The Client agrees to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Provide necessary information, content, and access in a timely manner</li>
                <li>Respond to requests for feedback within agreed timeframes</li>
                <li>Secure their own domain name (if applicable)</li>
                <li>Pay usage-based costs for third-party services (AI APIs, WhatsApp, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p>
                Upon full payment, the Client receives ownership of the delivered system, including code and documentation. Service Provider retains the right to use general methodologies and non-client-specific code in future projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Revisions</h2>
              <p>
                Each package includes a specified number of revision rounds. Additional revisions beyond the included amount may incur extra charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
              <p>
                Either party may terminate this Agreement with 30 days' written notice. In case of early termination, the Client is responsible for payment of all work completed to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Warranty & Liability</h2>
              <p>
                Service Provider warrants that all services will be performed in a professional manner. However, we are not liable for issues arising from third-party services, client modifications, or usage beyond the original scope.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of any proprietary information shared during the course of this engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
              <p>
                This Agreement shall be governed by the laws of South Africa. Any disputes shall be resolved through good faith negotiation or mediation.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> January 2025
              </p>
              <p className="text-sm mt-2">
                For questions about this agreement, please contact us at{" "}
                <a href="mailto:contact@cognivyx.com" className="text-primary hover:underline">
                  contact@cognivyx.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAgreement;