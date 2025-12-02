import Image from "next/image";
import Link from "next/link";

export default function header() {
  return (
    <div>
        <nav className="flex flex-row justify-between font-(family-name:--font-firaCode) pt-8 ">
            <div className="flex flex-row items-center gap-[8px] font-bold">
                <Image src="/icons/Logo.svg" alt="Logo" width={16} height={16} />
                <h1 className="w-[120px] h-[21px] text-foreground">Faisal Altaf</h1>
            </div>
            <div className="hidden sm:block">
                <ul className="flex flex-row justify-center items-center gap-9 text-foreground">
                    <li><Link href='#'><span className="text-(--primary)">#</span>home</Link></li>
                    <li><Link href='#projects'><span className="text-(--primary)">#</span>works</Link></li>
                    <li><Link href='#about'><span className="text-(--primary)">#</span>about-me</Link></li>
                    <li><Link href='#contact'><span className="text-(--primary)">#</span>contacts</Link></li>
                </ul>
            </div>
            <div className="sm:hidden">
                <Image src="/icons/menu.svg" alt="menu" height={24} width={24}></Image>
            </div>
        </nav>
    </div>
  )
}
