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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "glass border-border/70 py-3"
          : "bg-background/70 backdrop-blur-md border-border/50 py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="Cognivyx" className="h-8 md:h-10" />
              <span className="font-heading font-bold text-xl md:text-2xl text-foreground">Cognivyx</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/' ? 'text-foreground' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/services"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/services' ? 'text-foreground' : ''}`}
            >
              Services
              {location.pathname === '/services' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/packages"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/packages' ? 'text-foreground' : ''}`}
            >
              Packages
              {location.pathname === '/packages' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/management-plans"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/management-plans' ? 'text-foreground' : ''}`}
            >
              Management Plans
              {location.pathname === '/management-plans' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/past-projects"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/past-projects' ? 'text-foreground' : ''}`}
            >
              Work
              {location.pathname === '/past-projects' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/newsletter"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname.startsWith('/newsletter') ? 'text-foreground' : ''}`}
            >
              Newsletter
              {location.pathname.startsWith('/newsletter') && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/about"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname === '/about' ? 'text-foreground' : ''}`}
            >
              About
              {location.pathname === '/about' && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/legal"
              className={`group relative text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${location.pathname.startsWith('/legal') ? 'text-foreground' : ''}`}
            >
              Legal
              {location.pathname.startsWith('/legal') && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
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
              to="/"
              onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
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
              Work
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
            <Link
              to="/legal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
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
