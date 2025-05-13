import DetailsLayout from "@/pages/users/components/DetailsLayout";

type Props = {
  riderDetails: {
    [key: string]: any;
  };
};

const OtherInfo = (props: Props) => {
  console.log(props);
  //   const { riderDetails } = props;

  const items = [
    {
      label: "Referral Code",
      value: "234536",
    },
    {
      label: "Promo Code (Number of Used)",
      value: "24",
    },
    {
      label: "App Download Area",
      value: "24",
    },
    {
      label: "Carbon Credit Earned",
      value: "234536",
    },
  ];

  return (
    <div>
      {/* Contact Info Card */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <div className="flex items-center px-3 pb-3 mt-1">
              <div className="flex-grow">
                <h3 className="text-[#058CEC] font-semibold text-sm">Other Information</h3>
                <DetailsLayout gridCols={3} items={items} itemsCols={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
