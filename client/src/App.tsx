import { Route, Routes } from "react-router-dom";
import {
  default as GoToTop,
  default as ScrollToTop,
} from "./components/GoToTop";
import Landing from "./pages/Landing";
import SingleItem from "./pages/SingleItem";
import CartPage from "./pages/CartPage";

const App = () => {

  return (
    <>
      <ScrollToTop />
      <GoToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:itemId" element={<SingleItem />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
