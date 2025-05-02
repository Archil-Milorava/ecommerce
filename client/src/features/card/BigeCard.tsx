interface BigeCardProps {
  img: string;
  title: string;
  description: string;
}

const BigeCard: React.FC<BigeCardProps> = ({ img, title, description }) => {
  return (
    <div className="relative w-[43rem] h-[31rem] bg-red-300">
      <img
        src={img}
        alt={title}
        className="absolute object-cover h-full max-w-full"
      />
      <div className="absolute bottom-11 left-8 w-auto h-auto flex flex-col items-start gap-6 font-Garamond text-white">
        <h1 className="text-5xl uppercase">{title}</h1>
        <p className="text-sm">{description}</p>
        <button className="border border-white w-22 h-8  hover:opacity-80 cursor-pointer transition-all duration-300">
          discover
        </button>
      </div>
    </div>
  );
};

export default BigeCard;
