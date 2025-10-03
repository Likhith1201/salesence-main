import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User, Sparkles, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatbotKnowledge {
  [key: string]: {
    response: string;
    suggestions?: string[];
  };
}

export const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chatbot knowledge base with website information
  const knowledge: ChatbotKnowledge = {
    // Greetings (English and Turkish)
    'hello|hi|hey|greetings|merhaba|selam|naber': {
      response: t('chatbotGreeting'),
      suggestions: [t('chatbotWhatIsSalesence'), t('chatbotPricingInfo'), t('chatbotHowToStart')]
    },

    // About Salesence (English and Turkish)
    'what is salesence|about salesence|what does salesence do|salesence nedir|salesence hakkında|salesence ne yapar': {
      response: t('chatbotAboutSalesence'),
      suggestions: [t('chatbotFeatures'), t('chatbotPricing'), t('chatbotDemo')]
    },

    // Pricing (English and Turkish)
    'pricing|price|cost|plans|how much|fiyat|fiyatlandırma|plan|ne kadar|ücret': {
      response: t('chatbotPricingResponse'),
      suggestions: [t('chatbotStarterPlan'), t('chatbotProfessionalPlan'), t('chatbotEnterprisePlan')]
    },

    // Features (English and Turkish)
    'features|what can it do|capabilities|functionality|özellik|neler yapabilir|işlevsellik': {
      response: t('chatbotFeaturesResponse'),
      suggestions: [t('chatbotAIAnalysis'), t('chatbotOptimization'), t('chatbotTracking')]
    },

    // Getting Started (English and Turkish)
    'how to start|get started|begin|setup|nasıl başlar|başlangıç|kurulum|başla': {
      response: t('chatbotGetStartedResponse'),
      suggestions: [t('chatbotSignUp'), t('chatbotDemo'), t('chatbotContact')]
    },

    // Marketplaces (English and Turkish)
    'marketplaces|platforms|amazon|ebay|shopify|pazaryeri|platform': {
      response: t('chatbotMarketplacesResponse'),
      suggestions: [t('chatbotSupportedPlatforms'), t('chatbotIntegration'), t('chatbotDemo')]
    },

    // General Support
    'help|support|contact|assistance|yardım|destek|iletişim': {
      response: t('chatbotSupportResponse'),
      suggestions: [t('chatbotHelpCenter'), t('chatbotContactUs'), t('chatbotLiveChat')]
    },

    // Specific Support Actions
    'open help center|help center|yardım merkezi|yardım merkezini aç': {
      response: t('chatbotHelpCenterResponse'),
      suggestions: [t('chatbotContactUs'), t('chatbotLiveChat'), t('chatbotFeatures')]
    },

    'contact us directly|contact directly|doğrudan iletişim|direkt iletişim': {
      response: t('chatbotContactDirectResponse'),
      suggestions: [t('chatbotHelpCenter'), t('chatbotLiveChat'), t('chatbotDemo')]
    },

    'live chat support|live chat|canlı sohbet|canlı destek': {
      response: t('chatbotLiveChatResponse'),
      suggestions: [t('chatbotContactUs'), t('chatbotHelpCenter'), t('chatbotDemo')]
    },

    // Free Trial (English and Turkish)
    'free trial|free|trial|demo|ücretsiz|deneme|demo': {
      response: t('chatbotFreeTrialResponse'),
      suggestions: [t('chatbotStartFree'), t('chatbotDemo'), t('chatbotFeatures')]
    },

    // Optimization
    'optimization|optimize|improve|titles|descriptions|prices': {
      response: t('chatbotOptimizationResponse'),
      suggestions: [t('chatbotAIAnalysis'), t('chatbotFeatures'), t('chatbotDemo')]
    },

    // Cross-selling and trends
    'trends|competitor|cross selling|insights|opportunities': {
      response: t('chatbotTrendsResponse'),
      suggestions: [t('chatbotFeatures'), t('chatbotAIAnalysis'), t('chatbotDemo')]
    },

    // Early users
    'early users|onboarding|join|beta|early access': {
      response: t('chatbotEarlyUsersResponse'),
      suggestions: [t('chatbotSignUp'), t('chatbotStartFree'), t('chatbotContact')]
    },

    // Scale
    'scale|scaling|10 products|10000 products|manage products': {
      response: t('chatbotScaleResponse'),
      suggestions: [t('chatbotFeatures'), t('chatbotPricing'), t('chatbotDemo')]
    },

    // Careers and Jobs (English and Turkish)
    'careers|jobs|job openings|hiring|work|employment|kariyer|iş|iş ilanları|çalışma|istihdam': {
      response: t('chatbotCareersResponse'),
      suggestions: [t('chatbotViewJobs'), t('chatbotWorkCulture'), t('chatbotContact')]
    },

    // Company Culture
    'culture|work environment|team|benefits|office|kültür|çalışma ortamı|takım|yan haklar|ofis': {
      response: t('chatbotCultureResponse'),
      suggestions: [t('chatbotCareers'), t('chatbotViewJobs'), t('chatbotContact')]
    },

    // Remote Work
    'remote|remote work|work from home|uzaktan|uzaktan çalışma|evden çalışma': {
      response: t('chatbotRemoteWorkResponse'),
      suggestions: [t('chatbotCareers'), t('chatbotViewJobs'), t('chatbotWorkCulture')]
    },

    // Company Name and Details
    'company name|business name|organization|şirket adı|işletme adı|organizasyon': {
      response: t('chatbotCompanyNameResponse'),
      suggestions: [t('chatbotAboutCompany'), t('chatbotContact'), t('chatbotLocation')]
    },

    // Company Details and Information
    'details|company details|business details|information|info|detaylar|şirket detayları|bilgi': {
      response: t('chatbotCompanyDetailsResponse'),
      suggestions: [t('chatbotFeatures'), t('chatbotAboutCompany'), t('chatbotContact')]
    },

    // Contact Information
    'contact number|phone|phone number|telephone|call|telefon|telefon numarası|ara': {
      response: t('chatbotContactNumberResponse'),
      suggestions: [t('chatbotContactUs'), t('chatbotLocation'), t('chatbotLiveChat')]
    },

    // Location and Address
    'location|address|where|office|headquarters|konum|adres|nerede|ofis|merkez': {
      response: t('chatbotLocationResponse'),
      suggestions: [t('chatbotContact'), t('chatbotRemoteWork'), t('chatbotCareers')]
    },

    // Offers and Services
    'offers|services|what do you offer|solutions|products|teklifler|hizmetler|ne sunuyorsunuz|çözümler|ürünler': {
      response: t('chatbotOffersResponse'),
      suggestions: [t('chatbotFeatures'), t('chatbotPricing'), t('chatbotDemo')]
    },

    // Social Media and LinkedIn
    'linkedin|social media|social|facebook|twitter|sosyal medya|sosyal': {
      response: t('chatbotSocialMediaResponse'),
      suggestions: [t('chatbotContact'), t('chatbotAboutCompany'), t('chatbotCareers')]
    },

    // Founded and History
    'founded|when started|history|established|kuruldu|ne zaman başladı|tarihçe|kuruluş': {
      response: t('chatbotFoundedResponse'),
      suggestions: [t('chatbotAboutCompany'), t('chatbotCareers'), t('chatbotContact')]
    },

    // Team Size
    'team size|employees|staff|how many people|ekip büyüklüğü|çalışan|personel|kaç kişi': {
      response: t('chatbotTeamSizeResponse'),
      suggestions: [t('chatbotCareers'), t('chatbotWorkCulture'), t('chatbotAboutCompany')]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t('chatbotWelcome'),
        isBot: true,
        timestamp: new Date(),
        suggestions: [t('chatbotWhatIsSalesence'), t('chatbotPricingInfo'), t('chatbotHowToStart')]
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, t]);

  const findBestMatch = (userInput: string): string | null => {
    const input = userInput.toLowerCase().trim();

    // Direct exact matches first
    for (const pattern in knowledge) {
      const keywords = pattern.split('|');
      if (keywords.some(keyword => input === keyword || input.includes(keyword))) {
        return pattern;
      }
    }

    // Fuzzy matching for Turkish characters and variations
    const normalizedInput = input
      .replace(/[çćč]/g, 'c')
      .replace(/[ğĝ]/g, 'g')
      .replace(/[ıîï]/g, 'i')
      .replace(/[öôõ]/g, 'o')
      .replace(/[şśŝ]/g, 's')
      .replace(/[üûú]/g, 'u');

    for (const pattern in knowledge) {
      const keywords = pattern.split('|');
      if (keywords.some(keyword => {
        const normalizedKeyword = keyword
          .replace(/[çćč]/g, 'c')
          .replace(/[ğĝ]/g, 'g')
          .replace(/[ıîï]/g, 'i')
          .replace(/[öôõ]/g, 'o')
          .replace(/[şśŝ]/g, 's')
          .replace(/[üûú]/g, 'u');
        return normalizedInput.includes(normalizedKeyword) || normalizedKeyword.includes(normalizedInput);
      })) {
        return pattern;
      }
    }

    return null;
  };

  const generateResponse = (userInput: string): { response: string; suggestions?: string[] } => {
    const match = findBestMatch(userInput);

    if (match) {
      return knowledge[match];
    }

    // Default response for unmatched queries
    return {
      response: t('chatbotDefaultResponse'),
      suggestions: [t('chatbotContact'), t('chatbotHelpCenter'), t('chatbotTryAgain')]
    };
  };

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const { response, suggestions } = generateResponse(text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Handle suggestions with specific responses to avoid generic answers
    const suggestionMappings: { [key: string]: string } = {
      // English suggestions
      'Open Help Center': 'open help center',
      'Contact us directly': 'contact us directly',
      'Live chat support': 'live chat support',
      'What is Salesence?': 'what is salesence',
      'Tell me about pricing': 'pricing',
      'How do I get started?': 'how to start',

      // Turkish suggestions
      'Yardım Merkezini aç': 'yardım merkezi',
      'Doğrudan iletişim': 'doğrudan iletişim',
      'Canlı sohbet desteği': 'canlı sohbet',
      'Salesence nedir?': 'salesence nedir',
      'Fiyatlandırma hakkında bilgi ver': 'fiyat',
      'Nasıl başlarım?': 'nasıl başlar',
      'İş ilanlarını görüntüle': 'careers',
      'Çalışma kültürü hakkında bilgi ver': 'culture',
      'Kariyer fırsatları': 'careers',

      // Additional English career suggestions
      'View job openings': 'careers',
      'Tell me about work culture': 'culture',
      'Career opportunities': 'careers',

      // Company information suggestions
      'About the company': 'what is salesence',
      'Location & address': 'location',
      'Şirket hakkında': 'salesence nedir',
      'Konum ve adres': 'location'
    };

    const mappedInput = suggestionMappings[suggestion] || suggestion;
    handleSendMessage(mappedInput);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[600px] mb-4 glass-effect border-white/20 shadow-2xl animate-in slide-in-from-bottom-5">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Salesence AI</CardTitle>
                  <p className="text-sm opacity-90">{t('chatbotSubtitle')}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-700 text-white'
                    }`}>
                      {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800 rounded-bl-sm'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-sm'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Suggestions */}
              {messages.length > 0 && messages[messages.length - 1].isBot && messages[messages.length - 1].suggestions && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbotPlaceholder')}
                  className="flex-1 rounded-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-10 h-10 p-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {isOpen ? (
          <ArrowUp className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-white" />
            <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
        )}
      </Button>
    </div>
  );
};