import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Review() {
  return (
    <div className="flex flex-col">
      <div className="border rounded-md my-3 p-6">
        <div className="flex gap-3 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/22263436?v=4"
            className="object-cover w-14 h-1w-14 rounded-full 
border-2 border-red-500  shadow-red-500
"
          />

          <div className="font-bold flex  flex-1">
            <div className="rating-data">
              <div className="name">Yossef Mohamed</div>
              <div className="date text-lg text-slate-500 font-light">
                December 2022
              </div>
            </div>
            <div className="rating ml-auto flex items-center gap-1 ">
              5
              <div className="star star text-yellow-400 text-2xl">
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-6">
          Great apartment with amazing views of Cape Town! Super clean and
          modern. Had a great stay and would recommend for anyone visiting 😊
        </p>
      </div>
    </div>
  );
}
