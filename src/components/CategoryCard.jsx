/* eslint-disable react/prop-types */

const CategoryCard = ({ title }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gradient-to-r hover:scale-[1.03] transition-all ease-in-out duration-700 from-blue-700 to-blue-950 w-80 h-60 text-white text-[40px]  font-black italic">
      {title}
    </div>
  );
};

export default CategoryCard;
