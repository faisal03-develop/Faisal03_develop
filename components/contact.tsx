import Image from "next/image"

export default function contact() {
  return (
    <div className="font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-center items-center text max-w-[701px] max-h-10 text-3xl">
                  <p className="max-w-[250px]"><span className="text-(--primary)">#</span>Contact</p>
                  <Image src="/icons/line7.svg" alt="line" width={520} height={1} className="ml-4"/>
        </div>
        <div className="flex flex-row justify-between mt-10 mb-20">

            <div className="max-w-[415px] mt-8 text-(--gray)">
          <p>
            Interested in working together or discussing an idea? I’d love to hear from you.
            <br /><br />
            From collaboration requests to general inquiries, my inbox is always open.
            Feel free to reach out anytime—let’s create something great together.
          </p>
          <p className="mt-4">Let’s build something great together</p>
        </div>
        <div className="flex flex-col justify-between mx-20 border-2 border-(--gray)">
          <div className="flex flex-row gap-4 items-center p-3">
            <Image src="/icons/Github.svg" height={50} width={50} alt="github"></Image>
            <p className="text-(--gray)">fasial03_develop</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-3">
            <Image src="/icons/Email.svg" height={50} width={50} alt="Email"></Image>
          <p className="text-(--gray)">altaffaisal532@gmail.com</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-3">
            <Image src="/icons/LinkedIn.svg" height={50} width={50} alt="LinkedIn"></Image>
          <p className="text-(--gray)">faisal03_linked</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-3">
          <Image src="/icons/Vector.svg" height={45} width={45} alt="DisCord"></Image>
          <p className="text-(--gray)">faisalaltaf06</p></div>
        </div>
        </div>
    </div>
  )
}
