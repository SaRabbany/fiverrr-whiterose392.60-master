import React from "react";

const RoadMap = () => {
  return (
    <section id="roadmap">
      <div className="container p-5">
        <p className="text-secondary fw-bolder">OUR JOURNEY SO FAR</p>
        <h1>Road Map</h1>
      </div>

      <div className="road-map-full-area">
        <div className="roadmap-line">
          <div className="road-map-circle"></div>
          <div className="road-map-circle"></div>
          <div className="road-map-circle"></div>
          <div className="road-map-circle"></div>
          <div className="road-map-card card-1">
            <h1 className="text-secondary fw-bolder">2021</h1>
          </div>
          <div className="road-map-card card-2">
            <h1 h1> Q2</h1>
            <p>PolyStarter Token Generation Event $POLR Distribution Marketing Development </p>
          </div>
          <div className="road-map-card card-3">
            <p className="mb-2">PolyStarter Token Generation Event $POLR Distribution Marketing Development </p>
            <h1>Q3</h1>
          </div>
          <div className="road-map-card card-4">
            <h1>Q4</h1>
            <p>PolyStarter Token Generation Event $POLR Distribution Marketing Development </p>
          </div>
          <div className="road-map-card card-5">
            <p>PolyStarter Token Generation Event $POLR Distribution Marketing Development </p>
            <h1 className="mb-2">2022</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
