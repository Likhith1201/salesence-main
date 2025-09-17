import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Shield, 
  Clock,
  Brain,
  Rocket,
  Users
} from "lucide-react";

const features = [
  { 
    icon: Brain, 
    title: "AI-Powered Analysis", 
    description: "Advanced machine learning algorithms analyze your products and provide actionable insights to boost sales and conversions.",
    gradient: "from-purple-500 to-indigo-500"
  },
  { 
    icon: Rocket, 
    title: "Instant Optimization", 
    description: "Get real-time suggestions for titles, descriptions, pricing, and images that drive results within minutes.",
    gradient: "from-indigo-500 to-blue-500"
  },
  { 
    icon: BarChart3, 
    title: "Performance Tracking", 
    description: "Monitor your improvements with detailed analytics and track which optimizations deliver the best ROI.",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Target, 
    title: "Multi-Platform Support", 
    description: "Works seamlessly with Amazon, eBay, Etsy, Shopify, and other major marketplaces from a single dashboard.",
    gradient: "from-cyan-500 to-teal-500"
  },
  { 
    icon: Shield, 
    title: "Enterprise Security", 
    description: "Your data is encrypted and secure. We never share your information with competitors or third parties.",
    gradient: "from-teal-500 to-green-500"
  },
  { 
    icon: Clock, 
    title: "Time-Saving Automation", 
    description: "Automate hours of manual research and optimization work. Focus on growing your business, not tedious tasks.",
    gradient: "from-green-500 to-emerald-500"
  }
];

export const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll(".feature-card");
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything you need to
            <br />
            <span className="text-gradient">dominate your market</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional-grade analysis tools powered by cutting-edge AI to help you compete 
            with top sellers in any marketplace.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={containerRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              data-index={index}
              className={`feature-card glass-effect border-white/10 hover:border-white/20 transition-all duration-500 hover-lift group ${
                visibleCards.has(index) 
                  ? 'animate-in fade-in-0 slide-in-from-bottom-8 duration-700' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 10,000+ successful sellers
            </h3>
            <p className="text-gray-300 mb-6">
              Start optimizing your listings today and see results within hours.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>✓ No credit card required</span>
              <span>✓ 5 free analyses</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};