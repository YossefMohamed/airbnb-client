import Card from "../components/Card";
import CardCategory from "../components/CardCategory";

export default function Home() {
  return (
    <main>
      <div className="my-16 text-4xl font-bold uppercase  w-fit">
        Categories :
      </div>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CardCategory imgSrc="/apartment.png" title="Apartment" number={120} />
        <CardCategory imgSrc="/chalet.png" title="Chalet" number={245} />
        <CardCategory imgSrc="/roof.png" title="Roof" number={750} />
        <CardCategory imgSrc="/villaCard.png" title="Villa" number={350} />
      </div>
      <div className="my-16 text-4xl font-bold uppercase  w-fit">
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
