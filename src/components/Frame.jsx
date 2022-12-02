import React from "react";
import { Link } from "react-router-dom";

function Frame({ background, image, title, runtime, release, genre, language, overview, id, linkWatch }) {
  return (
    <div className={` bg-no-repeat bg-cover w-full h-full  object-cover bg-[url(https://image.tmdb.org/t/p/w500${background})] `}>
      <div className="lg:flex md:flex justify-center items-center bg-gradient-to-l dark:from-black lg:from-white md:from-white w-full h-full ">
        <div className="bg-glass lg:w-4/5 lg:h-2/3 backdrop:blur-md shadow-black shadow-lg card flex md:flex-row lg:flex-row">
          <img className="card lg:h-4/5 lg:w-2/5 md:h-4/5 md:w-2/5 place-self-center object-contain" src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
          <div className="w-full lg:p-5 md:p-5">
            <h1 className="font-bold w-full text-center text-white lg:text-3xl md:text-2xl text-lg dark:text-white">{title}</h1>
            <div className="card-body justify-between h-full">
              <div className="overflow-auto text-white">
                <p className="text-lg font-medium">
                  Runtime: <span className="font-normal"> {runtime}</span>
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
                  <button className="btn px-2 w-full text-white">Watch Now</button>
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
