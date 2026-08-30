import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://bivariant.github.io/Griot/";
const OG_IMAGE = "https://bivariant.github.io/Griot/images/griot-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Griot : Open AI Models for African Languages",
    template: "%s | Griot by Bivariant",
  },

  description:
    "Griot is Bivariant's open family of machine translation and automatic speech recognition models for 18 African languages, 36 translation directions and linguistic communities representing more than 420 million speakers across Africa.",

  applicationName: "Griot",
  category: "Artificial Intelligence",

  keywords: [
    "Griot",
    "Bivariant",
    "African AI",
    "African languages",
    "African language models",
    "open source AI",
    "open models",
    "machine translation",
    "automatic speech recognition",
    "ASR",
    "MT",
    "multilingual AI",
    "low-resource languages",
    "low-resource NLP",
    "natural language processing",
    "speech recognition",
    "African NLP",
    "Griot-MT",
    "Griot-ASR",
    "Fon",
    "Baatonou",
    "Baoulé",
    "Dioula",
    "Ewé",
    "Ewondo",
    "Fulfulde",
    "Hausa",
    "Lingala",
    "Luganda",
    "Mooré",
    "Oromo",
    "Sango",
    "Sar",
    "Shona",
    "Somali",
    "Swahili",
    "Wolof",
  ],

  authors: [
    { name: "Bivariant", url: "https://www.bivariant.com/" },
    { name: "Luc Alapini" },
    { name: "Arnauld Adjovi" },
    { name: "Dave Dassi" },
    { name: "Johaness Hounton" },
    { name: "Lucien TITO" },
  ],

  creator: "Bivariant",
  publisher: "Bivariant",

  alternates: { canonical: SITE_URL },

  icons: {
    icon: [{ url: "./favicon.png", type: "image/png" }],
    shortcut: "./favicon.png",
    apple: "./favicon.png",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Griot by Bivariant",
    title: "Griot : Open AI Models for African Languages",
    description:
      "Open machine translation and speech recognition models for 18 African languages, 36 translation directions and communities representing more than 420 million speakers.",
    images: [{
      url: OG_IMAGE,
      width: 2048,
      height: 768,
      alt: "Griot : Open Multilingual Intelligence for African Languages by Bivariant",
    }],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Griot : Open AI Models for African Languages",
    description:
      "18 African languages. 36 translation directions. 420M+ speakers. Open machine translation and speech recognition models by Bivariant.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "theme-color": "#ffffff",
    "github-repository": "https://github.com/bivariant/Griot",
    "griot-mt-repository": "https://github.com/bivariant/Griot/tree/main/models/machine-translation",
    "griot-asr-repository": "https://github.com/bivariant/Griot/tree/main/models/asr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
