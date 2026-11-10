import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import Script from "next/script";
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

const title = "Mohamed Boukadida — Backend developer";
const description =
  "Master’s CS student in Passau and backend developer at MyOnCare. Seeking a working-student role in IT application management, process automation, and business applications.";

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
        {/* The editor browser injects data-cursor-ref before hydration. Strip it first. */}
        <Script id="strip-editor-refs" strategy="beforeInteractive">
          {`(function () {
            function strip(node) {
              if (!node || node.nodeType !== 1) return;
              if (node.hasAttribute("data-cursor-ref")) node.removeAttribute("data-cursor-ref");
              var marked = node.querySelectorAll("[data-cursor-ref]");
              for (var i = 0; i < marked.length; i++) marked[i].removeAttribute("data-cursor-ref");
            }
            strip(document.documentElement);
            var observer = new MutationObserver(function (records) {
              for (var i = 0; i < records.length; i++) {
                var record = records[i];
                if (record.type === "attributes") {
                  record.target.removeAttribute("data-cursor-ref");
                } else if (record.addedNodes) {
                  for (var j = 0; j < record.addedNodes.length; j++) strip(record.addedNodes[j]);
                }
              }
            });
            observer.observe(document.documentElement, {
              subtree: true,
              childList: true,
              attributes: true,
              attributeFilter: ["data-cursor-ref"]
            });
            window.addEventListener("load", function () {
              setTimeout(function () { observer.disconnect(); }, 1500);
            });
          })();`}
        </Script>
        <LanguageProvider>
          <div className="atmosphere" aria-hidden="true" />
          <div className="site-shell">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
