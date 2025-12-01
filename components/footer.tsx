import Image from "next/image"
import Link from "next/link"

export default function footer() {
  return (
    <div className="font-(family-name:--font-firaCode)">
        <div className='border-t-3 border-(--gray) py-8 flex flex-row justify-between'>
            <div>
                <div className="flex flex-row items-center w-120">    
                    <Image src="/icons/logo.svg" alt="logo" height={16} width={16} />
                    <p className="ml-2">Faisal Altaf</p>
                    <p className="text-(--gray) ml-15 text-sm">altaffaisal532@gmail.com</p>
                </div>
                <div>
                    <p className="text-sm mt-5">Web designer and front-end developer</p>
                </div>
            </div>
            <div className="w-28 flex flex-col items-end">
                <p className="text-2xl">Connect</p>
                <div className="mt-5 gap-4 flex flex-row justify-between">
                    <Link href="#"><Image src="/icons/Vector.svg" alt="Discord" height={20} width={20}></Image></Link>
                    <Link href="#"><Image src="/icons/Email.svg" alt="Email" height={20} width={20}></Image></Link>
                    <Link href="#"><Image src="/icons/Linkedin.svg" alt="Discord" height={20} width={20}></Image></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
