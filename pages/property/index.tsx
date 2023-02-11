import React from "react";
import Card from "../../components/Card";

const index = () => {
  return (
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
  );
};

export default index;
