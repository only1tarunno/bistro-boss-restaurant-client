import shopCover from "../../assets/shop/banner2.jpg";
import SubpageCover from "../../components/SubpageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ShopItemtab from "./ShopItemtab";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <SubpageCover
        img={shopCover}
        heading={"OUR SHOP "}
        subheading={"Would you like to try a dish?"}
      ></SubpageCover>
      <Tabs className="pt-16">
        <TabList className="uppercase text-center">
          <Tab>SALAD</Tab>
          <Tab>pizza</Tab>
          <Tab>SOUP</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <div className="container mx-auto pt-8 pb-16">
          <TabPanel>
            <ShopItemtab items={salad}></ShopItemtab>
          </TabPanel>
          <TabPanel>
            <ShopItemtab items={pizza}></ShopItemtab>
          </TabPanel>
          <TabPanel>
            <ShopItemtab items={soup}></ShopItemtab>
          </TabPanel>
          <TabPanel>
            <ShopItemtab items={dessert}></ShopItemtab>
          </TabPanel>
          <TabPanel>
            <ShopItemtab items={drinks}></ShopItemtab>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Shop;
