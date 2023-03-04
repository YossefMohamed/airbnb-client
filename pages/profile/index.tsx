import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHeart } from "react-icons/ai";
import Places from "../../components/Places";

export default function AccountNav() {
  const router = useRouter();
  console.log(router.query);
  const pathname = router.query.pathname ? router.query.pathname : "profile";
  let subpage = pathname;
  if (subpage === undefined) {
    subpage = "profile";
  }
  

  const linkClasses = (type: string | null = null) => {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-main text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  };

  return (
    <>
    
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link
        href={"/profile?pathname=profile"}
        className={linkClasses("profile")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        My profile
      </Link>
      <Link
        href={"/profile?pathname=bookings"}
        className={linkClasses("bookings")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        My bookings
      </Link>
      <Link
        href={"/profile?pathname=accommodations"}
        className={linkClasses("accommodations")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        My accommodations
      </Link>
    </nav>
    


    <div>

        <div className="text-center">
          <Link className="inline-flex gap-1 bg-main text-white py-2 px-6 rounded-full" href={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new place
          </Link>
        </div>
        <div className="mt-4">
          
        </div>
    </div>


<div className="placesContainer flex  justify-center my-8 flex-col gap-2 items-center">
  

<Link href={'/account/places/'+"place._id"} className="flex cursor-pointer gap-4 bg-gray-100 h-[200px] w-1/2 p-4 rounded-2xl">
         <Places />
            </Link>
<Link href={'/account/places/'+"place._id"} className="flex cursor-pointer gap-4 bg-gray-100 h-[200px] w-1/2 p-4 rounded-2xl">
         <Places />
            </Link>
<Link href={'/account/places/'+"place._id"} className="flex cursor-pointer gap-4 bg-gray-100 h-[200px] w-1/2 p-4 rounded-2xl">
         <Places />
            </Link>
</div>
    </>
   
  );
}
