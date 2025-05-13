type Props = {
  text: string;
};

const CountComponent = ({ text }: Props) => {
  return (
    <div className="py-2 px-3 " style={{ backgroundColor: "#d5f0f7", borderRadius: 16 }}>
      {parseInt(text, 10).toLocaleString()}
    </div>
  );
};

export default CountComponent;
