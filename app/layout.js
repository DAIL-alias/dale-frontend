import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Header from "@/components/Header";
import { Theme } from "@radix-ui/themes";
import { headers } from "next/headers";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const currentPath = headers().get("x-pathname") || "";
  const shouldShowHeader = currentPath.startsWith("/realDash");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Theme>
            {shouldShowHeader && <Header />} {/* Conditionally render Header */}
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
