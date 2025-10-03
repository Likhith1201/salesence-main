import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { BarChart3, Target, Users, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: t("advancedAnalytics"),
      description: t("advancedAnalyticsDesc"),
    },
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: t("precisionTools"),
      description: t("precisionToolsDesc"),
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: t("userCentricDesign"),
      description: t("userCentricDesignDesc"),
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: t("universalAccess"),
      description: t("universalAccessDesc"),
    },
  ];

  const stats = [
    { value: "10K+", label: t("activeUsers") },
    { value: "5M+", label: t("analysesRun") },
    { value: "99%", label: t("uptime") },
    { value: "24/7", label: t("support") },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
        {/* Badge */}
        <Badge className="mb-4 px-4 py-2 rounded-full bg-gray-800 text-white shadow-lg">
          <span className="flex items-center gap-2">
            <span className="text-purple-400">★</span> {t("aboutUs")}
          </span>
        </Badge>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">{t("transformingData")}</span>{" "}
          <span className="text-blue-900">{t("dataIntoDecisions")}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          {t("aboutDescription")}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <CardContent>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">{t("ourStory")}</h3>
          <p className="text-gray-300 leading-relaxed">
            {t("storyParagraph1")}
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            {t("storyParagraph2")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl font-bold text-blue-400">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
