import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  Quote,
  ChevronLeft,
  User,
  Mail,
  Lock,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentQuote, setCurrentQuote] = useState(0);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const quotes = [
    {
      text: t("futureQuote"),
      author: t("eleanorRoosevelt"),
    },
    {
      text: t("successQuote"),
      author: t("winstonChurchill"),
    },
    {
      text: t("timeQuote"),
      author: t("steveJobs"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u: any) => u.email === formData.email);

    if (exists) {
      setStatus("error");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setStatus("success");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Back to Home Button */}
      <Link 
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-300 group bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-purple-500/30"
      >
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        {t("backToHome")}
      </Link>

      {/* Modern Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Subtle animated elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: i % 3 === 0 
                ? "linear-gradient(45deg, #8B5CF6, #EC4899)" 
                : i % 3 === 1 
                ? "linear-gradient(45deg, #3B82F6, #8B5CF6)"
                : "linear-gradient(45deg, #EC4899, #F59E0B)",
              top: `${20 + i * 20}%`,
              left: `${i * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Inspirational Quotes Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:block absolute left-10 top-1/2 transform -translate-y-1/2 w-80"
      >
        <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl">
          <Quote className="h-6 w-6 text-purple-400 mb-4" />
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-light text-white mb-4 italic leading-relaxed">
              "{quotes[currentQuote].text}"
            </p>
            <p className="text-sm text-gray-400">— {quotes[currentQuote].author}</p>
          </motion.div>
          <div className="flex mt-6 space-x-1">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentQuote ? "w-6 bg-purple-500" : "w-3 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full relative z-10"
      >
        <Card className="border border-white/10 bg-gray-950/70 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-pink-900/20 p-1">
            <div className="bg-gray-950/90 rounded-xl">
              <CardHeader className="text-center pb-4 pt-8">
                <motion.div 
                  initial={{ scale: 0.95 }} 
                  animate={{ scale: 1 }} 
                  transition={{ duration: 0.4 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <CardTitle className="text-2xl font-bold text-white">
                  {t("createAccount")}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {t("joinCommunity")}
                </CardDescription>
              </CardHeader>
            </div>
          </div>

          <CardContent className="pt-6">
            {status === "success" ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-8 space-y-4"
              >
                <CheckCircle2 className="h-16 w-16 text-green-400" />
                <p className="text-gray-300">{t("signupSuccessful")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {t("nameLabel")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("yourName")}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={`bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      status === "error" ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300 flex items-center">
                    <Lock className="h-4 w-4 mr-2" />
                    {t("password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="••••••••"
                      className={`bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        status === "error" ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg border border-red-800/50"
                  >
                    {t("userAlreadyExists")}
                  </motion.p>
                )}

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold rounded-lg py-6 transition-all duration-300 shadow-lg"
                  >
                    {t("createAccount")}
                  </Button>
                </motion.div>
              </form>
            )}

            <div className="mt-6 text-center space-y-3">
              <div className="relative flex items-center justify-center">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="mx-4 text-gray-500 text-sm">{t("or")}</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>
              
              <p className="text-gray-500 text-sm">
                {t("alreadyHaveAccount")}{" "}
                <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  {t("signIn")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Side Decorative Panel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:flex absolute right-10 top-1/2 transform -translate-y-1/2"
      >
        <div className="bg-black/40 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl">
          <div className="text-center mb-6">
            <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">{t("whyJoinPlatform")}</h3>
            <p className="text-gray-400">{t("designedForProfessionals")}</p>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: <Shield className="h-4 w-4 text-purple-400" />, text: t("enterpriseGradeSecurity") },
              { icon: <Zap className="h-4 w-4 text-purple-400" />, text: t("lightningFastPerformance") },
              { icon: <Globe className="h-4 w-4 text-purple-400" />, text: t("globalAccessibility") },
              { icon: <Users className="h-4 w-4 text-purple-400" />, text: t("collaborativeFeatures") }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}