import { ObjectType } from "@/types/global.types";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";

type Props = {
  userType?: string;
  userDetails: {
    [key: string]: any;
  };
  mode: string;
  riderWalletBalance?: ObjectType;
  ridereWalletDetails?: ObjectType;
  riderInOutflow?: ObjectType;
};

const RiderWalletSumaryCards = (props: Props) => {
  console.log(props);
  //   const { riderWalletBalance, riderInOutflow, ridereWalletDetails } = props;

  const items = [
    {
      title: "Balance",
      //   value: `₦${riderWalletBalance?.toLocaleString() || 0}`,
      value: "₦300,000",
      cardBgColor: "#03C2FE16",
      icon: <img src="/svgs/balance.svg" alt="balance.svg" />,
      iconCardColor: "#03C2FE16",
    },
    {
      title: "Inflows",
      //   value: ` ₦${riderInOutflow?.credit_amount?.toLocaleString() || 0}`,
      value: "₦300,000",
      //   value: ` ₦${riderInOutflow?.credit_amount?.toLocaleString() || 0}`,
      cardBgColor: "#15A32316",
      icon: <BsArrowDownSquareFill color="#15A323" />,
      iconCardColor: "#15A32316",
    },
    {
      title: "Outflows",
      value: "₦300,000",

      //   value: `₦${riderInOutflow?.debit_amount?.toLocaleString() || 0}`,
      cardBgColor: "#FF373916",
      icon: <BsArrowUpSquareFill color="#FF3739" />,
      iconCardColor: "#FF373916",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {items.map((item) => (
        <div key={item.title} className="mt-2">
          <div className={"rounded py-3 px-3 flex items-center justify-between h-[92px]"} style={{ backgroundColor: item.cardBgColor }}>
            <div className="flex items-center">
              <div className="p-2 rounded" style={{ background: item.iconCardColor }}>
                {item.icon}
              </div>
              <div className="ml-3">
                <div className="text-[#71939C] text-[15px]">{item.title}</div>
                <h5 className="text-blue-black font-bold mt-2">{item.value}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiderWalletSumaryCards;
