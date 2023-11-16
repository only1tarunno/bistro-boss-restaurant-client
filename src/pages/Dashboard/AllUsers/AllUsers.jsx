import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleupdate = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: `${user?.name} is admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/users/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All User</h2>
        <h2 className="text-3xl">Total User: {users.length}</h2>
      </div>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleupdate(user)}
                      className="btn btn-sm bg-orange-400 text-white text-xl"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
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
  );
};

export default AllUsers;
