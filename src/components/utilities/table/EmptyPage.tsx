const EmptyPage = (props: any) => {
  return (
    <div className="h-full w-full">
      <img className="mt-4 mb-2 mx-auto" src="/svgs/empty.svg" height={"auto"} width={"60%"} style={{ maxWidth: 500 }} />
      <p className="text-center">{props.text}</p>
      {props.button}
    </div>
  );
};

export default EmptyPage;
