import Image from "next/image"
import Logolog from "./logolog"

export default function skills() {
  return (
    <div>
        <div className="flex flex-row font-(family-name:--font-firaCode) justify-center items-center text max-w-[701px] max-h-10 text-3xl">
            <p><span className="text-primary)">#</span>Skills</p>
            <Image src="/icons/line7.svg" alt="line" width={711} height={1} className="ml-4"/>
        </div>
        <div className="py-8">
            <Logolog />
        </div>
    </div>
  )
}
