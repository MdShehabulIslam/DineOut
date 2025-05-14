import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderReport from "./components/OrderReport";
import OrderSummary from "./components/OrderSummary";

export default function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary />
            <OrderReport />
          </div>
        </div>
      </div>
    </>
  );
}
