import useCart from "../../../hooks/useCart";
import SharedSectionTitle from "../../../components/SharedSectionTitle";
import { FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  return (
    <div>
      <SharedSectionTitle
        heading={"Wanna Add More"}
        subHeading={"---My Cart---"}
      ></SharedSectionTitle>
      <div className="pt-10">
        <div className="flex justify-between pb-8">
          <h2 className="text-4xl">Total Items: {cart.length}</h2>
          <h2 className="text-4xl">
            Total Price: {cart.reduce((sum, item) => sum + item.price, 0)}
          </h2>
          <div>
            <button className="btn btn-primary">Pay</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="rounded-full w-12 h-12">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-secondary"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
