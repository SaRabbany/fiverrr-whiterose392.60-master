import React from "react";
import CollapseCard from "../../Components/Collapsecard/CollapseCard";

const FAQs = () => {
  return (
    <section id="FAQs">
      <div className="title mb-0  container">
        <p className="text-secondary fw-lighter small mb-1">Securely buy and track</p>
        <h1 className="fw-bolder">
          Frequenly Asked <span className="theme-text">Question</span>{" "}
        </h1>
        <p className="text-secondary small fw-lighter mb-1">We know you have some questions in mind, we have tried to list the most important and frequent ones.</p>
      </div>

      <div className="container-fluid all-cards-wrapper">
        <div className="container">
          <CollapseCard
            buttonText={"What problem do you solve?"}
            FAQDetails={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
            }
            id="WSsjd"
          />
          <CollapseCard
            buttonText={"What problem do you solve?"}
            FAQDetails={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
            }
            id="WSsSHjd"
          />
          <CollapseCard
            buttonText={"What problem do you solve?"}
            FAQDetails={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
            }
            id="WSKDsSHjd"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
