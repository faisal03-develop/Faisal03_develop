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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-x-20 mt-12 max-w-6xl mx-auto px-4">
        
        {/* Primal-Zone */}
            <ProjectCard 
                href="https://primal-zoneclone.vercel.app/"
                title="Primal Zone"
                image="/images/primalzone.png"
                stack={["NextJs", "NodeJs", "ExpressJs", "PostGreSQL"]}
            />
            

            {/* Resumind */}
            <ProjectCard 
                href="https://ai-resume-checker-dusky.vercel.app/"
                title="Resumind"
                image="/images/resumin.png"
                stack={['NextJs', 'NodeJs', 'ExpressJs', 'PostGreSQL']}
            />

            {/* Typing-Tutor */}
            <ProjectCard 
                href="https://typing-tutor-nine.vercel.app/"
                title="Typing Tutor"
                image="/images/typing-tutor.png"
                stack={["NextJs", "NodeJs", "ExpressJs", "PostGreSQL"]}
            />

            {/* Project 4 */}
            <ProjectCard 
                href="#"
                title="ERR Detection"
                image="/images/ErrHome.png"
                stack={["PHP", "Pyhton", "MySQL", "HTML CSS"]}
            />

            {/* Project 5 */}
            <ProjectCard 
                href="#"
                title="Future Forge"
                image="/images/futureforge.png"
                stack={['PHP', 'AJAX', 'HTML CSS', 'MySQL', "JQuery"]}
            />

            {/* Project 6 */}
            <ProjectCard 
                href=""
                title="Ghost Cursor"
                image="/images/ghost.png"
                stack={["NextJs", "ReactJs", "TailwinsCSS", "TypeScript"]}
            />
        </div>


    </div>
  )
}



// resumind:  https://ai-resume-checker-dusky.vercel.app/
// Primal Zone:  https://primal-zoneclone.vercel.app/
// Typing Tutor:  https://typing-tutor-nine.vercel.app/


