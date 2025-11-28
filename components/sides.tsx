import Image from "next/image"

export default function sides() {
  return (
    <div>
        <Image src="/icons/Rectangle26.svg" alt="rectangle" className="absolute top-[672px] right-0" height={91} width={91}></Image>
        <Image src="/icons/Dots.svg" alt="dots" height={84} width={84} className="absolute -left-4 top-[1200px]"/>
    </div>
  )
}
