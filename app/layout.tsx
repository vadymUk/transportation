import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Перевезення з адреси до адреси | Приватний перевізник Nowy Tomysl Wielkopolske woj.",
  description: "Пропоную комфортні перевезення по Європі. З дверей до дверей, швидко і безпечно.",
  openGraph: {
    title: "Перевезення з адреси до адреси | Приватний перевізник",
    description: "Пропоную комфортні перевезення по Європі. З дверей до дверей, швидко і безпечно.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
