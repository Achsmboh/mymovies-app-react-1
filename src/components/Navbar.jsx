import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../utils/context";
import { Link } from "react-router-dom";

function Navbar({ onChange, onSubmit }) {
  const { isLight, setIsLight } = useContext(ThemeContext);
  return (
    <div className="navbar top-0 z-30 fixed  bg-blackOne dark:bg-black text-white ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case font-RobotoSlab text-xl" href="/">
          ACHSMOVIE
        </a>
      </div>
      <div className="w-full flex justify-center">
        <form onSubmit={onSubmit} className="form-control w-1/3">
          <input type="text" placeholder="Search" className="input input-bordered dark:bg-blackThree dark:text-white text-black" onChange={onChange} />
        </form>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end flex justify-between items-center ">
          <div className=" mr-2" onClick={() => setIsLight(!isLight)}>
            {isLight ? (
              <div className="text-4xl">
                <FiSun />{" "}
              </div>
            ) : (
              <div className="text-3xl">
                <BsFillMoonStarsFill />
              </div>
            )}
          </div>
          <Link to="/favorite">
            <div className="text-4xl">
              <CgProfile />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
