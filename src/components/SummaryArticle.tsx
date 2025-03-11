import React from "react";

const SummaryArticle = ({
  title,
  price,
  info,
  children,
}: {
  title: string;
  price: number | string;
  info?: string;
  children?: React.ReactNode;
}) => {
  return (
    <article className=" p-4 border border-gray-300 rounded-md md:w-1/4">
      <div className="flex justify-between">
        <h3>{title}</h3>
        {children}
      </div>
      <p className="font-bold text-2xl">${price}</p>
      {info && <p className="text-small text-gray-500">{info}</p>}
    </article>
  );
};

export default SummaryArticle;
