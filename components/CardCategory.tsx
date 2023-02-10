import Image from "next/image";
import React, { FC } from "react";
interface ICardCategory {
  imgSrc: string;
  title: string;
  number: number;
}
const CardCategory: FC<ICardCategory> = ({ imgSrc, title, number }) => {
  return (
    <div className="w-[45%]  b-8 h-[375px] relative flex overflow-hidden rounded-2xl hover:opacity-80 cursor-pointer">
      <img
        loading="lazy"
        src={imgSrc}
        className="w-[100%] h-[100%] -z-10 absolute"
      />

      <div className="mt-auto p-4 text-white font-bold ">
        <div className="title   text-5xl my-1">{title}</div>
        <div className="properties text-2xl ">{number} properties</div>
      </div>
    </div>
  );
};

export default CardCategory;
