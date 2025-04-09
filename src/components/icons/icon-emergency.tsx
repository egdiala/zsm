import { HTMLAttributes } from "react"

export const IconEmergency = (props: HTMLAttributes<SVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.33325 14.6641H14.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4C4.68667 4 2 6.68667 2 10V14.6667H14V10C14 6.68667 11.3133 4 8 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 1.33594V2.0026" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.66675 2.66406L3.33341 3.33073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3334 2.66406L12.6667 3.33073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}