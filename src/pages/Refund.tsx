import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Refund = () => {
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
            <h1 className="font-heading text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">1. Overview</h2>
            <p className="text-muted-foreground">
              At Cognivyx Technologies, we are committed to delivering high-quality automation systems. This refund policy outlines our approach to refunds and cancellations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">2. Project Deposits</h2>
            <p className="text-muted-foreground">
              Initial project deposits are non-refundable once work has commenced. This deposit covers initial planning, discovery, and system design work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">3. Project Milestones</h2>
            <p className="text-muted-foreground">
              For projects with milestone-based payments:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Payments for completed milestones are non-refundable</li>
              <li>Uncompleted milestone payments may be eligible for refund</li>
              <li>Refund requests must be made in writing</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">4. Cancellation Policy</h2>
            <p className="text-muted-foreground">
              If you wish to cancel a project:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Written notice must be provided</li>
              <li>Payment for work completed up to cancellation date is required</li>
              <li>Any deliverables completed remain your property upon full payment</li>
              <li>Partial work may be delivered at our discretion</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">5. Service Dissatisfaction</h2>
            <p className="text-muted-foreground">
              If you're not satisfied with our work, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Work with you to address concerns and make revisions</li>
              <li>Provide reasonable revisions as outlined in your agreement</li>
              <li>Discuss alternative solutions before considering refunds</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">6. Refund Timeframe</h2>
            <p className="text-muted-foreground">
              Approved refunds will be processed within 14 business days of approval. Refunds will be issued to the original payment method.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">7. Management Services</h2>
            <p className="text-muted-foreground">
              For ongoing management services (Build & Maintain or Build, Maintain & Improve):
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Monthly fees are non-refundable</li>
              <li>Services can be cancelled with 30 days written notice</li>
              <li>No refund for partial months</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">8. Third-Party Costs</h2>
            <p className="text-muted-foreground">
              Costs for third-party services (hosting, domains, API usage, etc.) are non-refundable as they are paid directly to service providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">9. Contact</h2>
            <p className="text-muted-foreground">
              For refund requests or questions about this policy, contact us at contact@cognivyx.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
