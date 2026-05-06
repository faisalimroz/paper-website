import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import "../globals.css";
import { Header } from "../component/shared/header";
import { routing } from "@/navigation";


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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 1. Await the promise to get the string
  const { locale } = await params;
  
  // 2. This will now work because i18n.ts returns the locale
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
          "min-h-screen flex flex-col antialiased bg-white text-white",
          activeFontFamily,
          "notranslate", 
          locale === "ko" ? "tracking-tight" : "tracking-normal"
        )}
      >
        {/* 4. Provide messages to all client components (like your Header) */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* <Header /> */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}