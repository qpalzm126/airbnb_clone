import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative  h-[200px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg over">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-fuchsia-600 bg-white px-10 py-4 shadow-md 
        rounded-full font-bold my-3 hover:shadow-xl active:scale-90 
        transition duration-150 max-sm:text-sm max-sm:px-5 max-sm:py-4"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Banner;
