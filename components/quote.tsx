import Image from "next/image";


export default function quote() {
  return (
    <>
    <div className="mt-36 text-center font-(family-name:--font-firaCode) text-2xl p-8 border-4 border-(--gray) max-w-[730px] max-h-[95px] relative">
        <p>With great power comes great electricity bill</p>
        <Image src="/icons/coma.svg" alt="coma"  height={20} width={25} className="absolute top-[-10]" />
    </div>
    </>

  )
}
