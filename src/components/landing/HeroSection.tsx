import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brilliance via-pale-grey to-lavender-blue/30" />

      {/* Floating sparkles */}
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-20 left-1/4 animate-float-slow opacity-50" />
      <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/3 right-1/4 animate-float-slow delay-200 opacity-40" />
      <div className="absolute w-2 h-2 bg-purple-300 rounded-full bottom-20 left-1/3 animate-float-slow delay-400 opacity-30" />

      {/* Content */}
      <div className="relative container px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-little-dipper bg-brilliance/50 px-3 py-1 text-xs sm:text-sm font-medium backdrop-blur-sm animate-badge-glow">
            <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse-fast" />
            AI-Powered Marketplace Analysis
          </div>

          {/* Headline */}
          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-wall-street animate-fade-in-up delay-100">
            Unlock AI insights for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-glow relative">
              any product
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full blur-md animate-pulse-fast"></span>
            </span>
          </h1>

          {/* Subline */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-buffed-plum max-w-3xl mx-auto animate-fade-in-up delay-200">
            Paste a link, get instant recommendations. Transform your marketplace listings 
            with AI-powered optimization that drives sales.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="gradient-primary shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 w-full sm:w-auto transform hover:-translate-y-1 hover:scale-105"
              onClick={onGetStarted}
            >
              Start Free Analysis
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <div className="flex items-center space-x-2 text-xs sm:text-sm text-buffed-plum animate-fade-in-up delay-400">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-garish-green border-2 border-white animate-pulse-fast" />
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary border-2 border-white animate-pulse-fast delay-100" />
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-accent border-2 border-white animate-pulse-fast delay-200" />
              </div>
              <span>Trusted by 10,000+ sellers</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-16 animate-fade-in-up delay-500">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street animate-count-up">500K+</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">Products analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street animate-count-up">35%</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">Average sales increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street animate-count-up">4.9/5</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-blob rotate-12" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent/5 rounded-full blur-3xl animate-blob rotate-45 delay-500" />

      {/* Animations */}
      <style>{`
        @keyframes pulse-fast { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }
        @keyframes gradient-glow { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
        @keyframes float-slow { 0% { transform: translateY(0px);} 50% { transform: translateY(-15px);} 100% { transform: translateY(0px);} }
        @keyframes blob { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(10px,-10px) rotate(20deg);} }

        .animate-pulse-fast { animation: pulse-fast 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-gradient-glow { background-size: 200% auto; animation: gradient-glow 4s linear infinite; }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-badge-glow { animation: pulse-fast 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};
