// eslint-disable-next-line react/prop-types
const Button = ({ className, title, icon, position }) => {
  return (
    <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec684a_0%,#BEC1DD_50%,#ec684a_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-black px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default Button;
