import { HTMLAttributes } from "react"

export const IconDownload = (props: HTMLAttributes<SVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 7.33594V11.3359L7.33333 10.0026" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00008 11.3333L4.66675 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6666 6.66927V10.0026C14.6666 13.3359 13.3333 14.6693 9.99992 14.6693H5.99992C2.66659 14.6693 1.33325 13.3359 1.33325 10.0026V6.0026C1.33325 2.66927 2.66659 1.33594 5.99992 1.33594H9.33325" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6666 6.66927H11.9999C9.99992 6.66927 9.33325 6.0026 9.33325 4.0026V1.33594L14.6666 6.66927Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}