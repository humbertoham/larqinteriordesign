'use client'
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

/**
 * PrivacyPolicy component
 *
 * Technologies:
 * - Next.js (Pages / App Router compatible)
 * - TypeScript & React 18
 * - TailwindCSS (utility‑first styling)
 * - Framer Motion (section fade‑in animation)
 *
 * Palette awareness: uses CSS custom properties already defined in your global stylesheet:
 * --menta (#e9ffdb) | --white (#faf4d3) | --darkgreen (#172b2d) | --green (#004643) | --yellow (#d1ac00)
 * If the variables are missing, be sure to declare them on :root or body in globals.css.
 */

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Introduction",
    body: (
      <>
        LARQ Interior Design ("we", "our", "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
        you visit our website (the "Service"). Please read this policy carefully.
      </>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Data:</strong> Name, email address (when you sign up or contact us).</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, IP address, device and browser type.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide, maintain, and improve our Service.</li>
          <li>To respond to user inquiries and send updates.</li>
          <li>To monitor usage and compile analytics to enhance user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Cookies and Tracking Technologies",
    body:
      "We use cookies to store preferences and track user trends. You can disable cookies via your browser settings, but this may affect site functionality.",
  },
  {
    heading: "5. Third-Party Services",
    body:
      "We may share your data with third-party vendors (e.g., analytics providers) under strict confidentiality agreements.",
  },
  {
    heading: "6. Data Security",
    body:
      "We implement reasonable security measures to protect your information. However, no online transmission is 100% secure.",
  },
  {
    heading: "7. Children’s Privacy",
    body:
      "Our Service is not directed to children under 16. We do not knowingly collect personal data from children under 16.",
  },
  {
    heading: "8. Changes to This Policy",
    body:
      "We may update this Privacy Policy from time to time. We will notify you by posting the new policy on this page and updating the \"Last updated\" date.",
  },
  {
    heading: "9. Contact Us",
    body:
      "If you have any questions about this Privacy Policy, please contact us at info@larqinteriors.com",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

export default function PrivacyPolicy() {
  return (
    <>
     

      <div
        className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mon tracking-tight text-center mb-12"
        >
          Privacy Policy
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, idx) => (
            <motion.section
              key={section.heading}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl mon font-semibold">
                {section.heading}
              </h2>
              <div className="text-base open font-medium text-zinc-600 leading-relaxed" >
                {section.body}
              </div>
            </motion.section>
          ))}

          {/* Last updated */}
          <p className="text-sm text-right italic" >
            Last updated: June 8, 2025
          </p>
        </div>
      </div>
    </>
  );
}
