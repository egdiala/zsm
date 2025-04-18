const CustomXAxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dy={16} textAnchor="middle" fill="#808D97">
      {payload.value}
    </text>
  );
};
export default CustomXAxisTick;
