import { HTMLAttributes } from "react"

export const IconSplit = (props: HTMLAttributes<SVGElement>) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16 3H21M21 3V8M21 3L15 9M8 3H3M3 3V8M3 3L10.828 10.828C11.2047 11.2046 11.5025 11.6526 11.7037 12.1458C11.905 12.639 12.0057 13.1674 12 13.7V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}