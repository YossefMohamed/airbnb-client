import React from "react";
import { AiFillStar, AiOutlineBook } from "react-icons/ai";
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
      <div className="details  flex mt-5 gap-8">
        <div className="flex-1 col-span-2 property-details">
          <div className="text-3xl font-bold flex border-b-2 py-5">
            <div className="flex flex-col gap-2">
              <div className="user">Posted By Yossef Mohamed</div>
              <div className="details text-base text-slate-600">
                2 guests - 1 bedroom - 1 bed
              </div>
            </div>
            <div className="user-pic ml-auto rounded-full overflow-hidden">
              <img src="/user.png" className="h-[75px]" />
            </div>
          </div>
          <div className="cancellation py-5 flex items-center gap-4">
            <AiOutlineBook /> Free cancellation for 48 hours.
          </div>
        </div>

        <div className="h-fit p-4 self-start col-span-1 w-[34%]">
          <PropertyCard />
        </div>
      </div>
    </>
  );
}
