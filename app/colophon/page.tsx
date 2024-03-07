
// Components
import ColophonSectionContainer  from "../../components/colophon_section" 
import Link from 'next/link'
import Footer from "@/components/footer"

// icons
import { Code } from 'lucide-react'
import { Server } from 'lucide-react'
import { Home } from 'lucide-react'
import { Type } from 'lucide-react'
import { PenTool} from 'lucide-react'
import { Lightbulb } from 'lucide-react'


export default function Page() {
    return (
        <>
      

        <div className="space-y-6">
            <section>
            <div className="grid px-4 gap-4">
                <div className="undefined">
                <h1 className="text-xl">Colophon</h1>
                <p className="text-gray-400">A Guide to this website</p>
                </div>
            </div>
            </section>

            <ColophonSectionContainer title ="Tech Stack" icon={<Code size={14}/>}> 

                <div className="space-y-4">
                    <p>
                        I used the tech stack that is trending on the website this way is easy for me to learn and make my life easy
                        as there is a lot of documentation and also improving my knowledge.
                    </p>
                    <div className="flex flex-col space-y-2">
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">Language</p>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">Framework</p>
                                <p>Reactjs</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">SSR</p>
                                <p>Nextjs</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">CSS Framework</p>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">Syntax</p>
                                <p>TypeScript</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 w-full">
                                <p className="text-gray-400">Syntax Highlighter</p>
                                <p>Highlighter.js</p>
                            </div>
                        </div>

                    </div>

                </div>

            </ColophonSectionContainer>

            <ColophonSectionContainer title="Hosting" icon={ <Server size={14}/>}>

                <div className="space-y-4">
                    <p>This site is deployed and hosted on <Link href={"https://vercel.com/"}>Vercel</Link>.</p>
                </div>
            
            </ColophonSectionContainer>

            <ColophonSectionContainer title="Icons" icon={ <Home size={14}/>}>

            <div className="space-y-4">
                    <p>This website uses Icon Library: <Link href={"https://lucide.dev/"}>Lucide React</Link>.</p>
                </div>
            
            </ColophonSectionContainer>

            <ColophonSectionContainer title="Typography" icon={ <Type size={14}/>}>

            <div className="space-y-4">
                    <p>This site features the <Link href={"https://rsms.me/inter/"}>Inter</Link> typeface, a variable font family
                    carefully crafted & designed for computer screens, designed by <Link href={"https://rsms.me/"}>Rasmus Andersson</Link>. I like the typeface.</p>
                </div>

            </ColophonSectionContainer>

            <ColophonSectionContainer title="User Interface Elements" icon={ <PenTool size={14}/>}>

                <div className="space-y-4">
                    <p>The foundation of the user interface elements is the open-source library <Link href={"https://ui.shadcn.com/"}>ShadcnUI</Link>. 
                    I customized the components to fit the needs of the website.</p>
                </div>
            
            </ColophonSectionContainer>

            <ColophonSectionContainer title="Inspiration" icon={ <Lightbulb size={14}/>}>

                <div className="space-y-4">
                    <p>
                        God knows i've been trying to build my website for the longest but i always put it on hold because i cannot wrap
                        my mind around the design part of it but i've visited many websites and some of them are simple and others are almost
                        like navigating a spaceship nevertheless i want to mention some of the website that inspired me the most:
                    </p>
                    <div className="flex flex-col space-y-1 text-sm ">
                        <Link href={"https://www.fabianschultz.com/"}>Fabian Schultz</Link>
                        <Link href={"https://www.amelieschlueter.com/"}>amelieschlueter</Link>
                        <Link href={"https://paco.me/"}>Paco Coursey</Link>
                    </div>
                </div>
            
            </ColophonSectionContainer>

        </div>

        <Footer/>

        

        </>

    );
}