
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, TrendingUp, BarChart3, ArrowRight, Play, Menu, X } from "lucide-react";
import  { HeroSection  }from "@/components/landing/HeroSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AuthModal } from "@/components/auth/AuthModal";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-little-dipper bg-brilliance/95 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto flex h-18 sm:h-20 items-center justify-between px-3 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 min-w-0 flex-1 sm:flex-none">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg gradient-primary flex-shrink-0">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="text-base sm:text-xl font-bold text-wall-street truncate">Salesence</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-buffed-plum hover:text-wall-street transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-buffed-plum hover:text-wall-street transition-colors">
              Pricing
            </a>
            <Button variant="ghost" size="sm" onClick={handleSignIn} className="text-buffed-plum hover:text-wall-street">
              Sign in
            </Button>
            <Button size="sm" className="gradient-primary text-white hover:opacity-90" onClick={handleGetStarted}>
              Get Started
            </Button>
          </nav>
          
          <div className="flex md:hidden items-center space-x-2 flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={handleSignIn} className="text-buffed-plum hover:text-wall-street text-sm px-2 py-1 h-9 min-w-[60px]">
              Sign in
            </Button>
            <Button size="sm" className="gradient-primary text-white hover:opacity-90 text-sm px-3 py-1 h-9 min-w-[50px]" onClick={handleGetStarted}>
              Start
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="md:hidden p-2 h-9 w-9 flex-shrink-0">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
                {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-little-dipper bg-brilliance/95 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto px-3 py-4 space-y-4">
              <a 
                href="#features" 
                onClick={closeMobileMenu}
                className="block text-base font-medium text-buffed-plum hover:text-wall-street transition-colors py-3 px-2 -mx-2 hover:bg-little-dipper/10 rounded-lg"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={closeMobileMenu}
                className="block text-base font-medium text-buffed-plum hover:text-wall-street transition-colors py-3 px-2 -mx-2 hover:bg-little-dipper/10 rounded-lg"
              >
                Pricing
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <DemoSection />
        <FeaturesSection />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-pale-grey">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-wall-street">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-buffed-plum">
                Start free, scale as you grow. No hidden fees, no surprises.
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12 max-w-5xl mx-auto">
              {/* Free Plan */}
              <Card className="bg-brilliance border-diamond-cut shadow-subtle hover:shadow-hover transition-all duration-200">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-wall-street">Free</CardTitle>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-wall-street">$0</span>
                    <span className="text-sm sm:text-base text-buffed-plum">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3 text-sm text-buffed-plum">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>5 free analyses per month</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Basic optimization tips</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6" onClick={handleGetStarted}>
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
              
              {/* Pro Plan */}
              <Card className="bg-brilliance border-primary shadow-hover hover:shadow-hover transition-all duration-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-wall-street">Pro</CardTitle>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-wall-street">$29</span>
                    <span className="text-sm sm:text-base text-buffed-plum">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3 text-sm text-buffed-plum">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Unlimited analyses</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Advanced AI recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Performance tracking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 gradient-primary" onClick={handleGetStarted}>
                    Start Pro Trial
                  </Button>
                </CardContent>
              </Card>
              
              {/* Enterprise Plan */}
              <Card className="bg-brilliance border-diamond-cut shadow-subtle hover:shadow-hover transition-all duration-200">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-wall-street">Enterprise</CardTitle>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-wall-street">$99</span>
                    <span className="text-sm sm:text-base text-buffed-plum">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3 text-sm text-buffed-plum">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-garish-green rounded-full mr-3 flex-shrink-0"></div>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6" onClick={handleGetStarted}>
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-brilliance">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-wall-street">
                Ready to optimize your listings?
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-buffed-plum">
                Join thousands of sellers who've increased their sales with AI-powered optimization.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link to="/analysis" className="w-full sm:w-auto">
                  <Button size="lg" className="gradient-primary w-full sm:w-auto">
                    Start your free analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="text-wall-street w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Watch demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-little-dipper bg-background">
        <div className="container px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded gradient-primary">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Salesence</span>
            </div>
            <p className="text-xs sm:text-sm text-buffed-plum text-center">
              © 2024 Salesence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
