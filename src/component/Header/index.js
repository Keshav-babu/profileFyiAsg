import { useEffect, useMemo } from "react";
import { getLocalKey } from "../../utility";
import Search from "../Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state?.addProductReducer.addedProducts);

  const productLenght=useMemo(()=>{
    return cartItems.length
  },[cartItems])

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-200 shadow-md z-50 p-2 px-5">
      <div className="flex items-center justify-between">
        <a className="line-clamp-1" href="/">
          TeeRex Store
        </a>

        <div className="hidden md:flex flex-1 justify-center">
          <Search />
        </div>

        <div className="flex gap-3">
          <Link to="/" >Products</Link>
          <div className="relative">
            <Link to="/cart" >Cart</Link>
            {productLenght > 0 && (
              <p className="absolute -right-4 -top-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex justify-center items-center">
                {productLenght}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-2">
        <Search />
      </div>
    </header>
  );
};

export default Header;
