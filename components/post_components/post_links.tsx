// components
import Link from "next/link";

export default function PostLink(props:any) {
    return(
        <>
         <li className="flex items-center gap-2 font-light 
         hover:translate-x-[5px] transition ease-in delay-100
         hover:text-emerald-500">
              {props.icon}
              <Link href={props.link}>{props.title}</Link>
            </li>
        </>
    );
}