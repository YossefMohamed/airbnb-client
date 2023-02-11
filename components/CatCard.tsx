import React from "react";

function CatCard({ Icon, selected }: any) {
  return (
    <div
      className={`w-fit flex flex-col justify-center items-center gap-1 opacity-75 ${
        selected && "opacity-100"
      }
      
      cursor-pointer
      border-b-4
      border-transparent
      hover:opacity-100
      hover:border-b-4
      hover:border-inherit
      `}
    >
      <Icon size={30} />
      <span className="text-sm">Trending</span>
    </div>
  );
}

export default CatCard;
