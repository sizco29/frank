// Components 
import TitleComponent from "../title_component";

export default function Intro(){

    return(
        <>
        <section>
        <div className="grid md:grid-cols-[1fr,1.5fr] px-4 gap-4">
        <TitleComponent title="Francisco Garcia" titleDescription="Software Enthusiast" />

        <div className="space-y-2 text-justify">
          <p>
            Hello there, I am Francisco - <small><em>[sizco, paco, frank] for short</em></small>, a Software enthusiast based in United States.
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
        </>
    );
}
