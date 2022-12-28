import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import PropertyCard from "../../components/PropertyCard";

export default function Property() {
  return (
    <>
      <div className="title">
        <div className="text-3xl font-bold">
          Cave Villa with Infinity Pool in Adrasan
        </div>
        <div className="details flex gap-4 mt-2 mb-8">
          <div className="rating flex items-center text-base">
            <div className="star text-yellow-400 text-xl">
              <AiFillStar />
            </div>
            5
          </div>
          <div className="reviews flex items-center text-base underline">
            16 reviews
          </div>

          <div className="reviews flex items-center text-base gap-2">
            <FaUserAlt /> Yossef
          </div>
          <div className="reviews flex items-center text-base underline">
            Kumluca, Antalya, Turkey
          </div>
        </div>
      </div>
      <div className="image-grid">
        <div className=" items-center ">
          <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-2  h-[550px] ">
            <div className="w-full row-span-2 col-span-1">
              <img
                src="/chalet.png"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="h-full w-full  rounded-3xl "
              />
            </div>

            <div className="w-full row-span-1 col-span-1">
              <img
                src="/apartment.png"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="h-full w-full  rounded-3xl object-cover"
              />
            </div>
            <div className="w-full row-span-1 col-span-1">
              <img
                src="/roof.png"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="h-full w-full  rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="details  flex">
        <div className="flex-1 col-span-2">s</div>
        <div className="h-fit p-4 self-start col-span-1 w-[34%]">
          <PropertyCard />
        </div>
      </div>
    </>
  );
}
