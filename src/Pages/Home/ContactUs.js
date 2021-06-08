import React from "react";

const ContactUs = () => {
  return (
    <section id="contact">
      <div class="contact-section">
        <div class="ufrer-part">
          <div class="small-line">
            <b>LETS GET IN TOUCH</b>
          </div>
          <div class="the-ufrer-title">
            <h2>
              Are you <span>Developing a Project</span>
            </h2>
          </div>

          <div class="the-big-line">
            <b>We will build your community</b>
          </div>
        </div>

        <div class="the-contact-form">
            <form action="">
                <div class="the-first-block">
                    <div class="input-holder">
                        <div class="the-block form-floating mb-3">
                            <input type="txt" class="form-control" id="floatingInput" placeholder="NAME*"/>
                            <label for="floatingInput">NAME*</label>
                        </div>
                    </div>
                    <div class="input-holder">
                        <div class="the-block form-floating mb-3">
                            <input type="email" class="form-control" id="email" placeholder="EMAIL*"/>
                            <label for="email">EMAIL*</label>
                        </div>
                    </div>
                </div>


                <div class="the-second-block">
                    <div class="input-holder">
                        <div class="the-block form-floating mb-3">
                            <div class="the-block form-floating mb-3">
                                <input type="txt" class="form-control" id="projectTitle" placeholder="PROJECT TITLE*"/>
                                <label for="projectTitle">PROJECT TITLE*</label>
                            </div>
                        </div>
                    </div>


                    <div class="the-third-block">
                        <div class="the-block form-floating mb-3">
                            <div class="the-block form-floating mb-3">

                                <textarea placeholder="ABOUT YOUR PROJECT*" class="form-control" name=""
                                    id="projectTitle" cols="30" rows="10"></textarea>
                                <label for="projectTitle">ABOUT YOUR PROJECT*</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    

            <div class="the-third-block">
                <input type="submit" value="SUBMIT"/>
            </div>
            
            </form>
        </div>





      </div>
    </section>
  );
};

export default ContactUs;
