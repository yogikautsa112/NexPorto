"use client"

import { usePathname, useRouter } from "next/navigation"
import animatePageOut from "@/utils/animate"
import { FC, ReactElement } from "react"

interface Props {
    href: string
    label: string  
}

const Transition: FC<Props> = ({href, label}: Props): ReactElement => {
    const router = useRouter()  
    const path = usePathname()

    const handleClick = () => {
        if (path !== href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button className="text-xl text-neutral-900 hover:text-neutral-700" onClick={handleClick}>
            {label}
        </button>
    )
}

export default Transition