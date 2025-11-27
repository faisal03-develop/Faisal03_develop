import Image from "next/image";
import Laptop from "./laptop";

export default function hero() {
  return (
      <div className="max-w-[1024px] h-[423px] pt-[65px] font-(family-name:--font-firaCode) flex flex-row items-center justify-between">
        <div className="max-w-[537px] max-h-[227px] flex flex-col ">
          <p className="font-semibold text-3xl">Faisal is a <span className="text-(--primary)">Web Developer</span> expert in <span className="text-(--primary)">NextJs</span> & <span className="text-(--primary)">MERN Stack</span></p>
          <p className="text-(--gray) text-base mt-8">He crafts responsive websites where technologies meet creativity</p>
          <button className="border bborder-solid border-violet-500 w-[148px] h-[37px] mt-6">Contact Me !!</button>
        </div>
        <div className="max-h-[469px] max-w-[386px]">
          {/* <Image src="/icons/OutlineLogo.svg" alt="Logo" height={155} width={155} className="z-0"/> */}
          <Laptop />
          {/* <Image src="/icons/Dots.svg" alt="Logo" height={84} width={84}/> */}

        </div>
    </div>
  )
}
