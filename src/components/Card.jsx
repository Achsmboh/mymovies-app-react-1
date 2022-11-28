import React from "react";

function Card({ image, tombol }) {
  return (
    <div className="card bg-base-100 shadow-xl m-1">
      <figure>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={image} />
      </figure>
      <div>
        <div className="card-actions justify-end">
          <button className="btn w-full rounded-t-none">{tombol}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
