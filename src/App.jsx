import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/LoginAdmin";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home></Home>} path="home"></Route>
        <Route element={<Login></Login>} path="/"></Route>
        <Route element={<Admin></Admin>} path="admin"></Route>
      </Routes>
    </>
  );
}

export default App;
