import Card from "../components/Card";
import CardCategory from "../components/CardCategory";
import CatCard from "../components/CatCard";
import { MdOutlineBeachAccess, MdOutlineRoomService } from "react-icons/md";
import { IoFastFoodOutline, IoFlameOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi2";
import { TbBuildingCastle } from "react-icons/tb";
import Swiper from "../components/Swiper";

export default function Home() {
  return (
    <main>
     <Swiper perView={15} >
     <div className="keen-slider__slide">

     <CatCard Icon={MdOutlineBeachAccess} selected={true} />
     </div>
     <div className="keen-slider__slide">

        <CatCard Icon={IoFlameOutline} selected={false} />
</div>
        <div className="keen-slider__slide">

        <CatCard Icon={HiOutlineKey} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineRoomService} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={TbBuildingCastle} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={IoFastFoodOutline} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineRoomService} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={TbBuildingCastle} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={IoFastFoodOutline} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineRoomService} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={TbBuildingCastle} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={IoFastFoodOutline} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineBeachAccess} selected={false} />{" "}
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineRoomService} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={TbBuildingCastle} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={IoFastFoodOutline} selected={false} />
</div>
             <div className="keen-slider__slide">

        <CatCard Icon={MdOutlineBeachAccess} selected={false} />
        </div>
     </Swiper>

      

      <div className="title-primary">
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
