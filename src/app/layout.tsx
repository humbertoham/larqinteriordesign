import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ButtonR from "@/components/buttonr";


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
    <link rel="canonical" href="https://pinkponk.lol/"/>
    <meta name="keywords" content="Software Development, IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning"></meta>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="LARQ Interior Design"/>
<meta property="og:description" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"/>
<meta property="og:image" content="https://pinkponk.lol/images/card.png"/>
<meta property="og:url" content="https://pinkponk.lol"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="LARQ Interior Design"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="LARQ Interior Design"/>
<meta name="twitter:description" content="LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!"/>
<meta name="twitter:image" content="https://pinkponk.lol/images/card.png"/>
<meta name="twitter:site" content="@pinkponklol"/>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LARQ Interior Design",
  "url": "https://pinkponk.lol",
  "logo": "https://pinkponk.lol/images/weblogo.svg",
  "description": "LARQ Interior Design, TN—expert remodeling & interior decorating services. From custom kitchen and bath design to 3D visualization and architectural planning, transform your home with professional expertise. Free consultation!",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contacto@pinkponk.lol",
    "areaServed": "US"
  },
  "sameAs": [
    "https://www.facebook.com/pinkponkstdio",
    "https://www.instagram.com/pinkponk.lol",
    "https://x.com/pinkponklol"
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
        <Navbar/>
        {children}
        <Footer/>
        <ButtonR/>
      </body>
    </html>
  );
}
