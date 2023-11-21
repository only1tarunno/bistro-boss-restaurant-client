import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaTruck, FaUsers, FaUtensils } from "react-icons/fa6";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // stats or analytics
  const { data: stats = {}, refetch } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");

      return res.data;
    },
  });

  refetch();

  // revenue chart
  const { data: chartData = [] } = useQuery({
    queryKey: ["revenueChart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");

      return res.data;
    },
  });
  console.log(chartData);

  // chart starts

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie cgart start here
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "pink"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const piechartData = chartData.map((data) => {
    return { name: data.category, value: data.quantity };
  });

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
      <div className="flex justify-between items-center">
        <div>
          {" "}
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <PieChart width={400} height={400}>
            <Pie
              data={piechartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {piechartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
