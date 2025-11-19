import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/cognivyx-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Cognivyx" className="h-8 md:h-10" />
            <span className="font-heading font-bold text-xl md:text-2xl text-foreground">Cognivyx</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/services' ? 'text-foreground' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/packages"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/packages' ? 'text-foreground' : ''}`}
            >
              Packages
            </Link>
            <Link
              to="/management-plans"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/management-plans' ? 'text-foreground' : ''}`}
            >
              Management Plans
            </Link>
            <Link
              to="/past-projects"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/past-projects' ? 'text-foreground' : ''}`}
            >
              Past Projects
            </Link>
            <Link
              to="/case-studies"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/case-studies' ? 'text-foreground' : ''}`}
            >
              Case Studies
            </Link>
            <Link
              to="/newsletter"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/newsletter' ? 'text-foreground' : ''}`}
            >
              Newsletter
            </Link>
            <Link
              to="/about"
              className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/about' ? 'text-foreground' : ''}`}
            >
              About
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 glow-primary"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-6 space-y-4 animate-fade-in">
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/packages"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Packages
            </Link>
            <Link
              to="/management-plans"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Management Plans
            </Link>
            <Link
              to="/past-projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Past Projects
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/newsletter"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Button
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
