"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Mobile_Menu from "@/components/mobile_menu";

type HeaderProps = {
    onOpen?: () => void
}

export default function header({ onOpen }: HeaderProps) {
    const [open, setOpen] = useState(false)

    function openMenu() {
        setOpen(true)
        if (onOpen) onOpen()
    }

    function closeMenu() {
        setOpen(false)
    }
    const originalOverflow = useRef<string | null>(null)

    useEffect(() => {
        if (typeof document === 'undefined') return

        if (open) {
            if (originalOverflow.current === null) originalOverflow.current = document.body.style.overflow
            document.body.style.overflow = 'hidden'
        } else {
            if (originalOverflow.current !== null) {
                document.body.style.overflow = originalOverflow.current || ''
                originalOverflow.current = null
            }
        }

        return () => {
            if (originalOverflow.current !== null) {
                document.body.style.overflow = originalOverflow.current || ''
                originalOverflow.current = null
            }
        }
    }, [open])
  return (
    <div>
        <nav className="flex flex-row justify-between font-(family-name:--font-firaCode) pt-8 ">
            <div className="flex flex-row items-center gap-[8px] font-bold">
                <Image src="/icons/Logo.svg" alt="Logo" width={16} height={16} priority />
                <h1 className="w-[120px] h-[21px] text-foreground">Faisal Altaf</h1>
            </div>
            <div className="hidden sm:block">
                <ul className="flex flex-row justify-center items-center gap-9 text-foreground">
                    <li><Link href='#'><span className="text-(--primary)">#</span>home</Link></li>
                    <li><Link href='#projects'><span className="text-(--primary)">#</span>works</Link></li>
                    <li><Link href='#about'><span className="text-(--primary)">#</span>about-me</Link></li>
                    <li><Link href='#contact'><span className="text-(--primary)">#</span>contacts</Link></li>
                </ul>
            </div>
                        <div className="sm:hidden">
                                <button aria-label="Open mobile menu" onClick={openMenu} className="p-1">
                                    <Image src="/icons/menu.svg" alt="menu" height={24} width={24}></Image>
                                </button>
                        </div>
                        {open && <Mobile_Menu onClose={closeMenu} />}
        </nav>
    </div>
  )
}
