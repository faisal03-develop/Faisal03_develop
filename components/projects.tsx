import Image from "next/image"
import Link from "next/link"
import ElectricBorder from './ElectricBorder'

export default function projects() {
  return (
    <div id="projects" className="mt-30 font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-between mr-4">
            <div className="flex flex-row justify-center items-center text max-w-[701px] max-h-10 text-3xl">
                <h2><span className="text-(--primary)">    #</span>Projects</h2>
                <Image src="/icons/line7.svg" alt="line" width={711} height={1} className="ml-2 hidden sm:block"/>
            </div>
            <div>
                <Link href="#">view all ~~&gt;</Link>
            </div>
        </div>

        {/* Primal-Zone */}
        <div className="flex flex-col justify-center md:gap-16 sm:items-center sm:flex-row mx-auto px-4 
        sm:max-w-screen-sm 
        md:max-w-screen-md 
        lg:max-w-screen-lg">
            <div className="w-80 h-[420px] mt-12">
                <ElectricBorder
                    color="#C778DD"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                        <Link target="_blank" href="https://primal-zoneclone.vercel.app/">
                    <div className="p-4">
                        <p className="text-xl my-4">Primal Zone</p>
                        <Image src="/images/primalzone.png" alt="primal-zone" height={200} width={330} />
                        <p className="text-(--gray) text-sm py-3">Stack: NextJs, NodeJs, ExpressJs, PostGreSQL</p>
                        <button className="my-3 w-75 cursor-pointer">Visit Site</button>
                    </div>
                    </Link>
                </ElectricBorder>
            </div>

            {/* Resumind */}
            <div className="w-80 h-[420px] md:mt-12">
                <ElectricBorder
                    color="#C778DD"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                        <Link target="_blank" href="https://ai-resume-checker-dusky.vercel.app/">
                    <div className="p-4">
                        <p className="text-xl my-4">Resumind</p>
                        <Image src="/images/resumin.png" alt="Resumind" height={200} width={330} />
                        <p className="text-(--gray) text-sm py-3">Stack: NextJs, NodeJs, ExpressJs, PostGreSQL</p>
                        <button className="my-3 w-75 cursor-pointer">Visit Site</button>
                    </div>
                    </Link>
                </ElectricBorder>
            </div>

            {/* Typing-Tutor */}
            <div className="w-80 h-[420px] md:mt-12">
                <ElectricBorder
                    color="#C778DD"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                        <Link target="_blank" href="https://primal-zoneclone.vercel.app/">
                    <div className="p-4">
                        <p className="text-xl my-4">Primal Zone</p>
                        <Image src="/images/typing-tutor.png" alt="primal-zone" height={200} width={330} />
                        <p className="text-(--gray) text-sm py-3">Stack: NextJs, NodeJs, ExpressJs, PostGreSQL</p>
                        <button className="my-3 w-75 cursor-pointer">Visit Site</button>

                    </div>
                    </Link>
                </ElectricBorder>
            </div>
        </div>
    </div>
  )
}



// resumind:  https://ai-resume-checker-dusky.vercel.app/
// Primal Zone:  https://primal-zoneclone.vercel.app/
// Typing Tutor:  https://typing-tutor-nine.vercel.app/


