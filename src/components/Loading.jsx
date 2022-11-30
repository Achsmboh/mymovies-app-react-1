import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="m-2 flex flex-col justify-between p-3 w-full">
        <div className="flex animate-pulse space-x-4">
          <div className=" flex-1 py-1 space-y-5">
            <div className="bg-slate-600 h-52 rounded"></div>
            <div className="space-y-2">
              <div className="h-6 bg-slate-600 rounded" />
              <div className="h-6 rounded bg-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
