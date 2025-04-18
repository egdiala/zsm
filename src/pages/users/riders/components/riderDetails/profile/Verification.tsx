import DetailsLayout from "@/pages/users/components/DetailsLayout";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {
  riderDetails: {
    [key: string]: any;
  };
};

const Verification = (props: Props) => {
  console.log(props);
  //   const { riderDetails } = props;

  const items = [
    {
      label: (
        <div className="flex gap-1 items-center">
          <div className="">NIN</div>
          <div className="text-green">
            <IoIosCheckmarkCircle size={20} />
          </div>
        </div>
      ),
      value: <div className="underline">786785785785</div>,
    },
  ];

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <div className="flex items-center px-3 pb-3 mt-1">
              <div className="flex-grow">
                <h3 className="text-[#058CEC] font-semibold text-sm">Verification</h3>
                <DetailsLayout gridCols={4} items={items} itemsCols={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
