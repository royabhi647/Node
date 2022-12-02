import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import AddProduct from "./AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-comm Project</h1>
        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
