/* eslint-disable react/prop-types */

const GradientButton = ({ text }) => {
  return (
    <p className="rounded-full bg-gradient-to-r cursor-pointer  from-blue-700 to-blue-950 w-max text-center py-[5px] px-[20px]  text-white text-[18px]  font-black italic ">
      {text}
    </p>
  );
};

export default GradientButton;
