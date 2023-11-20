import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaTruck, FaUsers, FaUtensils } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");

      return res.data;
    },
  });

  console.log(stats);
  return (
    <div>
      <h2 className="text-3xl capitalize">
        Hi, Welcome {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="flex justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary order-1">
              <FaDollarSign className="text-3xl"></FaDollarSign>
            </div>
            <div className="stat-title capitalize">revenue</div>
            <div className="stat-value">{stats.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl"></FaUsers>
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{stats.users}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUtensils className="text-3xl"></FaUtensils>
            </div>
            <div className="stat-title">Products</div>
            <div className="stat-value">{stats.menuItems}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaTruck className="text-3xl"></FaTruck>
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats.orders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
