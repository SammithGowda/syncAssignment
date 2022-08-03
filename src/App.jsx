import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Componets/Dashbord";
import { Login } from "./Componets/Login";
import { Mapview } from "./Componets/Mapview";
import { Signup } from "./Componets/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/mapview/:type" element={<Mapview />} />
      </Routes>
    </div>
  );
}

export default App;
