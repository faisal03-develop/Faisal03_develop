import Image from "next/image"
import Link from "next/link"
import ElectricBorder from './ElectricBorder'


export default function projects() {
  return (
    <div className="mt-30 font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-between mr-4">
            <div className="flex flex-row justify-center items-center text max-w-[701px] max-h-10 text-3xl">
                <h2><span className="text-(--primary)">#</span>Projects</h2>
                <Image src="/icons/line7.svg" alt="line" width={711} height={1} className="ml-4"/>
            </div>
            <div>
                <Link href="#">view all ~~&gt;</Link>
            </div>
        </div>
        <div className="w-80">
            <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                >
                <div>
                    
                </div>
            </ElectricBorder>
        </div>
    </div>
  )
}



// resumind:  https://ai-resume-checker-dusky.vercel.app/
