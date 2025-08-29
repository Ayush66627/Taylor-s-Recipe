
import "./App.css";
import Mainpage from "./Components/Mainpage";
import { Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<Mealinfo />} />
      </Routes>
    </>
  );
}

export default App;