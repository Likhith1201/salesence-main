import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Chrome, Apple, Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(tab === "login" ? "Logging in..." : "Signing up...", formData);
    onClose();
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative w-full max-w-md rounded-3xl overflow-hidden border border-gray-800 p-8 shadow-2xl bg-gray-950/80 backdrop-blur-xl">
        {/* Gradient blobs background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-20 -top-10 -left-10 animate-pulse" />
          <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-20 top-10 -right-10 animate-pulse delay-1000" />
          <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-20 bottom-10 left-10 animate-pulse delay-2000" />
        </div>

        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl font-bold text-white mb-2">
              {tab === "login" ? t("welcomeBack") : t("createYourAccount")}
            </DialogTitle>
            <p className="text-center text-gray-400 text-sm">
              {tab === "login"
                ? t("signInToContinueJourney")
                : t("joinUnlockPotential")}
            </p>
          </DialogHeader>

          {/* Tabs for Login/Signup */}
          <Tabs
            value={tab}
            onValueChange={(val) => setTab(val as "login" | "signup")}
            className="mt-6"
          >
            <TabsList className="grid grid-cols-2 mb-6 rounded-xl bg-gray-900 p-1">
              <TabsTrigger
                value="login"
                className="rounded-lg text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t("login")}
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="rounded-lg text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t("signup")}
              </TabsTrigger>
            </TabsList>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 rounded-xl gap-2 font-semibold text-gray-200 border-gray-700 bg-gray-900/50 hover:bg-gray-800"
                onClick={() => handleOAuthLogin("Google")}
              >
                <Chrome className="h-5 w-5 text-gray-400" />
                {t("continueWithGoogle")}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 rounded-xl gap-2 font-semibold text-gray-200 border-gray-700 bg-gray-900/50 hover:bg-gray-800"
                onClick={() => handleOAuthLogin("Apple")}
              >
                <Apple className="h-5 w-5 text-gray-400" />
                {t("continueWithApple")}
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-950/80 px-2 text-gray-500">
                  {t("orContinueWithEmail")}
                </span>
              </div>
            </div>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-gray-300">
                    {t("password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-900/40"
                >
                  {t("signIn")}
                </Button>
              </form>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent value="signup">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    {t("fullName")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("johnDoe")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-gray-300">
                    {t("password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-900/40"
                >
                  {t("createAccount")}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
