import React from "react";

const BlogCard = () => {
  return (
    <div className="mx-auto px-2 py-2 max-w-xs">
      {" "}
      {/* even smaller width */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://timesofindia.indiatimes.com/india/international-space-station-to-retire-in-2030-will-fall-into-pacific-ocean-a-year-later-nasa/articleshow/89392862.cms"
        >
          <img
            src="https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            alt="uploaded cover image"
            className="object-cover w-full h-40" // shorter image
          />
        </a>
        <div className="p-3">
          {" "}
          {/* tighter padding */}
          <h2 className="truncate font-bold mb-2 text-base text-gray-800">
            ISS to retire in 2030, fall into Pacific
          </h2>
          <p className="text-gray-600 text-xs mb-3">
            The ISS, the world’s largest habitable satellite, will continue its
            mission until 2030...
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 text-[11px] font-semibold">
                Times of India
              </p>
              <p className="text-gray-500 text-[10px]">Feb 6, 2022</p>
            </div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://timesofindia.indiatimes.com/india/international-space-station-to-retire-in-2030-will-fall-into-pacific-ocean-a-year-later-nasa/articleshow/89392862.cms"
              className="bg-green-500 hover:bg-green-600 text-white text-[10px] font-semibold rounded-full px-3 py-1"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
