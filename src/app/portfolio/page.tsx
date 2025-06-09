
import Nav from "@/components/nav";
import Portfolio from "@/components/portfolio";
import projects from "../../../public/projects.json"
import CTA2 from "@/components/CTA";
import VideoEmbed from "@/components/video";
export default function Port() {
  return (
   <>
   <Nav/>
   <Portfolio projects={projects}/>
   <VideoEmbed videoId="fr4e4Ipm_E4"/>
   <CTA2/>
   </>
  );
}
