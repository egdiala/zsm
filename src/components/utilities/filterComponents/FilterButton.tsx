import { FaFilter } from "react-icons/fa";
type Props = {
  onClick?: any;
};

const FilterComponent = (props: Props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="cursor-pointer items-center flex text-grey-dark-1 bg-light-green px-4 py-1.5">
      <FaFilter />
      <div className="ms-3 font-medium p-x-1 py-0.5">Date</div>
    </div>
  );
};

export default FilterComponent;
