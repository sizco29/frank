// components 
import ColophonSectionContainer from "../colophon_section";
import BookLink from "../reading_components/book_link";

// icons
import { Book } from "lucide-react";

export default function Reading(){
    return(
        <ColophonSectionContainer title="Reading" icon={<Book size={14}/>}>

        <div className="space-y-4">
          <BookLink />

          <BookLink />

        </div>

      </ColophonSectionContainer>
    );
}