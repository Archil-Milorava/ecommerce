import { Route, Routes } from "react-router-dom";
import {
  default as GoToTop,
  default as ScrollToTop,
} from "./components/GoToTop";
import Landing from "./pages/Landing";
import SingleItem from "./pages/SingleItem";

const App = () => {

  return (
    <>
      <ScrollToTop />
      <GoToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:itemId" element={<SingleItem />} />
      </Routes>
    </>
  );
};

export default App;
