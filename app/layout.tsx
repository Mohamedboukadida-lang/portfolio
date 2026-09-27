import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { profile } from "@/content/site";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "Mohamed Boukadida — Backend / Software Engineer";
const description =
  "Master’s CS student in Passau and backend developer at MyOnCare. Seeking a Werkstudent or part-time role in backend, DevOps, or fullstack across Bayern. APIs, microservices, Docker, and CI/CD.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Mohamed Boukadida",
  },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full">
        <LanguageProvider>
          <div className="atmosphere" aria-hidden="true" />
          <div className="site-shell">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
