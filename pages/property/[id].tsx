import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export default function Property() {
  return (
    <>
      <div className="title">
        <div className="text-3xl font-bold">
          Cave Villa with Infinity Pool in Adrasan
        </div>
        <div className="details flex gap-4 mt-4">
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
          <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
            <div className="w-full ">
              <img
                src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
              />
            </div>
            <div className="w-full col-span-2 row-span-2">
              <img
                src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
              />
            </div>
            <div className="w-full ">
              <img
                src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
              />
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
