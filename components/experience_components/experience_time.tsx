// components
import { Badge } from "../ui/badge";

//icons

export default function ExperienceTime(props:any) {

    return(
        <>
        <div className="text-sm flex items-center text-gray-500 gap-2">
            <p>{props.experienceInitialDate}</p>
            <p>-</p>
            {props.expCurrent ? <Badge className="font-light bg-blue-500/20">Present</Badge> : <p>{props.experienceEndDate}</p> }
        </div>
        
        </>
    );

} 