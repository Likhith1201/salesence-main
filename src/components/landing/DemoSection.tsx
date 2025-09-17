import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Package, ExternalLink, AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import { validateProductUrl, extractProductInfo } from "@/utils/urlValidation";
import { generateMockAnalysis, MockAnalysisResult } from "@/utils/mockDataGenerator";
import { AnalysisResults } from "@/components/analysis/AnalysisResults";

export const DemoSection = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [analysisResult, setAnalysisResult] = useState<MockAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    setValidationError("");
    
    const validation = validateProductUrl(url);
    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid URL");
      return;
    }
    
    setIsAnalyzing(true);
    
    const productInfo = extractProductInfo(url);
    const loadingTime = 2000 + Math.random() * 1000;
    
    setTimeout(() => {
      const mockAnalysis = generateMockAnalysis(url, productInfo.marketplace, productInfo.platform);
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
    }, loadingTime);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (validationError) {
      setValidationError("");
    }
  };

  const handleReset = () => {
    setUrl("");
    setAnalysisResult(null);
    setValidationError("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Try It Free</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              See the magic in action
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Paste any product URL and watch our AI analyze it in real-time. 
              No signup required for your first analysis.
            </p>
          </div>

          {/* Demo Input */}
          <Card className="glass-effect border-white/10 shadow-2xl mb-12">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <Input
                    type="url"
                    placeholder="https://amazon.com/product/... or any marketplace URL"
                    value={url}
                    onChange={handleInputChange}
                    className={`h-16 pl-12 pr-4 text-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 ${
                      validationError ? 'border-red-400 animate-pulse' : ''
                    }`}
                    disabled={isAnalyzing}
                  />
                  
                  {validationError && (
                    <div className="absolute inset-y-0 right-4 flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={!url.trim() || isAnalyzing}
                  className="w-full h-16 text-lg font-semibold gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                      Analyzing your product...
                    </>
                  ) : (
                    <>
                      <Search className="mr-3 h-6 w-6" />
                      Analyze Free
                    </>
                  )}
                </Button>

                {validationError && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 rounded-lg p-3">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {validationError}
                  </div>
                )}

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Free analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>No signup required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span>Instant results</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results or Empty State */}
          {analysisResult ? (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Analysis Complete</h3>
                  <p className="text-gray-300">Here's what our AI discovered about your product</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="glass-effect border-white/20 text-white hover:bg-white/10"
                >
                  Analyze Another Product
                </Button>
              </div>
              <AnalysisResults analysis={analysisResult} />
            </div>
          ) : !isAnalyzing && (
            <div className="text-center py-16">
              <div className="glass-effect rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Package className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Ready to analyze your first product?
                </h3>
                <p className="text-gray-300 mb-6">
                  Paste any product URL above to get started with your free analysis.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Boost sales by up to 35%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};