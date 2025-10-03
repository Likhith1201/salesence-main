
export const validateProductUrl = (url: string): { isValid: boolean; errorKey?: string } => {
  if (!url.trim()) {
    return { isValid: false, errorKey: "enterProductUrl" };
  }

  try {
    // Just check if it's a valid URL format - accept ALL URLs
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, errorKey: "enterValidUrl" };
  }
};

export const extractProductInfo = (url: string) => {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname.toLowerCase();
  
  // Extract basic info from URL structure
  if (hostname.includes('amazon')) {
    return { marketplace: 'Amazon', platform: 'amazon' };
  } else if (hostname.includes('ebay')) {
    return { marketplace: 'eBay', platform: 'ebay' };
  } else if (hostname.includes('etsy')) {
    return { marketplace: 'Etsy', platform: 'etsy' };
  } else if (hostname.includes('shopify')) {
    return { marketplace: 'Shopify Store', platform: 'shopify' };
  } else if (hostname.includes('walmart')) {
    return { marketplace: 'Walmart', platform: 'walmart' };
  } else if (hostname.includes('target')) {
    return { marketplace: 'Target', platform: 'target' };
  } else {
    return { marketplace: 'Online Store', platform: 'generic' };
  }
};
