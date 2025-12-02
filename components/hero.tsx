import Image from "next/image";
import TextType from './TextType';
import Laptop from "./laptop";

export default function hero() {
  return (
      <div className="max-w-5xl h-[423px] mt-10 md:mt-32 font-(family-name:--font-firaCode) flex flex-col items-center justify-between md:flex-row">
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
        <div className="max-h-[469px] max-w-[386px] relative " >
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <Image
              src="/icons/OutlineLogo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <Laptop />
          <Image
              src="/icons/Dots.svg"
              alt="Logo"
              height={84}
              width={84}
              className="
                absolute bottom-15 right-15 sm:-right-15
                w-12 h-12
                sm:w-16 sm:h-16
                md:w-20 md:h-20
                lg:w-24 lg:h-24
              "
            />

        </div>
    </div>
  )
}


//  <p className="font-semibold text-3xl">Faisal is a <span className="text-(--primary)">Web Developer,</span> expert in <span className="text-(--primary)">NextJs</span> & <span className="text-(--primary)">MERN Stack</span></p>
          