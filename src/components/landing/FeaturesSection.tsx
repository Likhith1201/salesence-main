import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, BarChart3, Target, Shield, Clock } from "lucide-react";
import './FeaturesSection.css';

const features = [
  { icon: Zap, title: "Instant AI Analysis", description: "Get comprehensive product optimization suggestions in seconds, powered by advanced AI algorithms." },
  { icon: TrendingUp, title: "Sales Optimization", description: "Increase your conversion rates with data-driven title, description, and pricing recommendations." },
  { icon: BarChart3, title: "Performance Tracking", description: "Monitor your improvements with detailed analytics and track which suggestions drive results." },
  { icon: Target, title: "Multi-Platform", description: "Works with Amazon, eBay, Etsy, and other major marketplaces. One tool for all your listings." },
  { icon: Shield, title: "Data Security", description: "Your product data is encrypted and secure. We never share your information with competitors." },
  { icon: Clock, title: "Save Time", description: "What used to take hours of research now takes minutes. Focus on growing your business, not optimizing." }
];

export const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean[]>(Array(features.length).fill(false));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Track when feature cards become visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisible(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, { threshold: 0.2 });

    const cards = containerRef.current?.querySelectorAll(".feature-card");
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Track when the whole section is in view
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => setInView(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden 
      ${inView ? "cursor-crosshair" : "cursor-default"}`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-wall-street">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent gradient-underline">
              optimize your listings
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-buffed-plum">
            Professional-grade analysis tools that help you compete with top sellers in any marketplace.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              data-index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`feature-card bg-white border border-gray-200 shadow-md relative overflow-hidden transition-transform duration-500 cursor-pointer 
              ${visible[index] ? "animate-fade-up" : "opacity-0 translate-y-10"}`}
            >
              <CardHeader className="pb-3 sm:pb-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 flex-shrink-0 ${
                      hoveredIndex === index
                        ? "bg-primary text-white scale-110 shadow-lg"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle
                    className={`text-base sm:text-lg font-semibold leading-tight transition-colors duration-300 ${
                      hoveredIndex === index ? "text-primary" : "text-wall-street"
                    }`}
                  >
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-sm sm:text-base text-buffed-plum leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
