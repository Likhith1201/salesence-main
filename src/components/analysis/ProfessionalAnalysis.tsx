import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Zap, 
  TrendingUp, 
  Star, 
  ExternalLink,
  Image as ImageIcon,
  DollarSign,
  Target,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  BarChart3,
  Heart,
  Copy,
  Share2,
  X,
  ChevronDown,
  ChevronUp,
  Crown,
  Shield,
  Zap as ZapIcon,
  Check,
  CreditCard,
  Building,
  Coins
} from "lucide-react";
import { useAnalysis } from "@/hooks/useAnalysis";
import "./AnalysisAnimations.css";

export const ProfessionalAnalysis = () => {
  const {
    state,
    startAnalysis,
    toggleSuggestion,
    toggleSuggestionExpansion,
    setShowPaywall,
    resetAnalysis,
    formatTimeRemaining,
    setState
  } = useAnalysis();

  const {
    url,
    isAnalyzing,
    currentStage,
    analysisResult,
    suggestions,
    showPaywall,
    expandedSuggestions,
    analysisCount,
    timeRemaining
  } = state;

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    await startAnalysis(url);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'border-purple-500 bg-purple-50 text-purple-700';
      case 'medium': return 'border-blue-500 bg-blue-50 text-blue-700';
      case 'low': return 'border-gray-500 bg-gray-50 text-gray-700';
      default: return 'border-gray-500 bg-gray-50 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'title': return <MessageSquare className="h-4 w-4" />;
      case 'price': return <DollarSign className="h-4 w-4" />;
      case 'image': return <ImageIcon className="h-4 w-4" />;
      case 'description': return <MessageSquare className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getQualityColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-orange-600";
    return "text-red-600";
  };

  const getQualityBadgeColor = (score: number) => {
    if (score >= 85) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 70) return "bg-orange-100 text-orange-800 border-orange-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
        {/* Stage 1: Initial Input State */}
        {!isAnalyzing && !analysisResult && (
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                AI-Powered Product Analysis
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Get instant optimization suggestions for any marketplace product. 
                Your first analysis is completely free.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto bg-white shadow-xl border-0 animate-fade-in-scale">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="relative flex-1">
                    <Input
                      type="url"
                      placeholder="https://amazon.com/product... or any marketplace URL"
                      value={url}
                      onChange={(e) => setState(prev => ({ ...prev, url: e.target.value }))}
                      className="h-12 sm:h-14 pl-4 pr-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 focus-ring"
                    />
                  </div>
                  <Button
                    onClick={handleAnalyze}
                    disabled={!url.trim()}
                    className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full"
                  >
                    <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Analyze Free
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span>Your first analysis is free—add a product above</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Empty State Illustration */}
            <div className="mt-10 sm:mt-12">
              <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Search className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 stroke-1" />
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Your first analysis is free—add a product above
              </p>
            </div>
          </div>
        )}

        {/* Stage 2: Analysis Loading State */}
        {isAnalyzing && (
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Analyzing Your Product
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Our AI is examining every detail to provide you with actionable insights
              </p>
            </div>

            <Card className="max-w-2xl mx-auto bg-white shadow-xl border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                      <span>Progress</span>
                      <span>{currentStage?.progress || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div 
                        className="h-full progress-bar-fill rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${currentStage?.progress || 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Status Message */}
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-medium text-gray-900 animate-pulse">
                      {currentStage?.message || "Initializing..."}
                    </p>
                  </div>

                  {/* Loading Animation */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 spinner"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skeleton Loader */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 animate-pulse">
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                  <div className="aspect-[4/3] bg-gray-200 rounded-xl"></div>
                  <div className="space-y-4">
                    <div className="h-4 sm:h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-6 sm:h-8 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3 & 4: Results and AI Suggestions */}
        {analysisResult && !isAnalyzing && (
          <div className="space-y-6 sm:space-y-8">
            {/* Results Header */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Analysis Complete
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Here's what our AI found for your product
              </p>
            </div>

            {/* Product Overview Card */}
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden animate-slide-in-bottom">
              <CardContent className="p-0">
                <div className="grid gap-0 lg:grid-cols-2">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      <img 
                        src={analysisResult.product.imageUrl} 
                        alt={analysisResult.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge 
                      className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-xs ${getQualityBadgeColor(analysisResult.product.imageQuality)}`}
                    >
                      <ImageIcon className="h-3 w-3 mr-1" />
                      Image Quality: {analysisResult.product.imageQuality}%
                    </Badge>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          {analysisResult.product.name}
                        </h3>
                        <Badge variant="outline" className="mb-3 text-xs">
                          {analysisResult.marketplace}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-sm sm:text-base">{analysisResult.product.rating}</span>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">({analysisResult.product.reviewCount.toLocaleString()} reviews)</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900 font-mono">
                          {analysisResult.product.price}
                        </span>
                        {analysisResult.product.originalPrice && (
                          <span className="text-lg sm:text-xl text-gray-400 line-through font-mono">
                            {analysisResult.product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Original Listing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                  AI-Powered Optimization Suggestions
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Based on analysis of 50,000+ similar products
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {suggestions.map((suggestion) => (
                  <Card 
                    key={suggestion.id}
                    className={`suggestion-card bg-white shadow-lg border-0 rounded-xl transition-all duration-200 hover:shadow-xl hover-lift ${
                      suggestion.applied ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg flex-shrink-0 ${getImpactColor(suggestion.impact)}`}>
                            {getTypeIcon(suggestion.type)}
                          </div>
                          
                          <div className="flex-1 space-y-2 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                              <Badge 
                                variant="outline" 
                                className={`text-xs font-medium w-fit ${
                                  suggestion.impact === 'high' ? 'border-purple-500 text-purple-700' :
                                  suggestion.impact === 'medium' ? 'border-blue-500 text-blue-700' :
                                  'border-gray-500 text-gray-700'
                                }`}
                              >
                                {suggestion.impact.charAt(0).toUpperCase() + suggestion.impact.slice(1)} Impact
                              </Badge>
                              <span className="text-xs sm:text-sm text-gray-500">
                                {suggestion.improvement}
                              </span>
                            </div>
                            
                            <p className="text-gray-900 font-medium text-sm sm:text-base">
                              {suggestion.text}
                            </p>

                            {expandedSuggestions.has(suggestion.id) && (
                              <div className="mt-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                                <p className="text-xs sm:text-sm text-gray-600">
                                  This suggestion is based on our analysis of similar products in your category. 
                                  Implementing this change has shown consistent improvements in conversion rates 
                                  and click-through performance.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 ml-2 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSuggestionExpansion(suggestion.id)}
                            className="text-gray-500 hover:text-gray-700 p-1 sm:p-2"
                          >
                            {expandedSuggestions.has(suggestion.id) ? 
                              <ChevronUp className="h-4 w-4" /> : 
                              <ChevronDown className="h-4 w-4" />
                            }
                          </Button>
                           
                          <Button
                            variant={suggestion.applied ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSuggestion(suggestion.id)}
                            className={`text-xs px-2 sm:px-3 ${suggestion.applied ? 
                              "bg-green-600 hover:bg-green-700 text-white" : 
                              "border-purple-500 text-purple-700 hover:bg-purple-50"
                            }`}
                          >
                            {suggestion.applied ? (
                              <>
                                <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                Applied
                              </>
                            ) : (
                              "Apply"
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stage 5: Engagement Hooks */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white shadow-lg border-0 rounded-xl text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">97% Analysis Confidence</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Based on 50,000+ similar products</p>
              </Card>

              <Card className="bg-white shadow-lg border-0 rounded-xl text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Analysis completed in 2.3 seconds</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Lightning-fast AI processing</p>
              </Card>

              <Card className="bg-white shadow-lg border-0 rounded-xl text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Potential revenue increase: +$1,247/month</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Based on similar optimizations</p>
              </Card>

              <Card className="bg-white shadow-lg border-0 rounded-xl text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Join 2,847 sellers already optimizing</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Proven results</p>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto"
                  onClick={() => setShowPaywall(true)}
                >
                  <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get More Analyses
                </Button>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Heart className="h-4 w-4 mr-2" />
                    Save Analysis
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Results
                  </Button>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-gray-500 px-4">
                Free analysis expires in {formatTimeRemaining(timeRemaining)} • {analysisCount} of 3 free analyses used
              </div>
            </div>
          </div>
        )}

        {/* Stage 6: Paywall Modal */}
        {showPaywall && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur z-50 flex items-center justify-center p-4">
            <Card className="bg-white shadow-2xl border-0 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPaywall(false)}
                      className="text-gray-500 hover:text-gray-700 p-1"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Unlock unlimited product insights
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                      Get unlimited analyses, advanced AI recommendations, and performance tracking
                    </p>
                  </div>

                  {/* Pricing Options */}
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <Card className="border-2 border-gray-200 hover:border-purple-500 transition-colors cursor-pointer">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Monthly</h3>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$29</div>
                        <p className="text-gray-500 text-sm">per month</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-500 bg-purple-50 relative">
                      <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white px-2 sm:px-3 py-1 text-xs">
                          Save 40%
                        </Badge>
                      </div>
                      <CardContent className="p-4 sm:p-6 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Annual</h3>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$199</div>
                        <p className="text-gray-500 text-sm">per year</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Everything included:</h4>
                    <div className="grid gap-2 text-left max-w-md mx-auto">
                      {[
                        "Unlimited product analyses",
                        "Advanced AI recommendations",
                        "Performance tracking & analytics",
                        "Priority customer support",
                        "Export reports & insights",
                        "Team collaboration tools"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 sm:py-3 rounded-xl font-semibold">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Start Free Trial
                    </Button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Card</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Bank Transfer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coins className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Crypto</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    14-day free trial • Cancel anytime • No setup fees
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}; 