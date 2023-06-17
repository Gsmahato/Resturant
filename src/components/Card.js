import React from "react";
import "./style.css";
const Card = ({ menuData }) => {
  return (
    <>
      <div className="cardcontainer">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {menuData.map((curElem) => {
            const { id, name, category, image, description, price } = curElem;
            return (
              <div className="col" key={id}>
                <div className="card h-100 w-100">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <span>{category.toUpperCase()}</span>
                    <h2 className="card-title">{name.toUpperCase()}</h2>
                    <p className="card-text">{description}</p>
                    <h5>{price}</h5>
                  </div>
                  <div className="card-footer">
                    <button className="text-body-secondary">Order Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
