import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../utils/context";
import { Link } from "react-router-dom";

function Navbar({ onChange, onSubmit }) {
  const { isLight, setIsLight } = useContext(ThemeContext);
  return (
    <div className="navbar top-0 z-30 fixed  bg-blackOne dark:bg-black text-white ">
      <div className={`flex-1`}>
        <a className="btn btn-ghost normal-case font-RobotoSlab lg:text-xl md:text-lg text-sm" href="/">
          ACHSMOVIE
        </a>
      </div>
      <div className="w-full flex justify-center">
        <form onSubmit={onSubmit} className="form-control lg:w-1/3 md:w-2/3 w-2/3 ">
          <input type="text" placeholder="Search" className="input input-bordered dark:bg-blackThree dark:text-white text-black" onChange={onChange} />
        </form>
      </div>
      <div className="flex-none gap-2 mr-5">
        <div className="dropdown dropdown-end flex justify-between items-center ">
          <div className=" mr-2" onClick={() => setIsLight(!isLight)}>
            {isLight ? (
              <div className="lg:text-4xl md:text-3xl text-2xl">
                <FiSun />
              </div>
            ) : (
              <div className="lg:text-4xl md:text-3xl text-2xl">
                <BsFillMoonStarsFill />
              </div>
            )}
          </div>
          <Link to="/favorite">
            <div className="lg:text-4xl md:text-3xl text-2xl">{isLight ? <MdOutlineFavoriteBorder /> : <MdOutlineFavorite />}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
