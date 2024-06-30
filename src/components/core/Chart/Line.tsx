import React, { useEffect } from "react"
import { ResponsiveLine, type LineSvgProps } from "@nivo/line"
import { useAnimate, useInView } from "framer-motion"
import { cn } from "@/libs/cn"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const LineChart: React.FC<LineSvgProps & { className: string }> = ({ className, ...props }) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: true })
    
    useEffect(() => {
        if (isInView) {
            const circles = Array.from(document.querySelectorAll("circle")).reverse()
            const enterAnimation = async () => {
                animate("path", { pathLength: [0, 1] }, { duration: 2, ease: "easeOut" });
            }
            circles.forEach((circle, index) => {
                animate(circle, { r: [0, 5.5] }, { duration: 1.8, delay: index * 0.005, ease: "linear" });
            });
            enterAnimation()
        }
    },[animate, isInView, scope])
    return (
        <div ref={scope} className={cn("w-full h-full", className)}>
            <ResponsiveLine {...props} />
        </div>
    )
}