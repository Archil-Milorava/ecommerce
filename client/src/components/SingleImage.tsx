import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import img1 from "../assets/placeholder.webp";


const SingleImage = () => {
  return (
   
      <div className="max-h-[62rem] max-w-[43rem]">
        <Zoom>
          <img src={img1} alt="asd" className="" />
        </Zoom>
      
    </div>
  );
};

export default SingleImage;
