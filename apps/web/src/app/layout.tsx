import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "@event-platform/ui/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Event Platform",
  description: "The simple way to manage your events and invitations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetbrains.variable} font-mono font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
