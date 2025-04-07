import React from "react";

function Category({ category, product, filter }) {
  console.log("category", category);
  console.log("category", product);

  return (
    <>
      <div className="conatiner">
        {category.map((el, index) =>
          <a href="#" className="btn " onClick={() => filter(product, el)}>{el}</a>
        )}
      </div>
    </>
  )
}
export default Category;