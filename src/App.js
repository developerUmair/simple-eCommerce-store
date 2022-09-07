import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import DataTable from "./components/DataTable";
import Invoice from "./components/invoice/Invoice";
import LoginComp from "./components/LoginRegister/LoginComp";
import MyAccount from "./components/my-account/MyAccount";
import NotFound from "./components/not found/NotFound";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import OrderData from "./components/userTotalOrders/OrderData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route path="/users" element={<DataTable />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-page/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/orders" element={<OrderData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <OrderData /> */}
    </div>
  );
}

export default App;
