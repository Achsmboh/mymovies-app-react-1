import React from "react";

function Card({ image, tombol, title, onNavigate }) {
  return (
    <div className="card bg-base-100 shadow-xl m-1" onClick={onNavigate}>
      <figure className="w-full h-full flex justify-center">
        <img className="h-full w-auto" src={`https://image.tmdb.org/t/p/w500${image}`} alt={image} />
      </figure>
      <div>
        <div className="h-14 p-1 w-full flex justify-center items-center">
          <h1 className="font-semibold text-center">{title}</h1>
        </div>
        <div className="card-actions justify-center items-center p-1">
          <button className="btn card w-full">{tombol}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
