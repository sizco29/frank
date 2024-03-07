// Components
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function BookLink() {
    return(
        <>
        <Link target="_blank" className="hover:text-emerald-500 flex w-full no-underline" href={"#"}>
            <div className="flex space-x-4 items-center w-full hover:origin-center hover:translate-x-[5px] transition ease-in delay-100">
            <Image
            className="rounded-md"
            src="https://assets.literal.club/4/ckn6dmh66108831i8djowf9emm.jpg?size=600"
            width={60} 
            height={50}
             alt="something"  />
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                <p className="underline font-regular">Shadow of the Wind</p>
                <p className="text-sm text-gray-400">Carlos Ruiz Safon</p>
                </div>
                <div>
                <Badge>Reading</Badge>
                </div>
            </div>
            </div>
        
        </Link>
        </>
    );


}