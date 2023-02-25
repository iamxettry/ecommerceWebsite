import React from "react";
import { Link } from "react-router-dom";

const Btn = ({title,path}) => {
  return (
    <>
      <Link to={path} className="px-6 w-28 lg:w-auto py-2 text-xl rounded-md bg-[#0058FC] text-white font-semibold lg:px-4 lg:py-1">
        {title}
      </Link>
    </>
  );
};

export default Btn;
