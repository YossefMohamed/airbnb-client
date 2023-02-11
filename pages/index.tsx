import Card from "../components/Card";
import CardCategory from "../components/CardCategory";
import CatCard from "../components/CatCard";
import { MdOutlineBeachAccess, MdOutlineRoomService } from "react-icons/md";
import { IoFastFoodOutline, IoFlameOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi2";
import { TbBuildingCastle } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <div className="flex gap-10 overflow-hidden">
        <CatCard Icon={MdOutlineBeachAccess} selected={true} />
        <CatCard Icon={IoFlameOutline} selected={false} />
        <CatCard Icon={HiOutlineKey} selected={false} />
        <CatCard Icon={MdOutlineRoomService} selected={false} />
        <CatCard Icon={TbBuildingCastle} selected={false} />
        <CatCard Icon={IoFastFoodOutline} selected={false} />
        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
        <CatCard Icon={MdOutlineRoomService} selected={false} />
        <CatCard Icon={TbBuildingCastle} selected={false} />
        <CatCard Icon={IoFastFoodOutline} selected={false} />
        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
        <CatCard Icon={MdOutlineRoomService} selected={false} />
        <CatCard Icon={TbBuildingCastle} selected={false} />
        <CatCard Icon={IoFastFoodOutline} selected={false} />
        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
        <CatCard Icon={MdOutlineRoomService} selected={false} />
        <CatCard Icon={TbBuildingCastle} selected={false} />
        <CatCard Icon={IoFastFoodOutline} selected={false} />
        <CatCard Icon={MdOutlineBeachAccess} selected={false} />
      </div>

      <div className="my-12 text-2xl font-bold uppercase  w-fit">
        Categories :
      </div>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CardCategory imgSrc="/apartment.png" title="Apartment" number={120} />
        <CardCategory imgSrc="/chalet.png" title="Chalet" number={245} />
        <CardCategory imgSrc="/roof.png" title="Roof" number={750} />
        <CardCategory imgSrc="/villaCard.png" title="Villa" number={350} />
      </div>
      <div className="my-12 text-2xl font-bold uppercase  w-fit">
        Top Properties :
      </div>
      <div className="flex justify-between flex-wrap gap-y-10">
        <Card imgSrc="/apartment.png" />
        <Card imgSrc="/chalet.png" />
        <Card imgSrc="/roof.png" />
        <Card imgSrc="/villaCard.png" />
        <Card imgSrc="/apartment.png" />
        <Card imgSrc="/apartment.png" />
        <Card imgSrc="/chalet.png" />
        <Card imgSrc="/roof.png" />
        <Card imgSrc="/villaCard.png" />
      </div>
    </main>
  );
}
