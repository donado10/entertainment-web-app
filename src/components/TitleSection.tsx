import React from "react";

const TitleSection: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="text-2xl font-light text-white">{title}</h1>;
};

export default TitleSection;
