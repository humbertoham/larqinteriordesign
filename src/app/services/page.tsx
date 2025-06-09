import Nav from "@/components/nav";
import ServicesC from "@/components/services";
import ServicesGrid from "@/components/services";
import FAQ from "@/components/faq";
import SecondaryServices from "@/components/secondary";

const faqs = [
  {
    id: 1,
    question: "How long does a typical interior design project take?",
    answer: "The timeline varies depending on the scope of work. A full residential project typically takes 3–6 months from concept to completion, while commercial projects may take longer. We'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 2,
    question: "What is your design process like?",
    answer: "Our process begins with an in-depth consultation to understand your vision, needs, and budget. We then develop a concept, present mood boards and floor plans, refine the design based on your feedback, and manage procurement and installation through to project completion."
  },
  {
    id: 3,
    question: "How do you determine project costs?",
    answer: "Costs are based on the scope of work, materials, furnishings, and any specialist services required. We offer both flat-fee and hourly-rate models, as well as percentage-of-budget pricing. After the initial consultation, you’ll receive a detailed proposal outlining all expected fees."
  },
  {
    id: 4,
    question: "Can you work within my budget?",
    answer: "Absolutely. We believe every budget deserves beautiful design. During our initial consultation, we establish your budget and then source materials and products that maximize style and function without overspending."
  },
  {
    id: 5,
    question: "Do you offer virtual or remote design services?",
    answer: "Yes! Our virtual design packages include digital floor plans, mood boards, shopping lists, and one-on-one video consultations—perfect for clients outside our service area or who prefer a more hands-on approach."
  },
  {
    id: 6,
    question: "How many design revisions are included?",
    answer: "We include up to three rounds of revisions at the concept and schematic stages to ensure you’re completely happy with the direction before moving forward to procurement and installation."
  },
  {
    id: 7,
    question: "Can you source custom furniture or artwork?",
    answer: "Yes. We have relationships with trusted artisans and manufacturers to create bespoke pieces tailored to your space. We handle all negotiations, approvals, and logistics to deliver one-of-a-kind elements seamlessly."
  },
  {
    id: 8,
    question: "How do you handle project management and installation?",
    answer: "Our team coordinates all contractors, deliveries, and on-site installations. We conduct regular site visits, manage schedules, and ensure quality control from start to finish, giving you a stress-free experience."
  },
  {
    id: 9,
    question: "Do you offer sustainable or eco-friendly design options?",
    answer: "Yes, we prioritize sustainable materials, energy-efficient fixtures, and eco-friendly practices wherever possible. Let us know your sustainability goals, and we’ll integrate them into your design plan."
  },
  {
    id: 10,
    question: "What areas do you serve?",
    answer: "We Serve all the US. For larger commercial projects or virtual services, we offer travel-friendly packages—just ask us for details!"
  }
];

export default function Services() {
  return (
   <>
   <Nav/>
    <ServicesC/>
    <SecondaryServices/>
   <FAQ faqs={faqs} />
   </>
  );
}
