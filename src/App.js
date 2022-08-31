import { Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";
import LoginComp from "./components/LoginRegister/LoginComp";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route path="/users" element={<DataTable />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
