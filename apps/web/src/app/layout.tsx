import type { Metadata } from "next";
import localFont from "next/font/local";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.scss";
import StyledComponentsRegistry from "../lib/style-registry";
import { Base } from "../ui/base";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Brand Zone | Pupila.ai",
  description: "A.I - Powered Branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://cdn.prod.website-files.com/65e09b33475df40d47950aa1/65e653290c5094d5d4eae873_favicon-32x32.png"
          rel="shortcut icon"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Theme>
            <Base>{children}</Base>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
