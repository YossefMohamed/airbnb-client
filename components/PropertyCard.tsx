import React from "react";
import { AiFillStar } from "react-icons/ai";

function PropertyCard() {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="title flex">
        <div className="price flex text-md items-center gap-1 ">
          <div className="text-2xl font-bold">$80</div>
          <div className="text-md">night</div>
        </div>
        <div className="flex gap-4 ml-auto text-3xl">
          <div className="rating flex items-center text-base">
            <div className="star text-yellow-400 text-xl">
              <AiFillStar />
            </div>
            5
          </div>
          <div className="reviews flex items-center text-base underline">
            16 reviews
          </div>
        </div>
      </div>
      <div className="inputs grid grid-cols-2 grid-rows-2 mt-8 gap-1">
        <div className="check-out  hover:bg-slate-50 p-2 py-1 border row-span-1 col-span-1 text-sm rounded-lg">
          <label className="block " htmlFor="type">
            Type
          </label>
          <input
            className="bg-transparent border-none outline-none "
            type="text"
            id="type"
            placeholder="Add dates"
          />
        </div>
        <div className="check-out  hover:bg-slate-50 p-2 py-1 border row-span-1 col-span-1 text-sm rounded-lg">
          <label className="block " htmlFor="type">
            Type
          </label>
          <input
            className="bg-transparent border-none outline-none "
            type="text"
            id="type"
            placeholder="Add dates"
          />
        </div>

        <div className="check-out  hover:bg-slate-50 p-2 py-1 border row-span-1 col-span-2 text-sm rounded-lg">
          <label className="block " htmlFor="type">
            Type
          </label>
          <input
            className="bg-transparent border-none outline-none "
            type="text"
            id="type"
            placeholder="Add dates"
          />
        </div>
      </div>
      <div className="reserve-button">
        <button className=" text-center bg-red-500 w-full text-white rounded-sm my-6 py-2 hover:shadow-lg">
          Reserve
        </button>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <div className="calc text-base text-slate-500 flex justify-between ">
          <div className="text underline">$80 x 5 nights</div>

          <div className="price font-bold">$450</div>
        </div>

        <div className="calc text-base text-slate-500 flex justify-between ">
          <div className="text underline">Service fee Show price breakdown</div>

          <div className="price font-bold">$50</div>
        </div>
      </div>
      <hr />
      <div className="flex text-lg justify-between items-center mt-4">
        <div className="text">Total before taxes</div>
        <div className="price font-bold">$450</div>
      </div>
    </div>
  );
}

export default PropertyCard;
