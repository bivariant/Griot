import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bivariant.github.io/Griot/"),
  title: "Griot — Open Language Intelligence for Africa",
  description:
    "Open multilingual technologies for translation and speech recognition across 18 African languages, built by Bivariant.",
  icons: {
    icon: "./favicon.png",
    shortcut: "./favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://bivariant.github.io/Griot/",
    siteName: "Griot by Bivariant",
    title: "Griot — Open Language Intelligence for Africa",
    description: "Open translation and speech recognition technologies across 18 African languages.",
    images: [{ url: "https://bivariant.github.io/Griot/images/griot-logo.png", width: 2048, height: 768, alt: "Griot by Bivariant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Griot — Open Language Intelligence for Africa",
    description: "Open translation and speech recognition technologies across 18 African languages.",
    images: ["https://bivariant.github.io/Griot/images/griot-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
