import Image from "next/image"
import Link from "next/link"

export default function hanging() {
  return (
    <div className="w-[32px] h-[250px] absolute top-0 left-[60px] flex flex-col items-center">
        <Image src="/icons/Line10.svg" alt="Logo" width={1} height={191} />
        <div className="mt-[8px] flex flex-col gap-[8px]">
            <Link href="#">
            <Image src="/icons/Github.svg" alt="Github" height={32} width={32}/>
            </Link>
            <Link href="#">
            <Image src="/icons/Linkedin.svg" alt="Github" height={32} width={32}/>
            </Link>
            <Link href="#">
            <Image src="/icons/Email.svg" alt="Github" height={32} width={32}/>
            </Link>
        </div>
    </div>
  )
}
