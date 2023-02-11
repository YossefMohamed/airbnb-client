import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

interface ICard {
  imgSrc: string;
}
const defaultImage = "/notfound.png";
const Card: React.FC<ICard> = ({ imgSrc = defaultImage }) => {
  return (
    <div className=" w-[30%] flex flex-col  rounded-t-xl gap-y-2 overflow-hidden cursor-pointer">
      <div className="flex-1 flex hover:opacity-80">
        <Image
          src={imgSrc}
          alt="image"
          layout="responsive"
          width={250}
          height={200}
          className="flex-1"
          objectFit="cover"
        />
      </div>
      <div className="px-2 py-1">
        <div className="title flex justify-between text-md font-bold">
          <div className="text">Cape Town,South Africa</div>
          <div className="rating flex items-center text-base">
            <div className="star text-yellow-400 text-xl">
              <AiFillStar />
            </div>
            5
          </div>
        </div>
        <div className="description  flex flex-col  text-sm gap-1">
          <div className="data flex flex-col justify-center text-slate-500 ">
            <div className="details">2 bedrooms , 1bathroom</div>
            <div className="date">Added 11 Weeks ago</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="price text-lg font-bold">$43 night</div>
            <div className="text-2xl hover:text-red-500 fill-red-500">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
