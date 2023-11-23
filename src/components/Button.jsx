const Button = ({ label, iconUrl }) => {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none bg-black hover:bg-white hover:text-black rounded-full  text-white border-black font-medium transition-[0.3s]">
        {label}
        <img
          src={iconUrl}
          alt="Arrow-Right"
          className="ml-2 rounded-full bg-black w-5 h-5 border-2  border-black"
        />
      </button>
    </div>
  );
};

export default Button;
