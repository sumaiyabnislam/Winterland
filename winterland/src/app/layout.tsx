import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilder — Made for the long way",
  description: "Thoughtful outdoor footwear, apparel, and gear for the journey ahead.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}