'use client'
import React from "react";
import { motion } from "framer-motion";

/**
 * TermsOfService component
 *
 * Technologies:
 * - Next.js (Pages / App Router compatible)
 * - TypeScript & React 18
 * - TailwindCSS (utility‑first styling)
 * - Framer Motion (section fade‑in animation)
 *
 * Palette awareness: uses CSS custom properties already defined in your global stylesheet:
 * --menta (#e9ffdb) | --white (#faf4d3) | --darkgreen (#172b2d) | --green (#004643) | --yellow (#d1ac00)
 * If the variables are missing, be sure to declare them on :root or body in globals.css.
 */

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Acceptance of Terms",
    body:
      "By accessing and using this website (the \"Service\"), you accept and agree to be bound by these Terms of Service and our Privacy Policy. The Service is operated by LARQ Interior Design. If you do not agree, you must not access or use the site.",
  },
  {
    heading: "2. Modifications to the Service",
    body:
      "LARQ Interior Design reserves the right to modify or discontinue the Service (or any part or content thereof) at any time without notice.",
  },
  {
    heading: "3. Intellectual Property",
    body:
      "All content, graphics, user interfaces, trademarks, logos, and computer code on the site are owned or licensed by LARQ Interior Design and are protected by intellectual property laws.",
  },
  {
    heading: "4. User Accounts",
    body:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    heading: "5. Prohibited Conduct",
    body:
      "You agree not to misuse the Service or help anyone else do so, including but not limited to: (a) engaging in illegal activities; (b) violating others’ privacy; (c) infringing intellectual property rights.",
  },
  {
    heading: "6. Termination",
    body:
      "LARQ Interior Design may suspend or terminate your access to the Service at any time, without prior notice or liability, for any reason whatsoever.",
  },
  {
    heading: "7. Disclaimer of Warranties & Liability",
    body:
      "The Service is provided \"as is\" and \"as available\" without warranty of any kind. In no event shall LARQ Interior Design be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.",
  },
  {
    heading: "8. Governing Law",
    body:
      "These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.",
  },
  {
    heading: "9. Changes to These Terms",
    body:
      "We may update these Terms periodically. We will notify you of changes by posting the new Terms on this page and updating the \"Last updated\" date.",
  },
  {
    heading: "10. Contact Us",
    body:
      "If you have any questions about these Terms, please contact us at info@larqinteriors.com",
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

export default function TermsOfService() {
  return (
    <>
   
    <div  className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
       
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl mon font-bold tracking-tight text-center mb-12"
          
        >
          Terms of Service
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
              <h2 className="text-2xl mon font-semibold" >
                {section.heading}
              </h2>
              <p className="text-base open font-medium text-zinc-600 leading-relaxed">
                {section.body}
              </p>
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
