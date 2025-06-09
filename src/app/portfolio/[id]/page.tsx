import Nav from "@/components/nav";
import PortfolioCarousel from "@/components/carousel"; // <- your new client carousel
import ConButton from "@/components/contactbutton";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  category: string[];
}

// Example data fetcher (replace with real data source)
async function getPortfolioItem(id: string): Promise<PortfolioItem | null> {
  const items: PortfolioItem[] = [
    {
    id: "1",
    title: "Basement Transformation",
    description: "At LARQ Interior Design, we turned an underused basement in Clarksville, Tennessee into a warm and functional living space. We added two comfortable bedrooms, created a cozy lounge area, and redesigned the staircase to enhance both style and flow. Whether you’re looking to expand your living space or increase your property value, we make it happen.",
    imageUrls: ["/images/PROYECTOS/BASEMENT/2.png","/images/PROYECTOS/BASEMENT/1.png","/images/PROYECTOS/BASEMENT/3.png","/images/PROYECTOS/BASEMENT/4.png","/images/PROYECTOS/BASEMENT/5.jpeg","/images/PROYECTOS/BASEMENT/6.jpeg"],
    category: ["Basement Remodel"]
  },
  {
    id: "2",
    title: "Social Area Design",
    description: "In Franklin, Tennessee, we designed a stunning social area that brings people together in style. Featuring rich wood finishes and beautiful views of the outdoors, this space was thoughtfully crafted to feel both elegant and inviting. At LARQ Interior Design, we create spaces that elevate everyday living—whether it’s for relaxing, entertaining, or simply enjoying the view.",
    imageUrls: ["/images/PROYECTOS/DECK/1.jpeg","/images/PROYECTOS/DECK/2.jpeg","/images/PROYECTOS/DECK/3.jpeg","/images/PROYECTOS/DECK/4.jpeg"],
    category: ["Entertaining Spaces"]
  },
  {
    id: "3",
    title: "Living Room Remodel",
    description: "We recently transformed a living room in Franklin, Tennessee, into a modern and inviting space, perfect for everyday living and special gatherings. The design features a sleek, built-in fireplace that adds warmth and comfort, creating a cozy atmosphere for the homeowners. Clean lines, neutral tones, and thoughtful lighting were used to enhance the modern aesthetic while keeping the space functional and welcoming.",
    imageUrls: ["/images/PROYECTOS/LIVINGROOM/1.jpeg", "/images/PROYECTOS/LIVINGROOM/2.jpeg","/images/PROYECTOS/LIVINGROOM/3.jpeg","/images/PROYECTOS/LIVINGROOM/4.jpeg","/images/PROYECTOS/LIVINGROOM/5.jpeg"],
    category: ["Living Room"]
  },
  {
    id: "4",
    title: "Residential Pool Design",
    description: "LARQ Interior Design proudly completed a custom pool design for a private residence in Nashville, Tennessee. The project blends modern aesthetics with functional outdoor living, creating a serene and stylish space for relaxation and entertainment. From layout to material selection, every detail was curated to complement the home’s architecture and enhance the outdoor experience.",
    imageUrls: ["/images/PROYECTOS/NASHVILLEPOOL/2.jpg","/images/PROYECTOS/NASHVILLEPOOL/1.jpg","/images/PROYECTOS/NASHVILLEPOOL/3.jpg","/images/PROYECTOS/NASHVILLEPOOL/4.jpg","/images/PROYECTOS/NASHVILLEPOOL/5.jpg","/images/PROYECTOS/NASHVILLEPOOL/6.jpg","/images/PROYECTOS/NASHVILLEPOOL/7.jpg","/images/PROYECTOS/NASHVILLEPOOL/8.jpg"],
    category: ["Outdoor Living"]
  },
  {
    id: "5",
    title: "Storm Room Design",
    description: "At LARQ Interior Design, we recently completed a custom-designed storm room in Nashville—created as a safe and secure space for weather emergencies. Combining functionality with thoughtful design, this room offers peace of mind without sacrificing comfort or style. Your home should protect and inspire you. Whether you’re planning a storm room, home office, or any other space—contact LARQ to design a space that truly fits your needs.",
    imageUrls: ["/images/PROYECTOS/STORMROOM/1.jpeg","/images/PROYECTOS/STORMROOM/2.jpeg","/images/PROYECTOS/STORMROOM/3.jpeg","/images/PROYECTOS/STORMROOM/4.jpeg"],
    category: ["Safety & Security"]
  },
    {
    id: "6",
    title: "Renders",
    description: "Bring Your Vision to Life with 3D Renderings. First impressions matter—especially in design. At LARQ Interior Design, we create high-quality 3D renderings that help you present your projects with clarity and confidence. Whether you’re pitching to a client or making design decisions, our visualizations let you see the final result before construction begins. Stand out, gain your client’s trust, and communicate your ideas more effectively with professional 3D renderings. ",
    imageUrls: ["/images/PROYECTOS/RENDERS/1.jpg","/images/PROYECTOS/RENDERS/2.jpg","/images/PROYECTOS/RENDERS/3.jpg","/images/PROYECTOS/RENDERS/6.png"],
    category: ["3D Rendering"]
  }
  ];
  return items.find((item) => item.id === id) || null;
}

export default async function Page({ params }: { params: { id: string } }) {
  const item = await getPortfolioItem(params.id);

  if (!item) {
    return (
      <main className="">
        <Nav/>
        <p className="text-red-600">Portfolio item not found.</p>
      </main>
    );
  }

  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Client‑only Carousel */}
        <PortfolioCarousel imageUrls={item.imageUrls} title={item.title} />

        {/* Right: still server‑rendered text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mon mb-4">
            {item.title}
          </h1>
          <p className="text-base open font-medium text-zinc-600 leading-relaxed mb-6">
            {item.description}
          </p>
          <p className="text-xl mon font-semibold text-black leading-relaxed mb-6">
           Architectural Plans for Your Projects
          </p>
           <p className="text-base open font-medium text-zinc-600 leading-relaxed mb-6">
            Clear, accurate plans are the foundation of any successful project. At LARQ Interior Design, we specialize in creating professional architectural drawings tailored to your needs—whether it’s a remodel, new construction, or custom interior design.
          </p>
           <p className="text-base open font-medium text-zinc-600 leading-relaxed mb-6">
            Our detailed plans help you visualize your space, guide construction, and ensure every element aligns with your vision.
          </p>
           <p className="text-base open font-medium text-zinc-600 leading-relaxed mb-6">
            Need expert plans for your project? Contact LARQ and let’s build it right from the start.
          </p>
         <ConButton/>
        </div>
      </main>
    </>
  );
}
