import React from 'react';

const SliderCard = ({img, title, desc}) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="row align-items-center p-3 ">
                    <div className="col-3">
                        <img src={img} className="img-fluid"  alt="" />
                    </div>
                    <div className="col-9 p-0">
                        <h1 className="mb-0 text-uppercase fw-bolder ">{title}</h1>
                    </div>
                </div>
                <div className="px-3">
                    <p className="text-secondary text-start fw-md small">{desc}</p>
                </div>
            </div>
        </>
    );
};

export default SliderCard;