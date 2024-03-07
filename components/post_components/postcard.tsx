import Image from "next/image";
import { Button } from "../ui/button";
import { Ghost } from "lucide-react";

// components


// icons

export default function BookCard() {
    return(
        <>
        <section className=" bg-[#262626] flex flex-col 
        justify-between w-[200px] h-[288px] rounded-md p-[8px] shadow-md
        hover:translate-y-[5px] transition ease-in delay-100">
            <div>
                <Image
                className="rounded-md h-40"
                width={184}
                height={1}
                alt="something"
                src="https://assets.literal.club/4/ckn6dmh66108831i8djowf9emm.jpg" />
                <h4 className="mt-3 font-semibold text-[0.875rem] ">
                    <span>
                        Trying Out New Things
                    </span>
                </h4>
                <p className="leading-4 mt-1 text-[0.75rem] text-gray-400 font-normal">
                    <span>
                        A brief exploration of stepping out of my comfort zone.
                    </span>
                </p>
            </div>
            <Button variant={"ghost"} className="h-8 w-full hover:bg-emerald-500 hover:text-white"> Read more</Button>
        </section>
        </>
    );
}