import Image from "next/image"
import Link from "next/link"
import ProjectCard from "./projects/projectCard"

export default function projects() {
  return (
    <div id="projects" className="mt-30 font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-between mr-4">
            <div className="flex flex-row justify-center items-center text max-w-[701px] max-h-10 text-3xl">
                <h2><span className="text-(--primary)">    #</span>Projects</h2>
                <Image src="/icons/Line7.svg" alt="line" width={711} height={1} className="ml-2 hidden md:block"/>
            </div>
            <div>
                <Link href="#">view all ~~&gt;</Link>
            </div>
        </div>

        {/* Primal-Zone */}
        <div className="flex flex-col items-center md:justify-center md:gap-16 sm:items-center md:flex-row mx-auto px-4">
        <div className="w-80 h-[420px] mt-12">

            <ProjectCard 
                        href="https://primal-zoneclone.vercel.app/"
                        title="Primal Zone"
                        image="/images/primalzone.png"
                        stack={["NextJs", "NodeJs", "ExpressJs", "PostGreSQL"]}
                    />
                    </div>
            

            {/* Resumind */}
            <div className="w-80 h-[420px] md:mt-12">
                <ProjectCard 
                    href="https://ai-resume-checker-dusky.vercel.app/"
                    title="Resumind"
                    image="/images/resumin.png"
                    stack={['NextJs', 'NodeJs', 'ExpressJs', 'PostGreSQL']}
                />
            </div>

            {/* Typing-Tutor */}
            <div className="w-80 h-[420px] md:mt-12">
                    <ProjectCard 
                        href="https://typing-tutor-nine.vercel.app/"
                        title="Typing Tutor"
                        image="/images/typing-tutor.png"
                        stack={["NextJs", "NodeJs", "ExpressJs", "PostGreSQL"]}
                    />
            </div>
        </div>


    </div>
  )
}



// resumind:  https://ai-resume-checker-dusky.vercel.app/
// Primal Zone:  https://primal-zoneclone.vercel.app/
// Typing Tutor:  https://typing-tutor-nine.vercel.app/


