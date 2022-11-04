import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import Tittle from "../components/Tittle";
import potfolios from "../components/allPortfolio";

const allCategory = ["All", ...new Set(potfolios.map((item) => item.catgory))];
console.log(allCategory);
export default function Portfolio() {
  const [categories, setCategories] = useState(allCategory);
  const [menuItems, setMenuItems] = useState(potfolios);
  const filter = (category) => {
    if (category === "All") {
      setMenuItems(potfolios);
      return;
    }
    const filterdData = potfolios.filter((item) => {
      return item.catgory === category;
    });
    setMenuItems(filterdData);
  };
  return (
    <div className="portfolioPage">
      <div className="title">
        <Tittle title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}
