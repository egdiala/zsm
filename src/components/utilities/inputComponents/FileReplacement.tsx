const FileReplacement = () => {
  return (
    <div className="w-full flex items-center justify-center border border-[#AAC6DD] rounded h-[150px]">
      <div className="text-center">
        <img alt="icon" src="/svgs/file.svg" className="mb-1 mx-auto" />
        <div className="mt-2 font-medium font-krub">Click to upload</div>
        <div className="mt-1 text-gray-500">(JPEG and PNG)</div>
      </div>
    </div>
  );
};

export default FileReplacement;
