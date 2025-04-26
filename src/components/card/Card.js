import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "../button/Button";

export default function Card({ alt, cardImage, heading, description, href, FavoriteHandler }) {
  return (
    <div className="rounded-2xl mx-auto md:mx-3 bg-gray-800 max-w-96 md:max-w-none">
      <div>
        <img
          alt={alt}
          className="rounded-t-2xl w-full min-h-[200px] max-h-[200px]"
          src={cardImage}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-between min-h-[300px]">
        <div>
          <h2 className="px-2 pt-2 text-white py-1">{heading}</h2>
        </div>
        <div>
          <p className="px-2 text-gray-400 text-sm">{description}</p>
        </div>
        <div className="pb-2 flex justify-between items-center mx-4">
          <Button href={href} />
          <button onClick={FavoriteHandler}>
            <MdOutlineFavoriteBorder className="cursor-pointer" color="white" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}