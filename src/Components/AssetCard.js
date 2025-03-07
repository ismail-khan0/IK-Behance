import React from "react";

const AssetCard = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default AssetCard;
