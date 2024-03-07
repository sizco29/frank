// components 
import ColophonSectionContainer from "../colophon_section"
import PostLink from "../post_components/post_links"
import Link from "next/link";
import BookCard from "../post_components/postcard";

// icons
import { BookCopy } from "lucide-react";
import { NotebookPen } from "lucide-react";


export default function Posts() {

    return(
      <>
       <ColophonSectionContainer title="Posts" icon={<BookCopy size={14}/>}>

<div className="space-x-4">

  <div className="space-y-2 mb-2 grid md:grid-cols-2 sm:grid-cols-[-1fr,fr] items-center">
     <BookCard />
     <BookCard />
     <BookCard />
  </div>
  <Link className="text-sm mt-3  text-gray-400" href={"/writing"}>View all</Link>
</div>

</ColophonSectionContainer>

      
      </>
       
    );

   
}