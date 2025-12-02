import Image from "next/image"

export default function sides() {
  return (
    <div className="hidden lg:block">
        <Image src="/icons/Rectangle26.svg" alt="rectangle" className="absolute top-[672px] right-0" height={91} width={91}></Image>
        <Image src="/icons/Dots.svg" alt="dots" height={84} width={84} className="absolute -left-4 top-[1200px]"/>
        <Image src="/icons/Rectangle25.svg" alt="rectangle" className="absolute top-[2083px] left-0" height={91} width={91}></Image>
        <Image src="/icons/Dots.svg" alt="dots" height={84} width={84} className="absolute  right-0 top-[1800px]"/>
    </div>
  )
}
