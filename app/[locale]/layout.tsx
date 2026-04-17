import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import "../globals.css";
import { Header } from "../component/shared/header";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap' 
});

const noto = Noto_Sans_KR({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-noto",
  display: 'swap'
});
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap' 
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const activeFontFamily = locale === "ko" ? noto.className : inter.className;

  return (
    <html 
      lang={locale}
      className={cn(mono.variable, inter.variable, noto.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased bg-[#0a1219] text-white",
          activeFontFamily, // Applying Inter or Noto Sans KR here
          "notranslate", 
          locale === "ko" ? "tracking-tight" : "tracking-normal"
        )}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}