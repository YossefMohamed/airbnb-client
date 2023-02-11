import React from "react";
import {
  AiFillPicture,
  AiFillStar,
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import PropertyCard from "../../components/PropertyCard";
import Review from "../../components/Review";

export default function Property() {
  const [reviews, setReviews] = React.useState(false);
  return (
    <>
      <div className="title">
        <div className="text-2xl font-bold">
          Cave Villa with Infinity Pool in Adrasan
        </div>
        <div className="details flex gap-4 mt-4 mb-8 items-center">
          <div className="rating flex items-center text-sm gap-2 ">
            <div className="star text-yellow-400 text-xl">
              <AiFillStar />
            </div>
            <div className="number-rating">5</div>
          </div>
          <div className="reviews flex items-center text-sm underline">
            16 reviews
          </div>

          <div className="user flex items-center text-sm gap-2">
            <AiOutlineUser /> Yossef
          </div>
          <div className="location flex items-center text-sm underline gap-2">
            <CiLocationOn />
            Kumluca, Antalya, Turkey
          </div>

          <div className="favourite flex items-center text-sm underline gap-2 ml-auto">
            <AiOutlineHeart />
            <span>save</span>
          </div>
        </div>
      </div>
      <div className="image-grid relative">
        <button className="absolute bottom-10 right-10 flex items-center gap-2 btn-secondary ">
          <AiFillPicture /> Show more photos
        </button>
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
              <div className="details text-base text-slate-600 font-light">
                2 guests - 1 bedroom - 1 bed
              </div>
            </div>
            <div className="user-pic ml-auto rounded-full overflow-hidden">
              <img src="/user.png" className="h-[75px]" />
            </div>
          </div>
          <div className="cancellation  flex items-center gap-4 border-b-2 py-8">
            <AiOutlineBook /> Free cancellation for 48 hours.
          </div>

          <div className="description  flex   flex-col gap-8 border-b-2 py-8">
            <div className="flex   flex-col gap-4">
              <div className=" uppercase font-bold">description :</div>
              Sit back in a private plunge pool and enjoy an uninterrupted vista
              of Table Mountain, the city skyline, and the ocean beyond. The
              views are just as good from inside this chic and modern penthouse,
              where sunlight pours in through walls of windows.
            </div>
            <div className="flex   flex-col gap-4">
              <div className=" uppercase font-bold">Extra :</div>
              Sit back in a private plunge pool and enjoy an uninterrupted vista
              of Table Mountain, the city skyline, and the ocean beyond. The
              views are just as good from inside this chic and modern penthouse,
              where sunlight pours in through walls of windows.
            </div>
          </div>

          <div className="location  flex items-center gap-4 border-b-2 py-8">
            <CiLocationOn />{" "}
            <div className="reviews flex items-center  underline ">
              Kumluca, Antalya, Turkey
            </div>
          </div>

          <div className="reviews py-4">
            <div className="my-4 text-xl  flex items-center gap-2 font-bold">
              <AiFillStar /> 4.85 (384 reviews)
            </div>
            <div className="reviews">
              <Review />
              {reviews ? (
                <>
                  <Review />
                  <Review />
                </>
              ) : (
                <button
                  className="border border-black rounded-xl px-8 py-3 mt-4"
                  onClick={() => setReviews(true)}
                >
                  show all 4 reviews
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="h-fit p-4 self-start col-span-1 w-[34%] sticky top-10">
          <PropertyCard />
        </div>
      </div>
    </>
  );
}
