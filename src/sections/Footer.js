import React from "react";
import { FooterStyles } from "./Footer.style";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <>
      <FooterStyles style={{position:"relative"}}>
        <section className="contact-area" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="contact-content text-center">
                  <a href="#" style={{textDecoration:"none"}}>
                    <h1>Campus Comfort</h1>
                  </a>
                  <p className="contact-quote">
                    "If you don't care your customer, Somebody else will"
                  </p>
                  <div className="hr"></div>
                  <h6>Campus Comfort, Kopargaon.</h6>
                  <h6>+91 8698 4405 84</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p onClick={()=>navigate("/admin-login")}>Copyright &copy; 2023 Campus Comfort, All Rights Reserved.</p>
        </footer>
      </FooterStyles>
    </>
  );
};

export default Footer;
