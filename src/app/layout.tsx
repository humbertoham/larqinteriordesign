import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ButtonR from "@/components/buttonr";
import SpanishBanner from "@/components/wespeak";


export const metadata: Metadata = {
  title: "LARQ Interior Design",
  description: "LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LARQ Interior Design</title>
    <meta name="theme-color" content="#fff" />

    <meta name="description" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"/>
    <link rel="canonical" href="larqinteriors.com/"/>
    <meta name="keywords" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"></meta>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="LARQ Interior Design"/>
<meta property="og:description" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"/>
<meta property="og:image" content="larqinteriors.com/images/card.jpeg"/>
<meta property="og:url" content="larqinteriors.com"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="LARQ Interior Design"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="LARQ Interior Design"/>
<meta name="twitter:description" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"/>
<meta name="twitter:image" content="larqinteriors.com/images/card.jpeg"/>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LARQ Interior Design",
  "url": "larqinteriors.com",
  "logo": "larqinteriors.com/images/logoblacklarq.svg",
  "description": "LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@larqinteriors.com",
    "areaServed": "Shelbyville, Tennessee."
  },
  "sameAs": [
    "https://www.facebook.com/LarqArchitecture",
    "https://www.instagram.com/larqinteriordesign",
    "https://www.tiktok.com/@laurellaurel98"
  ]
            }),
          }}
        />



    <link id="favicon" rel="icon" href="/favicon.ico" />
    <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link id="android-512x512" rel="icon" type="image/png" sizes="512x512.png" href="/android-chrome-512x512.png"  />
    <link id="webmanifest" rel="manifest" href="/site.webmanifest" />
  </head>
      <body>
        <SpanishBanner/>
        <Navbar/>
        {children}
        <Footer/>
        <ButtonR/>
      </body>
    </html>
  );
}
