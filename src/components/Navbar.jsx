import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiSun } from "react-icons/fi";

function Navbar({ onChange, onSubmit }) {
  return (
    <div className="navbar top-0 z-10 fixed  bg-blackOne text-white ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case font-RobotoSlab text-xl" href="/">
          ACHSMOVIE
        </a>
      </div>
      <div className="w-full flex justify-center">
        <form onSubmit={onSubmit} className="form-control w-1/3">
          <input type="text" placeholder="Search" className="input input-bordered text-black" onChange={onChange} />
        </form>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end flex justify-between items-center ">
          <div className="text-4xl mr-2">
            <FiSun />
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="text-4xl rounded-full">
              <CgProfile />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow bg-blackTwo text-white menu menu-compact dropdown-content rounded-box w-52">
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
