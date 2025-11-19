import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Cognivyx Technologies' services, you accept and agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">2. Services</h2>
            <p className="text-muted-foreground">
              Cognivyx Technologies provides AI automation services including system design, development, implementation, and optional management services as described in our service packages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">3. User Obligations</h2>
            <p className="text-muted-foreground">
              You agree to provide accurate information, maintain the security of your systems, and comply with all applicable laws when using our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, you own the automation systems we build for you. We retain rights to our proprietary methods, tools, and general knowledge.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">5. Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms are agreed upon before project commencement. Full payment is required before final system handover unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Cognivyx Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">7. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with written notice. Termination does not affect already-paid services or ownership of delivered systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">8. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at contact@cognivyx.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
