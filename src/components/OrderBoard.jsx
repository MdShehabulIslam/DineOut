import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function OrderBoard() {
  const [nextId, setNextId] = useState(2);

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
  ];

  const [orders, setOrders] = useState(defaultOrder);
  const [filteredOrders, setFilteredOrders] = useState(defaultOrder);

  //   setNextId((prevId) => prevId + 1);

  function handleSearch(option) {
    if (option === "All") {
      setFilteredOrders(orders);
    } else if (option === "Pending") {
      setFilteredOrders(orders.filter((order) => order.status === false));
    } else if (option === "Delivered") {
      setFilteredOrders(orders.filter((order) => order.status === true));
    }
  }

  function handleDelete(orderId) {
    const ordersAfterDelete = orders.filter((order) => order.id !== orderId);
    setOrders(ordersAfterDelete);
    setFilteredOrders(ordersAfterDelete);
  }

  function handleDeliver(orderId) {
    const ordersAfterDeliver = orders.map((order) => {
      if (order.id === orderId) {
        return {
          ...order,
          status: !order.status,
        };
      }
      return order;
    });

    setOrders(ordersAfterDeliver);
    setFilteredOrders(ordersAfterDeliver);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary />
        <OrderReport
          orders={filteredOrders}
          onSearch={handleSearch}
          onDelete={handleDelete}
          onDeliver={handleDeliver}
        />
      </div>
    </div>
  );
}
