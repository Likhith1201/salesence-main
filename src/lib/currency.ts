import { useTranslation } from "react-i18next";

// Static exchange rate for demonstration purposes
// In a real application, you would fetch this from a live API
const EXCHANGE_RATES = {
  USD_TO_TRY: 32.5, // Approximate exchange rate
};

export const useCurrency = () => {
  const { t, i18n } = useTranslation();

  const formatPrice = (amount: number): string => {
    const isturkish = i18n.language === "tr";
    const symbol = t("currencySymbol");

    if (isturkish) {
      const tryAmount = amount * EXCHANGE_RATES.USD_TO_TRY;
      return `${symbol}${tryAmount.toLocaleString('tr-TR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })}`;
    } else {
      return `${symbol}${amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })}`;
    }
  };

  const convertPrice = (usdAmount: number): number => {
    const isturkish = i18n.language === "tr";
    return isturkish ? usdAmount * EXCHANGE_RATES.USD_TO_TRY : usdAmount;
  };

  return {
    formatPrice,
    convertPrice,
    currencySymbol: t("currencySymbol"),
    currencyCode: t("currency"),
  };
};