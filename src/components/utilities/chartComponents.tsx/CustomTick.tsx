const CustomTick = (props: any) => {
  const { x, y, payload, index, currentHoverIndex } = props;
  const isActive = index === currentHoverIndex;
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-15}
        y={0}
        width={30}
        height={20}
        fill={isActive ? "#22c55e" : "transparent"} // Change to the color you want
        rx={4}
        ry={4}
      />
      <text
        x={0}
        y={15}
        textAnchor="middle"
        fill={isActive ? "#ffffff" : "#808D97"} // Adjust text color based on the background
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomTick;
