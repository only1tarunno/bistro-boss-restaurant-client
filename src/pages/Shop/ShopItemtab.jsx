import Foodcard from "../../components/Foodcard";

const ShopItemtab = ({ items }) => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Foodcard key={item._id} item={item}></Foodcard>
      ))}
    </div>
  );
};

export default ShopItemtab;
