import Image from "next/image";
import TextType from './TextType';
import Laptop from "./laptop";

export default function hero() {
  return (
      <div className="max-w-5xl h-[423px] mt-32 font-(family-name:--font-firaCode) flex flex-row items-center justify-between">
        <div className="max-w-[537px] max-h-[227px] flex flex-col ">
        <TextType 
          text={["Faisal is a Web Developer, expert in NextJs & MERN Stack"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          className="text-3xl font-bold"
          cursorCharacter="|"
        />
          <p className="text-(--gray) text-base mt-10">He crafts responsive websites where technologies meet creativity</p>
          <button className="border-2 bborder-solid border-primary) w-[152px] h-[37px] mt-6">Contact <span className="text-(--purple)">Me</span> !!!</button>
        </div>
        <div className="max-h-[469px] max-w-[386px] relative" >
          <Image src="/icons/OutlineLogo.svg" alt="Logo" height={155} width={155} className="absolute"/>
          <Laptop />
          <Image src="/icons/Dots.svg" alt="Logo" height={84} width={84} className="absolute bottom-15 -right-15"/>

        </div>
    </div>
  )
}


//  <p className="font-semibold text-3xl">Faisal is a <span className="text-(--primary)">Web Developer,</span> expert in <span className="text-(--primary)">NextJs</span> & <span className="text-(--primary)">MERN Stack</span></p>
          