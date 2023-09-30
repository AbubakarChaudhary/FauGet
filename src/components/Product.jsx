import React from "react";
import { Link } from "react-router-dom";

const Product = (item) => {
  const { id, title, image, category, price } = item.item;

  return (
    <>
      <div key={id} className="group relative shadow border-2">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md md-p-5 bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={image}
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between p-3">
          <div>
            <h3 className="text-lg font-bold text-left text-black-700 text-bold">
              <Link to={`product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            {/*   <p className="mt-1 text-md text-left text-gray-800">
              {description.slice(0, 50)}....
            </p> */}
            <p className="text-2xl text-left font-bold text-gray-900 my-2">
              ${price}
            </p>
            <div className="flex flex-wrap justify-start">
              <p className="mt-1 text-sm text-left text-gray-500">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
