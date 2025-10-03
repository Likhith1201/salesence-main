import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { CheckCircle2, Mail, MapPin, Phone, Send, Clock, Sparkles, Home, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Chatbot } from "@/components/chatbot/Chatbot";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Animation on component mount
    setIsVisible(true);
    
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      setIsVisible(false);
    };
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Form submitted:", formData);

    // Simulate API call with a more realistic delay
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        navigate("/");
      }, 3000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-purple-900 text-white flex items-center justify-center px-4 py-12 relative overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Back to Home Button */}
      <Link 
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-300 group bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50"
      >
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
{t("backToHome")}
      </Link>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik02MCAwTDAgNjBNNjAgNjBMMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 border border-blue-500/10 rotate-45 animate-pulse delay-1500"></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-float"
            style={{
              width: `${3 + Math.random() * 10}px`,
              height: `${3 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + i * 3}s`
            }}
          />
        ))}
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-move-line"></div>
          <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-move-line-vertical delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-move-line delay-2000"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        }
        @keyframes move-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        @keyframes move-line-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-move-line { animation: move-line 20s linear infinite; }
        .animate-move-line-vertical { animation: move-line-vertical 15s linear infinite; }
      `}</style>
      
      <div className="max-w-4xl w-full z-10 transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            {t("getInTouch")}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("contactDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <Card className="bg-gray-900/70 backdrop-blur-md border border-gray-700/50 shadow-xl rounded-xl lg:col-span-1 transform transition-all duration-300 hover:border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300 flex items-center">
                <Sparkles className="mr-2 h-5 w-5" />
                {t("contactInformation")}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {t("reachOutChannels")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">{t("emailUs")}</h3>
                  <p className="text-gray-400 text-sm">support@company.com</p>
                </div>
              </div>
              
              <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">{t("callUs")}</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">{t("visitUs")}</h3>
                  <p className="text-gray-400 text-sm">123 Business Street, City</p>
                </div>
              </div>
              
              <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                <div className="bg-green-600/20 p-3 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">{t("workingHours")}</h3>
                  <p className="text-gray-400 text-sm">{t("workingTime")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form Card */}
          <Card className="bg-gray-900/70 backdrop-blur-md border border-gray-700/50 shadow-xl rounded-xl lg:col-span-2 transform transition-all duration-300 hover:border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t("sendMessage")}</CardTitle>
              <CardDescription className="text-gray-300">
                {t("fillFormDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <div className="relative">
                    <CheckCircle2 className="h-16 w-16 text-green-400 animate-bounce" />
                    <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-ping" />
                  </div>
                  <h2 className="text-2xl font-semibold text-green-400 text-center">
                    {t("messageSentSuccess")}
                  </h2>
                  <p className="text-gray-300 text-center max-w-md text-sm">
                    {t("thankYouMessage")}
                  </p>
                  <div className="pt-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-200">
                        {t("name")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 rounded-lg transition-all duration-300"
                        placeholder={t("yourFullName")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 rounded-lg transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-200">
                      {t("subject")}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 rounded-lg transition-all duration-300"
                      placeholder={t("whatRegarding")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">
                      {t("message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 rounded-lg transition-all duration-300"
                      placeholder={t("tellUsHelp")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Additional decorative element */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {t("responseTimeMessage")}
          </p>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}