import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";

interface SignUpFormProps {
  onSuccess: () => void;
}

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const { t } = useTranslation();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(t("passwordsDontMatch"));
      return;
    }

    setIsLoading(true);
    try {
      const success = await signUp(formData.name, formData.email, formData.password);
      if (success) {
        onSuccess();
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">{t("fullName")}</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">{t("password")}</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">{t("confirmPassword")}</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("signingUp") : t("signup")}
      </Button>
    </form>
  );
}