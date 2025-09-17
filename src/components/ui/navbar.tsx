import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown,
  Zap,
  BarChart3,
  Users,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavbarProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export const Navbar = ({ onGetStarted, onSignIn }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: "Features",
      href: "#features",
      dropdown: [
        { name: "AI Analysis", href: "#ai-analysis", icon: Zap },
        { name: "Performance Tracking", href: "#tracking", icon: BarChart3 },
        { name: "Team Collaboration", href: "#team", icon: Users },
        { name: "Security", href: "#security", icon: Shield },
      ]
    },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "glass-effect shadow-lg py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 gradient-primary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">Salesence</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl shadow-xl border border-white/10 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                          >
                            <dropdownItem.icon className="w-5 h-5 text-purple-400" />
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={onSignIn}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button
              onClick={onGetStarted}
              className="gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 glow-effect"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={onSignIn}
              className="text-gray-300 hover:text-white text-sm px-3"
            >
              Sign In
            </Button>
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-effect rounded-xl border border-white/10 overflow-hidden animate-in slide-in-from-top-5 duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={closeMobileMenu}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                          >
                            <dropdownItem.icon className="w-4 h-4 text-purple-400" />
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Button
                  onClick={() => {
                    onGetStarted();
                    closeMobileMenu();
                  }}
                  className="w-full gradient-primary hover:opacity-90 text-white py-3 rounded-lg font-medium"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};