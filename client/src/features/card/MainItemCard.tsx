import placeholder from "../../assets/placeholder.webp";

interface MainItemCardProps {
  imageUrl: string | undefined;
  title: string;
  price: number;
}

const MainItemCard: React.FC<MainItemCardProps> = ({
  imageUrl,
  title,
  price,
}) => {
  return (
    <div className="embla__slide2 w-[27rem] h-[38rem]  flex flex-col font-Garamond cursor-pointer ">
      {/* Image Section */}
      <div className=" relative group w-full h-11/12 overflow-hidden">
        <img
          src={imageUrl || placeholder}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="bg-[#f0efe6]/80 absolute bottom-0 w-full flex items-center justify-center font-Raleway h-11 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <button className="text-sm uppercase font-Roboto tracking-wider text-gray-700/90 cursor-pointer">
            Quick add
          </button>
        </div>
      </div>
      {/* Details Section */}
      <div className="w-full h-1/12 ">
        <p className="w-full h-1/2 flex items-center justify-center text-black text-lg overflow-hidden">
          {title}
        </p>
        <p className=" w-full h-1/2 flex items-center justify-center text-xs tracking-wider text-gray-600 font-Roboto overflow-hidden">
          €{price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MainItemCard;
