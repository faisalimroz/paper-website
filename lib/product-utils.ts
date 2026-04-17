import { productConfig } from "@/app/data/product-config";


export function getAllProducts(messages: any) {
  // Check if messages and Products exist to prevent the crash
  if (!messages || !messages.Products) {
    console.error("Localization messages for 'Products' are missing.");
    return [];
  }

  return productConfig.map((item) => {
    // Access the specific product slug inside the Products object
    const content = messages.Products[item.slug];

    return {
      ...item,
      title: content?.title || item.slug,
      description: content?.description || "",
      explore: content?.explore || "Explore",
    };
  });
}