import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


// Alternative with image sources
const imageLogos = [
  { src: "/logos/js.png", alt: "javaScript", href: "#" },
  { src: "/logos/html.png", alt: "HTMl", href: "#" },
  { src: "/logos/css.png", alt: "CSS", href: "#" },
  // { src: "/logos/c++.png", alt: "c++", href: "#" },
  { src: "/logos/react.png", alt: "react", href: "#" },
  { src: "/logos/mongodb.png", alt: "database", href: "#" },
  { src: "/logos/express.png", alt: "express", href: "#" },
  { src: "/logos/next.jpg", alt: "Next", href: "#" },
];

export default function App() {
  return (
    <div style={{ height: '150px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#282C33"
        ariaLabel="Technology partners"
      />
    </div>
  );
}