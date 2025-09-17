import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Star, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000">
          <Sparkles className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">
            AI-Powered Marketplace Analysis
          </span>
          <div className="ml-3 px-2 py-1 bg-purple-600/20 rounded-full">
            <span className="text-xs font-semibold text-purple-300">NEW</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-200">
          <span className="text-white">Unlock AI insights for</span>
          <br />
          <span className="text-gradient animate-gradient">any product</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-400">
          Transform your marketplace listings with AI-powered optimization that drives sales. 
          Get instant recommendations and boost your revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-600">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 glow-effect group"
          >
            Start Free Analysis
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => setIsVideoPlaying(true)}
            className="glass-effect hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-800">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 border-2 border-gray-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 10,000+ sellers</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9/5 rating</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000 delay-1000">
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500K+</div>
            <div className="text-gray-400">Products analyzed</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4 mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">35%</div>
            <div className="text-gray-400">Average sales increase</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4 mx-auto">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2.3s</div>
            <div className="text-gray-400">Analysis speed</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <p className="text-white text-lg">Demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};