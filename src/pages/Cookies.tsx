import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cookies = () => {
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
            <h1 className="font-heading text-4xl font-bold mb-4">Cookies Notice</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">1. What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">2. How We Use Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to understand how you use our website, remember your preferences, and improve our services. This includes analytics cookies to understand website traffic and performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">3. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and choices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">4. Managing Cookies</h2>
            <p className="text-muted-foreground">
              You can control and manage cookies through your browser settings. However, disabling cookies may affect your experience on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              We may use third-party services that set cookies on our website, such as analytics providers. These cookies are subject to the respective third parties' privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">6. Updates to This Notice</h2>
            <p className="text-muted-foreground">
              We may update this Cookies Notice from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about our use of cookies, please contact us at contact@cognivyx.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
