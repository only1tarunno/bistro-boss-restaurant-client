const Menuitem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex items-center justify-between gap-10">
      <img
        className="w-[118px] h-[104px] object-cover"
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="flex-grow">
        <h3 className="uppercase text-xl">{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default Menuitem;
