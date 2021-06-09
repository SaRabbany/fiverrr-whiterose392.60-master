import React from "react";

const ContactUs = () => {
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="ufrer-part">
          <div className="py-4 text-start">
            <h5 className="text-secondary small">Let’s get in touch</h5>
            <h1 className="fw-bolder text-start text-md-center ">
              Are You <span className="theme-text"> Developing a project?</span>{" "}
            </h1>
            <p className="text-secondary small">We Will Build Your Community</p>
          </div>
        </div>

        <div className="the-contact-form">
          <form action="">
            <div className="the-first-block">
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <input type="txt" className="form-control" id="floatingInput" placeholder="NAME*" />
                  <label htmlFor="floatingInput">NAME*</label>
                </div>
              </div>
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL*" />
                  <label htmlFor="email">EMAIL*</label>
                </div>
              </div>
            </div>

            <div className="the-second-block">
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <div className="the-block form-floating mb-3">
                    <input type="txt" className="form-control" id="projectTitle" placeholder="PROJECT TITLE*" />
                    <label htmlFor="projectTitle">PROJECT TITLE*</label>
                  </div>
                </div>
              </div>

              <div className="the-third-block">
                <div className="the-block form-floating mb-3">
                  <div className="the-block form-floating mb-3">
                    <textarea placeholder="ABOUT YOUR PROJECT*" className="form-control" name="" id="projectTitle" cols="30" rows="10"></textarea>
                    <label htmlFor="projectTitle">ABOUT YOUR PROJECT*</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="the-third-block">
              <button type="submit" className="theme-btn"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
