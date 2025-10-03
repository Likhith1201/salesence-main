import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next) // react integration
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our website!",
          login: "Login",
          signup: "Sign Up",
          contact: "Contact Us",
          analysis: "Analysis",
          enterProductUrl: "Please enter a product URL",
          enterValidUrl: "Please enter a valid URL",

          // Culture Gallery Video Titles
          cultureCollaborativeTitle: "Collaborative Environment",
          cultureCollaborativeDesc: "Our team is built on collaboration and mutual support.",
          cultureTeamBuildingTitle: "Team Building Events",
          cultureTeamBuildingDesc: "Regular events to strengthen our bonds and have fun together.",
          cultureWorkspacesTitle: "Modern Workspaces",
          cultureWorkspacesDesc: "Designed for comfort, creativity, and productivity.",
          cultureInnovationTitle: "Innovation Labs",
          cultureInnovationDesc: "Dedicated spaces for experimentation and creative thinking.",

          // Testimonials
          testimonialAyseQuote: "The culture here is incredible. I have grown more in my career here than anywhere else.",
          testimonialMehmetQuote: "The work-life balance is perfect and the projects are both challenging and rewarding.",
          testimonialZeynepQuote: "I love the investment the company makes in our professional development and growth.",
        },
      },
      tr: {
        translation: {
          welcome: "Web sitemize hoş geldiniz!",
          login: "Giriş",
          signup: "Kayıt Ol",
          contact: "Bize Ulaşın",
          analysis: "Analiz",
          enterProductUrl: "Lütfen bir ürün URL'si girin",
          enterValidUrl: "Lütfen geçerli bir URL girin",

          // Kültür Galerisi Video Başlıkları
          cultureCollaborativeTitle: "İşbirlikçi Ortam",
          cultureCollaborativeDesc: "Ekibimiz işbirliği ve karşılıklı destek üzerine kurulmuştur.",
          cultureTeamBuildingTitle: "Takım Oluşturma Etkinlikleri",
          cultureTeamBuildingDesc: "Bağlarımızı güçlendirmek ve birlikte eğlenmek için düzenli etkinlikler.",
          cultureWorkspacesTitle: "Modern Çalışma Alanları",
          cultureWorkspacesDesc: "Konfor, yaratıcılık ve verimlilik için tasarlanmıştır.",
          cultureInnovationTitle: "İnovasyon Laboratuvarları",
          cultureInnovationDesc: "Deney ve yaratıcı düşünce için özel alanlar.",

          // Referanslar
          testimonialAyseQuote: "Buradaki kültür inanılmaz. Kariyerimde başka hiçbir yerde bu kadar gelişmedim.",
          testimonialMehmetQuote: "İş-yaşam dengesi mükemmel ve projeler hem zorlu hem de ödüllendirici.",
          testimonialZeynepQuote: "Şirketin profesyonel gelişimimize ve büyümemize yaptığı yatırımı çok seviyorum.",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
