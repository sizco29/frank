import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";



export default function BookCard() {
    return(
        <>
        <section className=" flex flex-col
         w-full rounded-md p-[8px] shadow-md">
            <div className="flex items-center justify-between
            transform  hover:translate-x-1 transition-all ease-in">
                <div className="">
                <Image
                className="rounded-md h-[100px]"
                width={100}
                height={1}
                alt="something"
                src="https://assets.literal.club/4/ckn6dmh66108831i8djowf9emm.jpg" />

                </div>
                
                <div className=" space-y-2 flex flex-col items-start ">
                <h4 className="mt-3 font-semibold text-[0.875rem]
                 hover:text-emerald-500 transition ease-in">
                    <span>
                        Trying Out New Things
                    </span>
                </h4>
                <p className="leading-4 mt-1 text-[0.75rem] text-gray-400 font-normal">
                    <span>
                        A brief exploration of stepping out of my comfort zone.
                    </span>
                </p>
                <Link className="text-xs flex items-center gap-1" href={"#"}> 
                Read more 
                <MoveRight size={12} /> </Link>
                
                </div>
               
                
            </div>
            
           
        </section>
        </>
    );
}