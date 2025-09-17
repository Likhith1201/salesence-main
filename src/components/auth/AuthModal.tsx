
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, User, Chrome, Apple } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

export const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: mode === 'signup' ? "Account created!" : "Welcome back!",
        description: mode === 'signup' 
          ? "Your account has been created successfully." 
          : "You've been signed in successfully.",
      });
      onClose();
    }, 2000);
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`${mode} with ${provider}`);
    toast({
      title: "Coming soon",
      description: `${provider} authentication will be available soon.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[95vw] bg-brilliance border-diamond-cut mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-wall-street">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Button
              variant="outline"
              className="w-full h-11 sm:h-12 border-little-dipper hover:bg-lavender-blue/50 text-sm"
              onClick={() => handleOAuthLogin('Google')}
            >
              <Chrome className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full h-11 sm:h-12 border-little-dipper hover:bg-lavender-blue/50 text-sm"
              onClick={() => handleOAuthLogin('Apple')}
            >
              <Apple className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Apple</span>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-little-dipper" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-brilliance px-2 text-buffed-plum">Or continue with email</span>
            </div>
          </div>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-wall-street font-medium text-sm">
                  Full Name
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="h-11 sm:h-12 pl-9 sm:pl-10 border-little-dipper bg-white/50 focus:border-primary text-sm"
                    required
                    autoFocus
                  />
                  <User className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-buffed-plum" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-wall-street font-medium text-sm">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-11 sm:h-12 pl-9 sm:pl-10 border-little-dipper bg-white/50 focus:border-primary text-sm"
                  required
                  autoFocus={mode === 'login'}
                />
                <Mail className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-buffed-plum" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-wall-street font-medium text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="h-11 sm:h-12 pl-9 sm:pl-10 pr-9 sm:pr-10 border-little-dipper bg-white/50 focus:border-primary text-sm"
                  required
                />
                <Lock className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-buffed-plum" />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-buffed-plum" />
                  ) : (
                    <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-buffed-plum" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full h-11 sm:h-12 gradient-primary shadow-hover hover:shadow-hover transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white" />
              ) : (
                mode === 'signup' ? 'Create Account' : 'Sign In'
              )}
            </Button>
          </form>
          
          {/* Toggle Mode */}
          <div className="text-center text-xs sm:text-sm">
            <span className="text-buffed-plum">
              {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
            </span>{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-primary hover:text-primary/80"
              onClick={() => onModeChange(mode === 'signup' ? 'login' : 'signup')}
            >
              {mode === 'signup' ? 'Sign in' : 'Sign up'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
