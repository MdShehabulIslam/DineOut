import { useState } from "react";
import SearchButton from "./SVG/SearchButton";

export default function OrderReport({ orders, onSearch, onDelete, onDeliver }) {
  const [option, setOption] = useState("");

  function handleClick() {
    onSearch(option);
  }

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>
        <div className="flex gap-4 items-center">
          <SearchButton />
          <select
            className=" bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
              // onSearch(e.target.value);
            }}
            onClick={handleClick}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr className="border-t border-gray-700" key={order.id}>
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.name}</td>
                  <td className="py-3">{order.itemCount}</td>
                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={
                        order.status ? "text-green-500" : "text-red-500"
                      }
                    >
                      {order.status ? "DELIVERED" : "PENDING"}
                    </span>
                  </td>
                  <td className="py-3">
                    <button
                      className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      onClick={() => onDelete(order.id)}
                    >
                      Delete
                    </button>
                    {!order.status && (
                      <button
                        className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        onClick={() => onDeliver(order.id)}
                      >
                        DELIVER
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
