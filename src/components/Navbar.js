import React, { useState } from "react";

const Navbar = ({ filterItem, menuList, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GS RESTAURANT
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          {menuList.map((category, index) => (
            <li className="nav-item" key={index}>
              <button
                className="nav-link active"
                onClick={() => filterItem(category)}
              >
                {category.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
