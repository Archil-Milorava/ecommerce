import placeholder from "../../assets/placeholder.webp";

interface MainItemCardProps {
  imageUrl: string | undefined;
  title: string;
  price: number;
  currency: string;
}

const MainItemCard: React.FC<MainItemCardProps> = ({
  imageUrl,
  title,
  price,
  currency,
}) => {
  return (
    <div className=" w-[25rem] h-[38rem] flex flex-col font-Garamond cursor-pointer">
      {/* Image Section */}
      <div className="h-10/12 w-full relative group">
        <img
          src={imageUrl || placeholder}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="bg-[#f0efe6]/80 absolute bottom-0 w-full flex items-center justify-center font-Raleway h-11 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <button className="text-sm uppercase font-Roboto tracking-wider text-gray-700/90 cursor-pointer">
            Quick add
          </button>
        </div>
      </div>
      {/* Details Section */}
      <div className=" h-1/12 flex flex-col items-center justify-center ">
        <p className="text-lg text-black  ">{title}</p>
        <p className="text-sm  text-gray-800/60 font-Roboto">
          {currency}
          {"  "}
          {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MainItemCard;
