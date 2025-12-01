import Image from "next/image"

export default function contact() {
  return (
    <div className="font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-center items-center text max-w-[701px] max-h-10 text-3xl">
                  <p className="max-w-[250px]"><span className="text-(--primary)">#</span>Contact</p>
                  <Image src="/icons/line7.svg" alt="line" width={520} height={1} className="ml-4"/>
        </div>
            <div className="max-w-[515px] mt-8 text-(--gray)">
          <p>
            I’m interested in opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div className="flex flex-row justify-between mx-20">
          <Image src="/icons/Github.svg" height={50} width={50} alt="github"></Image>
          <Image src="/icons/Email.svg" height={50} width={50} alt="github"></Image>
          <Image src="/icons/LinkedIn.svg" height={50} width={50} alt="github"></Image>
          <Image src="/icons/Vector.svg" height={50} width={50} alt="github"></Image>

        </div>
    </div>
  )
}
