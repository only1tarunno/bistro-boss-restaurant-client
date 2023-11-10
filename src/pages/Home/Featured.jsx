import SharedSectionTitle from "../../components/SharedSectionTitle";
import featureimg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item text-white">
      <SharedSectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Should Try---"}
      ></SharedSectionTitle>
      <div className="md:flex items-center justify-center gap-10 py-16">
        <div>
          <img src={featureimg} className="w-1/2 mx-auto" alt="" />
        </div>
        <div>
          <p className="text-lg">March 20, 2023 </p>
          <p className="uppercase text-2xl">WHERE CAN I GET SOME? tenetur.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime
          </p>
          <button className="btn btn-outline border-0 text-white border-b-2 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
