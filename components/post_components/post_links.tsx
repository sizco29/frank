// components
import Link from "next/link";

export default function PostLink(props:any) {
    return(
        <>
         <li className="flex items-center gap-2 font-light">
              {props.icon}
              <Link href={props.link}>{props.title}</Link>
            </li>
        </>
    );
}