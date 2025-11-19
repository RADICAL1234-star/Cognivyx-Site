import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
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
            <h1 className="font-heading text-4xl font-bold mb-4">Legal Disclaimer</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">1. Website Content</h2>
            <p className="text-muted-foreground">
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">2. Professional Advice</h2>
            <p className="text-muted-foreground">
              The content on this website does not constitute professional advice. Before making any business decisions or implementing automation systems, you should consult with qualified professionals who can assess your specific situation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">3. Results & Performance</h2>
            <p className="text-muted-foreground">
              While we work diligently to deliver high-quality automation systems, results may vary based on numerous factors including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your specific business context and requirements</li>
              <li>Quality of data and inputs provided</li>
              <li>Third-party service performance and availability</li>
              <li>Changes in technology or platform policies</li>
              <li>User adoption and proper system usage</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not guarantee specific outcomes, cost savings, or revenue increases.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">4. Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our automation systems may integrate with or rely on third-party services and APIs. We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Availability or performance of third-party services</li>
              <li>Changes to third-party APIs or policies</li>
              <li>Costs associated with third-party services</li>
              <li>Data handling practices of third-party providers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">5. Technology Changes</h2>
            <p className="text-muted-foreground">
              Technology evolves rapidly. Systems we build are based on current technology and best practices. We cannot guarantee compatibility with future technology changes, platform updates, or emerging standards without additional maintenance or upgrades.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, Cognivyx Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any third-party content or conduct</li>
              <li>Any interruption or cessation of services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">7. External Links</h2>
            <p className="text-muted-foreground">
              This website may contain links to external websites. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">8. Testimonials & Case Studies</h2>
            <p className="text-muted-foreground">
              Any testimonials or case studies presented represent individual experiences and do not guarantee that you will achieve similar results. Your results will depend on many factors unique to your situation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, and software, is the property of Cognivyx Technologies unless otherwise stated. Unauthorized use may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">10. Changes to This Disclaimer</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website following any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">11. Contact</h2>
            <p className="text-muted-foreground">
              If you have questions about this disclaimer, please contact us at contact@cognivyx.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
