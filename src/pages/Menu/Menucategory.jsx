import { Link } from "react-router-dom";
import Menuitem from "../../components/Menuitem";
import SubpageCover from "../../components/SubpageCover";

const Menucategory = ({ items, img, heading, subheading }) => {
  return (
    <div className="pb-12">
      {heading && (
        <SubpageCover
          img={img}
          heading={heading}
          subheading={subheading}
        ></SubpageCover>
      )}
      <div className="container mx-auto pt-12">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {items.map((item) => (
            <Menuitem key={item._id} item={item}></Menuitem>
          ))}
        </div>
        <div className="text-center mb-4">
          {heading ? (
            <Link to={`/shop/${heading}`}>
              <button className="btn btn-outline border-0  border-b-2 mt-4">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          ) : (
            <Link to={`/shop/salads`}>
              <button className="btn btn-outline border-0  border-b-2 mt-4">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menucategory;
