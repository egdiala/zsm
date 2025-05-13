import { PiPencilSimpleDuotone } from "react-icons/pi";
type Props = {
  onClick?: () => void;
};

const EditComponent = (props: Props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center text-green">
      <PiPencilSimpleDuotone size={18} />
      <div className="text-semibold ms-2 font-medium">Edit</div>
    </div>
  );
};

export default EditComponent;
