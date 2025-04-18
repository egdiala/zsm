import { MdOutlineChevronRight } from "react-icons/md";

const OverviewSumaryCards = () => {
  const items = [
    {
      title: "Total Riders",
      value: 400,
      cardBgColor: "#F5FBFD",
      icon: "total-riders.svg",
      iconCardColor: "#e0f8f6",
      caretColor: "#04A7A7",
      tag: "total",
    },
    {
      title: "Verified Riders",
      value: 400,
      cardBgColor: "#e9fbf8",
      icon: "verified-riders.svg",
      iconCardColor: "#e0f8f6",
      caretColor: "#04A7A7",
      tag: "verified",
    },
    {
      title: "Unverified Riders",
      value: 400,
      cardBgColor: "#ffeeef",
      icon: "unverified-riders.svg",
      iconCardColor: "#ffdfdf",
      caretColor: "#FF3739",
      tag: "unverified",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {items.map((item) => (
        <div key={item.title} className="cursor-pointer">
          <div className="flex items-center justify-between rounded py-3 ps-3 pr-4" style={{ backgroundColor: item.cardBgColor, height: 92 }} onClick={() => {}}>
            <div className="flex items-center">
              <div className="p-2 rounded" style={{ backgroundColor: item.iconCardColor }}>
                <img alt="icon" src={`/svgs/${item.icon}`} height={19} width={25} />
              </div>
              <div className="ml-3">
                <div className="text-sm text-grey-dark-2">{item.title}</div>
                <h5 className="text-blue-black font-semibold mt-2">{item.value}</h5>
              </div>
            </div>
            <div>
              <MdOutlineChevronRight size={25} color={item.caretColor} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewSumaryCards;
