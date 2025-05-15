import Navbar from "./components/Navbar";
import OrderBoard from "./components/OrderBoard";

export default function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <OrderBoard />
      </div>
    </>
  );
}
