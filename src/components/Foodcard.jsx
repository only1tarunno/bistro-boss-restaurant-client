import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Foodcard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = (food) => {
    const { _id, ...item } = food;

    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        ...item,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${food.name} is added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Login",
        text: "Please Login to purchase this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 bg-slate-100 border-[#bb8506] text-[#bb8506] border-b-2 mt-4 capitalize"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
