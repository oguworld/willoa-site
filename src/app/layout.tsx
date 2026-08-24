import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Willoa — シンガポールの個人事業主のためのIT相談窓口",
  description:
    "Willoaは、シンガポールを拠点に、個人事業主・小規模事業者のITまわりを支える相談窓口です。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
