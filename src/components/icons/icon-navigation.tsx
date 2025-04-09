import { HTMLAttributes } from "react"

export const IconNavigation = (props: HTMLAttributes<SVGElement>) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3 11L22 2L13 21L11 13L3 11Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
        </svg>
    )
}