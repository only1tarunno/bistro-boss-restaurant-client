import { useEffect, useState } from "react";
import SharedSectionTitle from "../../components/SharedSectionTitle";
import Menuitem from "../../components/Menuitem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <SharedSectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SharedSectionTitle>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {menu.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <div className="text-center mb-4 pb-12">
        <button className="btn btn-outline border-0  border-b-2 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
