const Foodcard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card  rounded-none bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} className="w-full" alt={name} />
        <p className="absolute px-5 py-2 top-3 right-5 bg-black text-white">
          ${price}
        </p>
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 bg-slate-100 border-[#bb8506] text-[#bb8506] border-b-2 mt-4 capitalize">
            add to cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
