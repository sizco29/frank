// Components
import Intro from "@/components/Home/Intro";
import Experience from "@/components/Home/Experience";
import Posts from "@/components/Home/Post";
import Reading from "@/components/Home/Reading";
import Listening from "@/components/Home/Listening";
import Footer from "@/components/footer";
import ColophonSectionContainer from "@/components/colophon_section";

export default function Home() {
  return (
    <>

    <div className="space-y-6">
      <Intro />
      <Experience/>
      <Posts />
      <Reading />
      <Listening />
    </div>
    <Footer/>

    </>
  );
}
