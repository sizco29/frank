// components
import Link from "next/link"

//icon
import { Heart }from 'lucide-react'
import { Github } from "lucide-react";
import { NotebookText } from 'lucide-react'

export default function Footer() {
    return(
        <>
        <footer className="flex flex-row md:flex-row justify-between mb-24 md:mb-32 px-2 md:px-0 mt-12 md:pt-8 text-gray-500 container">
            <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with  <Heart color="red" size={14}/>  by <strong>Paco</strong>
            </p>
            <div className="flex item-center gap-3 text-sm">
                <Link target="_blank" className="flex items-center gap-1" href={"https://github.com/xirapo"}>
                    <Github size={14} color="green" />
                    Github
                </Link>
                <Link className="flex items-center gap-1" href={"/colophon"}>
                    <NotebookText size={14}/>
                     Colophon
                </Link>
            </div>
        </footer>
        </>
    );
}