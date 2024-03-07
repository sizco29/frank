// components 
import ColophonSectionContainer from "../colophon_section";
import MediaCard from "../MediaCard/Index";

// icons
import { Book } from "lucide-react";

export default function Reading(){
    return(
        <ColophonSectionContainer title="Reading" icon={<Book size={14}/>}>

        <div className="space-y-4">
          <MediaCard/>
          
        </div>

      </ColophonSectionContainer>
    );
}