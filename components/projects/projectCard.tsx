import Link from "next/link"
import ElectricBorder from "./ElectricBorder"
import Image from "next/image"

interface ProjectCardProps {
  href: string;
  title: string;
  image: string;
  stack: string[];
}

export default function ProjectCard({ href, title, image, stack }: ProjectCardProps) {
  return (
    <div className="w-80 h-[420px] mx-auto">
      <ElectricBorder
        color="#C778DD"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        <Link target="_blank" href={href}>
          <div className="p-4">
            <p className="text-xl my-4">{title}</p>
            <Image src={image} alt={title} height={200} width={330} />
            <p className="text-(--gray) text-sm py-3">Stack: {stack.join(', ')}</p>
            <button className="my-3 w-75 cursor-pointer">Visit Site</button>
          </div>
        </Link>
      </ElectricBorder>
    </div>
  )
}
