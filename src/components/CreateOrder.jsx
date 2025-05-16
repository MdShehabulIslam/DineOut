import { useState } from "react";
import AddButton from "./SVG/AddButton";
import ChickenNugget from "./SVG/ChickenNugget";
import Hamburger from "./SVG/Hamburger";
import Pizza from "./SVG/Pizza";
import RemoveButton from "./SVG/RemoveButton";
import Sandwich from "./SVG/Sandwich";

export default function CreateOrder({ onSubmit }) {
  const [inputName, setInputName] = useState("");
  const [order, setOrder] = useState([]);

  const menuItem = [
    { id: 1, name: "Hamburger", price: "BDT 300", icon: <Hamburger /> },
    {
      id: 2,
      name: "Chicken Nuggets",
      price: "BDT 250",
      icon: <ChickenNugget />,
    },
    { id: 3, name: "Submarine Sandwich", price: "BDT 200", icon: <Sandwich /> },
    { id: 4, name: "Pizza Slices", price: "BDT 100", icon: <Pizza /> },
  ];

  function handleSubmit() {
    if (!inputName || order.length === 0) return;

    const newOrder = {
      name: inputName,
      items: order.map((item) => ({
        id: item.id,
        name: item.name,
        price: parsePrice(item.price),
      })),
    };

    onSubmit(newOrder);
    setInputName("");
    setOrder([]);
  }

  function parsePrice(priceString) {
    return Number(priceString.replace(/[^\d]/g, ""));
  }

  function handleToggleButton(itemId) {
    const exists = order.find((item) => item.id === itemId);
    if (exists) {
      setOrder(order.filter((item) => item.id !== itemId)); // remove item
    } else {
      const newItem = menuItem.find((item) => item.id === itemId);
      setOrder([...order, newItem]); // add item
    }
  }

  const totalPrice = order.reduce(
    (sum, item) => sum + parsePrice(item.price),
    0
  );

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {menuItem.map((item) => {
            const existingItem = order.find((i) => i.id === item.id);
            return (
              <div
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
                key={item.id}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12   flex items-center justify-center mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.price}</p>
                  </div>
                </div>
                <button
                  className={
                    "w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  }
                  onClick={() => {
                    handleToggleButton(item.id);
                  }}
                >
                  {existingItem ? <RemoveButton /> : <AddButton />}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        disabled={!inputName || order.length === 0}
        onClick={handleSubmit}
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}
