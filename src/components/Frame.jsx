import React from "react";
import { Link } from "react-router-dom";

function Frame({ background, image, title, runtime, release, genre, language, overview, id, linkWatch }) {
  return (
    <div className={` bg-no-repeat bg-cover  text-white text-3xl  w-full h-full  object-cover bg-[url(https://image.tmdb.org/t/p/w500${background})] `}>
      <div className="flex justify-center items-center bg-gradient-to-l from-white w-full h-full ">
        <div className="bg-glass w-4/5 h-2/3 backdrop:blur-md shadow-black shadow-lg card flex flex-row">
          <img className="h-4/5 w-2/5 place-self-center object-contain" src={`https://image.tmdb.org/t/p/w500${image}`} alt="" />
          <div className="w-full p-5">
            <h1 className="font-bold w-full text-center text-blackOne">{title}</h1>
            <div className="card-body justify-between h-full">
              <div className="overflow-auto">
                <p className="text-lg font-medium">
                  Runtime: <span className="font-normal"> {runtime}</span>{" "}
                </p>
                <p className="text-lg font-medium">
                  Release date: <span className="font-normal"> {release}</span>
                </p>
                <p className="text-lg font-medium">
                  Genre: <span className="font-normal"> {genre}</span>
                </p>
                <p className="text-lg font-medium">
                  Language:
                  <span className="font-normal"> {language}</span>
                </p>
                <p className="text-lg font-medium">
                  Overviw:
                  <span className="font-normal"> {overview}</span>
                </p>
              </div>
              <div>
                <a href={`https://www.themoviedb.org/movie/${id}/watch?locale=US`}>
                  <button className="btn px-2 w-full">Watch Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame;
