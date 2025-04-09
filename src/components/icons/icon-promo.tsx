import { HTMLAttributes } from "react"

export const IconPromo = (props: HTMLAttributes<SVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.33325 6.66783V9.3345C1.33325 10.6678 1.99992 11.3345 3.33325 11.3345H4.28659C4.53325 11.3345 4.77992 11.4078 4.99325 11.5345L6.93992 12.7545C8.61992 13.8078 9.99992 13.0412 9.99992 11.0612V4.94116C9.99992 2.95449 8.61992 2.19449 6.93992 3.24783L4.99325 4.46783C4.77992 4.59449 4.53325 4.66783 4.28659 4.66783H3.33325C1.99992 4.66783 1.33325 5.33449 1.33325 6.66783Z" stroke="currentColor"/>
            <path d="M12 5.33594C13.1867 6.91594 13.1867 9.08927 12 10.6693" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.22 3.66406C15.1466 6.23073 15.1466 9.76406 13.22 12.3307" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}