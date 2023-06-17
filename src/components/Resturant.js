import React, { useState } from "react";
import Menu from './menuApi';
import Navbar from "./Navbar";
import Card from './Card';

const uniqueList = [
  ...new Set(
    Menu.map((cat) => {
      return cat.category;
    })
  ),
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((cat) => {
      return cat.category === category;
    });

    setMenuData(updatedList);
  };

  const handleSearch = (searchTerm) => {
    const filteredItems = Menu.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMenuData(filteredItems);
  };

  return (
    <>
      <Navbar
        filterItem={filterItem}
        menuList={menuList}
        handleSearch={handleSearch}
      />
      <Card menuData={menuData} />
    </>
  );
};

export default Resturant;
