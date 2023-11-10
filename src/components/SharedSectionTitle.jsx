const SharedSectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-3 mx-auto md:w-4/12">
      <p className=" text-[#D99904] text-xl italic">{subHeading}</p>
      <h2 className=" text-4xl border-y-2 py-4">{heading}</h2>
    </div>
  );
};

export default SharedSectionTitle;
