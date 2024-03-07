import Footer from "@/components/footer";
import TitleComponent from "@/components/title_component";
import Link from "next/link";
import { MoveRight } from "lucide-react";


export default function Writing() {
    return (
        <>

            <div className="grid md:grid-cols-[1fr,1.5fr] px-4 gap-4 md:gap-0">
                <TitleComponent
                    title="Writing" />

                <p className="text-sm text-justify">
                    A collection of thoughts, ideas and learning experiences. I try to write
                    about software other things i learned on my journey. I am writing this in hopes that will help
                    somebody else in their journey and improve their skills.
                </p>
            </div>
            <div className="space-y-4">

                <Link className="no-underline" href={"#"}>
                    <div className="items-start border-b pb-4 mt-4 gap-2 grid md:grid-cols-[1fr,1.5fr] px-4 md:gap-0">
                        <div className="text-sm gap-0 text-gray-400">
                            <p>March 23rd, 2024</p>
                        </div>
                        <div className="space-y-1 gap-0">
                            <div className="flex flex-col gap-2 justify-between">
                            <h3 className="underline hover:text-emerald-500 transition ease-in">Trying out new things</h3>
                            <p className="text-xs text-gray-400">A brief exploration of stepping out of my comfort zone.</p>
                            </div>
                            <span className="flex items-center gap-1 text-gray-300">
                            <p className="text-xs">Read More</p>
                                <MoveRight size={11} />
                            </span>
                            
                        </div>
                    </div>
                </Link>

                <Link className="no-underline" href={"#"}>
                    <div className="items-start border-b pb-4 mt-4 gap-2 grid md:grid-cols-[1fr,1.5fr] px-4 md:gap-0">
                        <div className="text-sm gap-0 text-gray-400">
                            <p>March 23rd, 2024</p>
                        </div>
                        <div className="space-y-1 gap-0">
                            <div className="flex flex-col gap-2 justify-between">
                            <h3 className="underline hover:text-emerald-500 transition ease-in">Trying out new things</h3>
                            <p className="text-xs text-gray-400">A brief exploration of stepping out of my comfort zone.</p>
                            </div>
                            <span className="flex items-center gap-1 text-gray-300">
                            <p className="text-xs">Read More</p>
                                <MoveRight size={11} />
                            </span>
                            
                        </div>
                    </div>
                </Link>

                <Link className="no-underline" href={"#"}>
                    <div className="items-start border-b pb-4 mt-4 gap-2 grid md:grid-cols-[1fr,1.5fr] px-4 md:gap-0">
                        <div className="text-sm gap-0 text-gray-400">
                            <p>March 23rd, 2024</p>
                        </div>
                        <div className="space-y-1 gap-0">
                            <div className="flex flex-col gap-2 justify-between">
                            <h3 className="underline hover:text-emerald-500 transition ease-in">Trying out new things</h3>
                            <p className="text-xs text-gray-400">A brief exploration of stepping out of my comfort zone.</p>
                            </div>
                            <span className="flex items-center gap-1 text-gray-300">
                            <p className="text-xs">Read More</p>
                                <MoveRight size={11} />
                            </span>
                            
                        </div>
                    </div>
                </Link>

                <Link className="no-underline" href={"#"}>
                    <div className="items-start border-b pb-4 mt-4 gap-2 grid md:grid-cols-[1fr,1.5fr] px-4 md:gap-0">
                        <div className="text-sm gap-0 text-gray-400">
                            <p>March 23rd, 2024</p>
                        </div>
                        <div className="space-y-1 gap-0">
                            <div className="flex flex-col gap-2 justify-between">
                            <h3 className="underline hover:text-emerald-500 transition ease-in">Trying out new things</h3>
                            <p className="text-xs text-gray-400">A brief exploration of stepping out of my comfort zone.</p>
                            </div>
                            <span className="flex items-center gap-1 text-gray-300">
                            <p className="text-xs">Read More</p>
                                <MoveRight size={11} />
                            </span>
                            
                        </div>
                    </div>
                </Link>

            </div>
            <Footer />
        </>
    );
}