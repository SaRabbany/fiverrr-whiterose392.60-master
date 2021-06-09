import React from "react";

const CollapseCard = ({buttonText , FAQDetails,id}) => {
  return (
    <div id="collapse-Card" className="py-3">
      <p className="mb-0">
        <a className="btn btn-dark d-block text-start clicker-button text-light" data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
          {buttonText}
        </a>
      </p>
      <div className="collapse collapsed-content px-2 pt-1" id={id}>
        <div className="">
          <p className="w-100 w-md-50">{FAQDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default CollapseCard;
