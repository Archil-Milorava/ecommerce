import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import SingleItem from "./pages/SingleItem";

const App = () => {
  return (
    <div className=" min-h-screen h-auto w-full">
      <ScrollToTop />
      {/* <Landing /> */}
      <SingleItem />
    </div>
  );
};

export default App;
