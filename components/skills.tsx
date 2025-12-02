import Image from "next/image"
import Logolog from "./logolog"


export default function skills() {
  return (
    <div className="font-(family-name:--font-firaCode) mt-4">
        <div className="flex flex-row justify-start sm:justify-center items-center text max-w-[701px] max-h-10 text-3xl">
            <p><span className="text-(--primary)">#</span>Skills</p>
            <Image src="/icons/line7.svg" alt="line" width={711} height={1} className="ml-4 hidden sm:block"/>
        </div>
        <div className="mb-10">
          <div className="border-2 border-solid border-(--gray) p-4 mt-15">
            <p className="mb-3 font-bold">Technical Skills: </p>
            <p className="text-(--gray) text-sm">HTML, CSS, javaScript, Next, React, NodeJs, ExpressJs, PostGreSQL, PHP, C++...</p>
          </div>
          
          <div className="border-2 border-solid border-(--gray) p-4 my-4">
            <p className="mb-3 font-bold">Tools: </p>
            <p className="text-(--gray) text-sm">Visual Studio, VS Code, MySQL Server, MONGODB, Git, Github, POSTMAN, Stripe, Clerk...</p>
          </div>
        </div>
        <div className="pt-8">
            <Logolog />
        </div>
    </div>
  )
}
