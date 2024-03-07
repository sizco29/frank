// Components
import TitleComponent from "@/components/title_component";
import Footer from "@/components/footer";
import ColophonSectionContainer from "@/components/colophon_section";

//icon
import { BookText } from "lucide-react";
import { Brain } from 'lucide-react'
import { BookCopy } from "lucide-react";
import { BoomBox } from "lucide-react";
import ExperienceDetails from "@/components/experience_components/experience_details";
import ExperienceTime from "@/components/experience_components/experience_time";



export default function Home() {
  return (
    <>

    <div className="space-y-6">
      <section>
        <div className="grid md:grid-cols-[1fr,1.5fr] px-4 gap-4">
        <TitleComponent title="Francisco Garcia" titleDescription="Software Enthusiast" />
        <div className="space-y-2 text-justify">
          <p>
            Hello there, I am Francisco - <small><em>[sizco, paco, frank] for short, </em></small>, a Software enthusiast based in United States.
            currently self-learning to improve my skills in overall Web development and software development to become a software developer.
          </p>

          <p>I am passionate about learning different technologies and system design and build software around.</p>

          <div className="flex relative">
            <div className="mt-2 w-[.3rem] h-[.3rem] absolute left-[-15px] bg-emerald-500 rounded-full dot animate-in"></div>
            <p className="text-emerald-500">
              Currently i am working as a <u>software developer contractor</u> for a asphalt company developing tools to improve the 
              business.
            </p>
          </div>
        </div>
        </div>
      </section>
      <ColophonSectionContainer title="Experience" icon={<Brain size={14}/>}>

        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <ExperienceDetails
            experienceTitle="Shopify Developer"
            experienceCompany="Monavie.shop"
            experienceCompanyLink="https://monavie.shop/"
            experienceLocation="Gainesville, Florida" />
            <ExperienceTime
            experienceInitialDate="01/2024"
            expCurrent={true} />
          </div>

          <div className="flex items-start justify-between">
            <ExperienceDetails
            experienceTitle="Web Developer & PM"
            experienceCompany="Nationwidepaving"
            experienceCompanyLink="#"
            experienceLocation="Ocala, Florida" />
            <ExperienceTime
            experienceInitialDate="09/2022"
            expCurrent={false}
            experienceEndDate="12/2023" />
          </div>

          <div className="flex items-start justify-between">
            <ExperienceDetails
            experienceTitle="Project Coordinator | IHUT"
            experienceCompany="SAGO"
            experienceCompanyLink="https://sago.com/"
            experienceLocation="Managua, Nicaragua" />
            <ExperienceTime
            experienceInitialDate="09/2021"
            expCurrent={false} 
            experienceEndDate="08/2022"/>
          </div>

          <div className="flex items-start justify-between">
            <ExperienceDetails
            experienceTitle="Technical Support Manager"
            experienceCompany="IBEX"
            experienceCompanyLink="https://ibex.co/"
            experienceLocation="Managua, Nicaragua" />
            <ExperienceTime
            experienceInitialDate="12/2019"
            expCurrent={false} 
            experienceEndDate="08/2021"/>
          </div>
        </div>

      </ColophonSectionContainer>

      <ColophonSectionContainer title="Posts" icon={<BookCopy size={14}/>}>

      </ColophonSectionContainer>

      <ColophonSectionContainer title="Reading" icon={<BookText size={14}/>}>

      </ColophonSectionContainer>

      <ColophonSectionContainer title="Music" icon={<BoomBox size={14}/>}>

      </ColophonSectionContainer>
     
    </div>

    <Footer></Footer>

    </>
  );
}
