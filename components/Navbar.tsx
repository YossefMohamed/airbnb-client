import Link from "next/link";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "./DatePicker";
import useOuterClick from "../custom-hooks/useOuterClick";
import { useRouter } from "next/router";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const router = useRouter();
  const [datePicker, setDatePicker] = useState(false);
  const { ref } = useOuterClick((e: boolean) => {
    if (search) {
      console.log(search);
      setSearch(e);
      console.log(e);
    }
  });

  return (
    <div className="border-b-2">
      <div className="py-5 flex justify-between gap-5 w-full items-center ">
        <div className="logo text-4xl text-red-500 ">
          <Link href="\" className="flex gap-3 items-end">
            <AiOutlineHome className="" />
          </Link>
        </div>
        {!search ? (
          <div
            onClick={() => setSearch(true)}
            ref={ref}
            className="search border-2 flex items-center shadow-sm rounded-3xl px-2 py-1 gap-8 text-sm cursor-pointer hover:shadow-md"
          >
            <div className="p-2">AnyWhere</div>
            <div className="p-2 border-x-2">Any week</div>
            <div className="p-2 text-slate-400 ">Add guests</div>
            <div className="cursor-pointer p-2 rounded-full  text-white bg-red-500">
              <AiOutlineSearch size={"20px"} />
            </div>
          </div>
        ) : (
          <>
            <div className="text-2xl text-slate-700 hover:underline uppercase">
              Search
            </div>
          </>
        )}
        <div className="flex gap-4">
          <div className="homebnb flex items-center gap-2 text-xl">
            <GrLanguage />
          </div>

          <div
            className="profile flex items-center gap-4 text-xl text-slate-600 rounded-full shadow-sm p-3 border cursor-pointer hover:shadow"
            onClick={() => {
              router.push("/login");
            }}
          >
            <FaBars />

            <FaUserAlt />
          </div>
        </div>
      </div>

      <div className="transition ease-in-out delay-150  ">
        {search && (
          <div
            ref={ref}
            className={` bar flex text-sm justify-center mb-8 rounded-full border w-fit m-auto items-center py-1`}
          >
            <div>
              <div className="location rounded-full hover:bg-slate-50 px-6 py-2 ">
                <label className="block" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Where are you going?"
                  className="bg-transparent border-none py-1 outline-none"
                />
              </div>
            </div>
            <div className="border-2 border-y-0">
              <div className="check-in rounded-full hover:bg-slate-50 px-6 py-2">
                <label className="block" htmlFor="date">
                  Check in
                </label>
                <input
                  className="bg-transparent border-none py-1 outline-none"
                  type="text"
                  id="type"
                  placeholder="Add dates"
                  onClick={() => setDatePicker(true)}
                />
                {datePicker && (
                  <div className="absolute z-10 bg-white border shadow rounded-xl">
                    <DatePicker setDatePicker={setDatePicker} />
                  </div>
                )}
              </div>
            </div>
            <div className="border-r-2">
              <div className="check-out rounded-full hover:bg-slate-50 px-6 py-2">
                <label className="block" htmlFor="type">
                  Type
                </label>
                <input
                  className="bg-transparent border-none py-1 outline-none"
                  type="text"
                  id="type"
                  placeholder="Add dates"
                />
              </div>
            </div>
            <div>
              <div className="guests rounded-full hover:bg-slate-50 px-6 py-2">
                <label className="block" htmlFor="range">
                  Guests
                </label>
                <input
                  className="bg-transparent border-none py-1 outline-none"
                  type="text"
                  id="range"
                  placeholder="Add guests"
                />
                <span>
                  <i className="lni lni-search-alt"></i>
                </span>
              </div>
            </div>
            <div className="search-icon p-4 transition-none hover:bg-red-400 rounded-full hover:text-white cursor-pointer text-lg">
              <AiOutlineSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
