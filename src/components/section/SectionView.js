import React from "react";

const SectionView = ({ title, sidescroll, children }) => {
  return (
    <div className=" p-3 p-lg-5 bg-body-secondary mb-3 shadow">
      <h1 className="text-primary mb-5 text-uppercase">{title}</h1>

      <div className={sidescroll && "overflow-x-scroll scroll-hidden"}>
        {children}
      </div>
    </div>
  );
};

export default SectionView;
