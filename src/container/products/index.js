import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./action";
import ProductCard from "../../component/ProductCard";
import Header from "../../component/Header";
import Search from "../../component/Search";
import Spinner from "../../component/Spinner";

const Products = () => {
  const allProductsStatus = useSelector((state) => state?.productReducer);
  const allProducts = useSelector(
    (state) => state?.productReducer?.allProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  

  return (
    <div className="grid gap-3 p-2">
      {/* <Header /> */}

      {allProductsStatus?.isAllProductsLoading ? (
        <div className="flex justify-center my-4">
          <Spinner />
        </div>
      ) : (
        <div className="mt-20 grid gap-5 md:gap-16 md:grid-cols-3 grid-cols-1 border mx-auto p-2">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product_details={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="font-bold">Colour</h2>
      <div className="mb-4">
        <label>
          <input type="checkbox" /> Red
        </label>
        <label>
          <input type="checkbox" /> Blue
        </label>
        <label>
          <input type="checkbox" /> Green
        </label>
      </div>
      <h2 className="font-bold">Gender</h2>
      <div className="mb-4">
        <label>
          <input type="checkbox" /> Men
        </label>
        <label>
          <input type="checkbox" /> Women
        </label>
      </div>
      <h2 className="font-bold">Price</h2>
      <div className="mb-4">
        <label>
          <input type="checkbox" /> 0-Rs250
        </label>
        <label>
          <input type="checkbox" /> Rs251-450
        </label>
        <label>
          <input type="checkbox" /> Rs450
        </label>
      </div>
      <h2 className="font-bold">Type</h2>
      <div>
        <label>
          <input type="checkbox" /> Polo
        </label>
        <label>
          <input type="checkbox" /> Hoodie
        </label>
        <label>
          <input type="checkbox" /> Basic
        </label>
      </div>
    </div>
  );
};

export default Products;
