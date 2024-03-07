// components 
import ColophonSectionContainer from "../colophon_section"
import PostLink from "../post_components/post_links"
import Link from "next/link";

// icons
import { BookCopy } from "lucide-react";
import { NotebookPen } from "lucide-react";


export default function Posts() {

    return(
        <ColophonSectionContainer title="Posts" icon={<BookCopy size={14}/>}>

        <div className="space-x-4">
    
          <ul className="space-y-2 mb-2">
            <PostLink 
            title="Trying out new things"
            link="#"
            icon={<NotebookPen size={14}/>}
             />
              <PostLink 
            title="Trying out new things"
            link="#"
            icon={<NotebookPen size={14}/>}
             />
              <PostLink 
            title="Trying out new things"
            link="#"
            icon={<NotebookPen size={14}/>}
             />
          </ul>
    
          <Link className="text-sm text-gray-400" href={"/posts"}>View all</Link>
    
        </div>
        </ColophonSectionContainer>
    );

   
}