import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Header from "@/components/header"
import Hanging from "@/components/hanging"
import Hero from "@/components/hero"
import Sides from "@/components/sides"
import Quote from "@/components/quote"
import Mobile_Menu from '@/components/mobile_menu'

// Lazy load heavy below-the-fold sections
const Projects = dynamic(() => import('@/components/projects'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse rounded" />
});

const Skills = dynamic(() => import('@/components/skills'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse rounded" />
});

const About = dynamic(() => import('@/components/about'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse rounded" />
});

const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse rounded" />
});

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <div className="h-20 bg-gray-800 animate-pulse rounded" />
});

function page() {
  return (
    <div className="mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="bg-background">
          <Hanging />
          <Header />
          <Hero />
          <Quote />
          <Sides />
          
          <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded" />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded" />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded" />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded" />}>
            <Contact />
          </Suspense>
          
          <Suspense fallback={<div className="h-20 bg-gray-800 animate-pulse rounded" />}>
            <Footer />
          </Suspense>
      </div>
    </div>
  )
}

export default page