import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedSectionTitle from "../../../components/SharedSectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentsHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SharedSectionTitle
        heading={"payment history"}
        subHeading={"---at a glance---"}
      ></SharedSectionTitle>
      <div className="pt-10">
        <h2 className="text-4xl">Total Payments: {payments.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>email</th>
              <th>Txn Id</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>$ {item.price}</td>
                <td> {item.status}</td>
                <td>
                  {new Date(item.date).toLocaleString(undefined, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true, // Use 12-hour format
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
