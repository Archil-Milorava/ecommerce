import girlPhoto from "../assets/girl.webp";

const GirlPhoto = () => {
  return (
    <div className="w-full h-[35rem]">
        <img src={girlPhoto} alt="girl" className="h-full w-full object-cover" />
      </div>
  )
}

export default GirlPhoto