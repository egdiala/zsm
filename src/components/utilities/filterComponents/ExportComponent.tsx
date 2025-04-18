type Props = {
  onClick?: () => void;
};

const ExportComponent = (props: Props) => {
  console.log(props);
  //   const { deleteModalConfig } = useContext(AppPrefrenceContext);

  //   const { onClick } = props;
  return (
    <div
      //   onClick={() =>
      //     deleteModalConfig({
      //       firstText: "Are you sure you want to Export File?",
      //       secondText: "This will send the excel file to your email",
      //       callback: () => (onClick ? onClick() : null),
      //       type: "id-verification",
      //       actionButton: "blue",
      //     })
      //   }
      className="cursor-pointer flex items-center"
    >
      <img src="/svgs/export.svg" />
    </div>
  );
};

export default ExportComponent;
