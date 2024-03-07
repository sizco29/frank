// components
import Link from "next/link";

//icons
import { MoveUpRight } from "lucide-react";
import { MapPin } from "lucide-react";

// Experiences Details:
// Experience Title
// Experience Company
// Experience Job Location

export default function ExperienceDetails(props:any) {

    return(
        <>
        <div>
            <p className="text-base font-light ">{props.experienceTitle}</p>
            <Link target="_blank" href={props.experienceCompanyLink} className="flex items-center gap-1 text-gray-400">{props.experienceCompany} <MoveUpRight size={14}/></Link>
            <p className=" mt-1 flex items-center text-xs text-gray-400 gap-1"><MapPin size={11}/>{props.experienceLocation}</p>
        </div>

        
        </>
    );

} 