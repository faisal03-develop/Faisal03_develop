import Image from "next/image"
import Link from "next/link"

export default function hanging() {
  return (
    <div className="w-8 h-[250px] absolute top-0 left-[60px] flex-col items-center xl:flex hidden">
        <Image src="/icons/Line10.svg" alt="Logo" width={1} height={191} />
        <div className="mt-2 flex flex-col gap-2">
            <Link href="https://github.com/faisal03-develop">
            <Image src="/icons/Github.svg" alt="Github" height={32} width={32}/>
            </Link>
            <Link href="https://www.linkedin.com/in/faisal03-linked/">
            <Image src="/icons/Linkedin.svg" alt="Github" height={32} width={32}/>
            </Link>
            <Link href="#">
            <Image src="/icons/Email.svg" alt="Github" height={32} width={32}/>
            </Link>
        </div>
    </div>
  )
}
