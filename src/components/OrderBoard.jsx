import { useState } from "react";
import CreateOrder from "./CreateOrder";
import NoOrderFound from "./NoOrderFound";
import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function OrderBoard() {
  const defaultOrder = [
    {
      id: 1,
      name: "Siam Islam",
      itemCount: 4,
      amount: 2900,
      status: false,
    },
    {
      id: 2,
      name: "Sumit Saha",
      itemCount: 3,
      amount: 2300,
      status: true,
    },
    {
      id: 3,
      name: "Ishika",
      itemCount: 3,
      amount: 2300,
      status: true,
    },
    {
      id: 4,
      name: "Shohana",
      itemCount: 2,
      amount: 2300,
      status: false,
    },
    {
      id: 5,
      name: "S M Nur Islam",
      itemCount: 9,
      amount: 2300,
      status: true,
    },
    {
      id: 6,
      name: "Sadekool",
      itemCount: 1,
      amount: 200,
      status: false,
    },
  ];

  const [orders, setOrders] = useState(defaultOrder);
  const [filterOption, setFilterOption] = useState("All");

  function handleSearch(option) {
    setFilterOption(option);
  }

  function getFilteredOrders() {
    if (filterOption === "All") return orders;
    if (filterOption === "Pending")
      return orders.filter((order) => !order.status);
    if (filterOption === "Delivered")
      return orders.filter((order) => order.status);
    return orders;
  }

  const filteredOrders = getFilteredOrders();

  function handleDelete(orderId) {
    setOrders(orders.filter((order) => order.id !== orderId));
  }

  function handleDeliver(orderId) {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: true } : order
      )
    );
  }

  function handleNewOrder(order) {
    setOrders([...orders, order]);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder onSubmit={handleNewOrder} />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary orders={orders} />
        {orders.length > 0 ? (
          <OrderReport
            orders={filteredOrders}
            onSearch={handleSearch}
            onDelete={handleDelete}
            onDeliver={handleDeliver}
          />
        ) : (
          <NoOrderFound />
        )}
      </div>
    </div>
  );
}
