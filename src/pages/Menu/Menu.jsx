import { Helmet } from "react-helmet-async";
import SubpageCover from "../../components/SubpageCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SharedSectionTitle from "../../components/SharedSectionTitle";
import Menucategory from "./Menucategory";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SubpageCover
        img={bannerImg}
        heading={"OUR MENU"}
        subheading={"Would you like to try a dish?"}
      ></SubpageCover>
      <div className="container mx-auto pt-16 pb-4">
        <SharedSectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        ></SharedSectionTitle>
        <Menucategory items={offered}></Menucategory>
      </div>
      {/*--------------- desert --------------- */}
      <Menucategory
        items={dessert}
        img={dessertimg}
        heading={"DESSERTS"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Menucategory>
      {/*--------------- Pizza --------------- */}
      <Menucategory
        items={pizza}
        img={pizzaimg}
        heading={"PIZZA"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Menucategory>
      {/*--------------- salad --------------- */}
      <Menucategory
        items={salad}
        img={saladimg}
        heading={"SALADS"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Menucategory>
      {/*--------------- soup --------------- */}
      <Menucategory
        items={soup}
        img={soupimg}
        heading={"SOUP"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Menucategory>
    </div>
  );
};

export default Menu;
