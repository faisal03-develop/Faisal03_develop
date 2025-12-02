import Image from "next/image"
import Link from "next/link"
export default function mobile_menu() {
  return (
    <div className="absolute font-(family-name:--font-firaCode) top-0 left-0 right-0 bottom-0 bg-(--background) sm:hidden m-3">
        <div className="w-sm flex flex-row justify-between">
            <div className="flex flex-row justify-between gap-2">
            <Image src="/icons/Logo.svg" alt="Logo" height={20} width={20} ></Image>
            <h1 className="text-3xl font-bold">Faisal</h1>
            </div>
            <Image src="/icons/cross.svg" alt="Cross" height={20} width={20}></Image>
        </div>
        <div className="flex-col items-start mx-3">
            <ul>
                    <li className="my-10 text-2xl"><Link href='#'><span className="text-(--primary)">#</span>home</Link></li>
                    <li className="my-10 text-2xl"><Link href='#projects'><span className="text-(--primary)">#</span>works</Link></li>
                    <li className="my-10 text-2xl"><Link href='#about'><span className="text-(--primary)">#</span>about-me</Link></li>
                    <li className="my-10 text-2xl"><Link href='#contact'><span className="text-(--primary)">#</span>contacts</Link></li>
            </ul>
        </div>
        <div className="mt-10 flex flex-row justify-between px-20">
                    <Link href="#"><Image src="/icons/Vector.svg" alt="Discord" height={40} width={40}></Image></Link>
                    <Link href="#"><Image src="/icons/Email.svg" alt="Email" height={40} width={40}></Image></Link>
                    <Link href="#"><Image src="/icons/Linkedin.svg" alt="Discord" height={40} width={40}></Image></Link>
                </div>
    </div>
  )
}
