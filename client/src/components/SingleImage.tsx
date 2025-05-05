import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import placeholder from "../assets/placeholder.webp";

interface SingleImageProps {
  imgUrl?: string;
}

const SingleImage = ({ imgUrl }: SingleImageProps) => {
  return (
    <div className="sm:h-[42rem] sm:w-[34rem] overflow-hidden">
      <Zoom>
        <img
          src={imgUrl || placeholder}
          alt="image"
          className="h-full w-full object-cover"
        />
        {/* asdasd */}
      </Zoom>
    </div>
  );
};

export default SingleImage;
