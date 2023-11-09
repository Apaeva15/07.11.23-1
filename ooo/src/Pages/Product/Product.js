import React, { useEffect } from "react";

function Product() {
  useEffect(() => {
    document.title = "Продукт";
  }, []);

  return (
    <div>
      <h1>Продукт</h1>
    </div>
  );
}

export default Product;
