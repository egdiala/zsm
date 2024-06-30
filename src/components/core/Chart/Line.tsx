import React from "react"
import { ResponsiveLine, type LineSvgProps } from "@nivo/line"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const LineChart: React.FC<LineSvgProps> = (props) => (
    <ResponsiveLine {...props}  />
)