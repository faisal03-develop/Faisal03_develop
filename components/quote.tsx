import Image from "next/image";


export default function quote() {
  return (
    <>
    <div className="mt-70 md:mt-36 mx-auto text-center font-(family-name:--font-firaCode) text-sm md:text-2xl p-8 border-2 border-(--gray) w-80 md:w-[730px] md:h-[95px] relative">
        <p>Build boldly; the future rewards innovators.</p>
        <Image src="/icons/coma.svg" alt="coma"  height={28} width={41} className="absolute top-[-10]" />
        <Image src="/icons/coma.svg" alt="coma"  height={28} width={41} className="absolute bottom-[-10] right-7 z-12" />
    <div className="font-(family-name:--font-firaCode) p-4 flex flex-row justify-center border-2 border-(--gray) max-w-40 max-h-16 absolute -bottom-16 -right-0.5">
        <p>Anonymous</p>
    </div>
    </div>
    </>
  )
}
