import React from "react";

const ModalDetail = ({ title, id, release, language, overview, image }) => {
  return (
    <div className="w-full">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal  bg-gradient-to-l from-black w-full h-full">
        <div className=" relative  bg-glass w-4/5 h-2/3 backdrop:blur-md shadow-black shadow-lg card flex flex-row  ">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="grid grid-cols-3 w-full">
            <div className="h-2/3 flex justify-center items-center m-10">
              <img className="h-full place-self-center object-contain" src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
            </div>
            <div className="col-span-2 ">
              <div className="flex flex-col justify-between h-4/5">
                <div>
                  <div className="w-full p-5">
                    <h1 className="font-bold w-full text-center text-white text-xl">{title}</h1>
                  </div>

                  <div className="overflow-auto text-white pr-5">
                    <p className="text-lg font-medium">
                      Release date: <span className="font-normal"> {release}</span>
                    </p>
                    <p className="text-lg font-medium">
                      Language:
                      <span className="font-normal"> {language}</span>
                    </p>
                    <p className="text-lg font-medium">
                      Overview:
                      <span className="font-normal"> {overview}</span>
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  5
                  <a href={`https://www.themoviedb.org/movie/${id}/watch?locale=US`}>
                    <button className="btn px-2 w-full">Watch Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
