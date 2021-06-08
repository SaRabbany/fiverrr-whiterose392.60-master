import React from 'react';

const SliderCard = ({img, title, desc}) => {
    return (
        <>
            <div>
                <div className="row align-items-center p-3 ">
                    <div className="col-md-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h1 className=" text-uppercase">{title}</h1>
                    </div>
                </div>
                <div className="px-3">
                    <p className="text-secondary">{desc}</p>
                </div>
            </div>
        </>
    );
};

export default SliderCard;