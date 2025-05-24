import ContactForm from "@/components/contact";
import ContactDetails from "@/components/contactdetails";
import Nav from "@/components/nav";
import Portfolio from "@/components/portfolio";
import projects from "../../../public/projects.json"
import CTA2 from "@/components/CTA";
export default function Port() {
  return (
   <>
   <Nav/>
   <Portfolio projects={projects}/>
   <CTA2/>
   </>
  );
}
