
import Image from "next/image"
import Spidy from "./spidy"

export default function about() {
  return (
    <div id="about" className="font-(family-name:--font-firaCode)">
        <div className="flex flex-row justify-start md:justify-center items-center text max-w-[701px] max-h-10 text-3xl">
            <p className="max-w-[250px]"><span className="text-(--primary)">#</span>About Me</p>
            <Image src="/icons/Line7.svg" alt="line" width={520} height={1} className="ml-4 hidden md:block"/>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
            <div className="max-w-[415px] mt-8 text-(--gray)">
                <p className="text-center sm:text-start">Hello, i’m Faisal!
                    <br />
                    <br />
                        I’m a front-end developer based in Lahore, Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                    <br />
                    <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over two years. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                </div>
                <div>  
                    <Spidy />
                </div>
        </div>

    </div>
  )
}
