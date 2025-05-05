import { Route, Routes } from "react-router-dom";

import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Landing from "./pages/Landing";
import SingleItem from "./pages/SingleItem";
import GoToTop from "./components/GoToTop";
import AutoScrollToTop from "./components/AutoScrollToTop";

const App = () => {
  return (
    <>
      <AutoScrollToTop />
      <GoToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:itemId" element={<SingleItem />} />
      </Routes>
    </>
  );
};

export default App;
