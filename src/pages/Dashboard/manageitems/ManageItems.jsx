import { FaTrash } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import SharedSectionTitle from "../../../components/SharedSectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isPending, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteitem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`menu/${item?._id}`);
        refetch();
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: `${item.name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  if (isPending) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div>
      <SharedSectionTitle
        heading={"Manage All Items"}
        subHeading={"---Hurry Up---"}
      ></SharedSectionTitle>
      <div className="py-10">
        <h2 className="text-4xl pb-4">Total Items: {menu.length}</h2>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>
                    <Link to={`/dashboard/updateMneuItem/${item?._id}`}>
                      <button className="btn btn-sm bg-orange-400 text-white">
                        <FiEdit></FiEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteitem(item)}
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

export default ManageItems;
