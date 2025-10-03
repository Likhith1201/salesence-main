import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Brain,
  Rocket,
  BarChart3,
  Target,
  Shield,
  Clock,
  Users
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t("aiPoweredAnalysisTitle"),
      description: t("aiPoweredAnalysisDesc"),
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Rocket,
      title: t("instantOptimizationTitle"),
      description: t("instantOptimizationDesc"),
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: t("performanceTrackingTitle"),
      description: t("performanceTrackingDesc"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: t("multiPlatformTitle"),
      description: t("multiPlatformDesc"),
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Shield,
      title: t("enterpriseSecurityTitle"),
      description: t("enterpriseSecurityDesc"),
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Clock,
      title: t("timeSavingTitle"),
      description: t("timeSavingDesc"),
      gradient: "from-green-500 to-emerald-500"
    }
  ];

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
            <span className="text-sm font-medium text-gray-300">{t("powerfulFeatures")}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t("everythingYouNeed")}
            <br />
            <span className="text-indigo-400 block tracking-tight drop-shadow-lg">
              {t("dominateYourMarket")}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("professionalGradeAnalysis")}
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
                  <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
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
              {t("joinSuccessfulSellers")}
            </h3>
            <p className="text-gray-300 mb-6">
              {t("startOptimizingToday")}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>{t("noCreditCardRequired")}</span>
              <span>{t("freeAnalyses")}</span>
              <span>{t("cancelAnytime")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
