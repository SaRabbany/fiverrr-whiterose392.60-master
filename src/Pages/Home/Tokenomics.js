import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import technomicImage from "../../Images/technomics-photo.png"

const Tokenomics = () => {
    const [isMblVersion, setIsMblVersion] = useState(false)


    useEffect(() =>{
        window.addEventListener("resize", () =>{
            if(window.innerHeight < 800){
              setIsMblVersion(true)
            }
        })  
    })




    return (
      <section id="tokenomics">
        <div className="title text-center-p-5 container">
          <p  className="text-secondary fw-bolder small mb-0 ">TOKENOMICS</p>
          <h1 className="fw-bolder">Token Allocation by Stages</h1>
        </div>

          <div className="container">
            <img src={technomicImage} alt="" className="img-fluid" />
          </div>

      </section>
    );
};

export default Tokenomics;