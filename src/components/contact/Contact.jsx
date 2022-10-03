import "./contact.scss";
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'



export default function Contact() {
  return (
    <>
    <div id="about">
        <section id="about" class="about">
          <div className="contact" id="contact">
            <div className="section-titles">
              <h2 className="cont">Reach Out To Me</h2>
              <p className="sec-title">Contact</p>
              </div>
            </div>
            </section>
            <div className="parent">
            <div className="email">
              <div className="round"><MdLocationOn className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">Location</p>
              <p className="sub" style={{font:"small-caption"}}>Virudhunagar, Tamilnadu.</p>
              </div>
            <div className="email">
              <div className="round"><MdEmail className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">E-Mail</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "4.5rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e",font:"small-caption" }} href="mailto:vgowtham.kumar8@gmail.com"> vgowtham.kumar8@gmail.com </a></p>
              </div>
            <div className="email">
              <div className="round"><FaLinkedin className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">LinkedIn</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "2.2rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e",font:"small-caption" }} href="https://www.linkedin.com/in/gowtham-kumar-882615a5/"> Gowtham Kumar V </a></p>
              </div>

            </div>
            </div>

            </>
  );

  }
