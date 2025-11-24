import logo from "@/assets/cognivyx-logo.png";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Cognivyx" className="h-8" />
            <p className="text-sm text-muted-foreground">
              AI-powered automation systems that save time, reduce workload and grow your business.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/management-plans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Management Plans
                </Link>
              </li>
              <li>
                <Link to="/past-projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Past Projects
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Legal Overview
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/service-agreement" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Startup Service Agreement
                </Link>
              </li>
              <li>
                <Link to="/service-pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Service & Pricing Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@cognivyx.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@cognivyx.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cognivyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  X/Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Cognivyx Technologies. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
