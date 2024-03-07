// components
import ColophonSectionContainer from "../colophon_section";
import MediaCard from "../MediaCard/Index";

// icons
import { BoomBox } from "lucide-react";

export default function Listening() {
    return(
        <ColophonSectionContainer title="Music" icon={<BoomBox size={14}/>}>
            <MediaCard />

      </ColophonSectionContainer>
    );
}