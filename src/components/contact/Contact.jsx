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
              <div className="round" href="https://www.google.com/maps/place/Virudhunagar,+Tamil+Nadu/@9.5734414,77.9581904,13z/data=!4m13!1m7!3m6!1s0x3b012c93bcb2b013:0xd717404a42ed026e!2sVirudhunagar,+Tamil+Nadu!3b1!8m2!3d9.5680116!4d77.9624435!3m4!1s0x3b012c93bcb2b013:0xd717404a42ed026e!8m2!3d9.5680116!4d77.9624435"><MdLocationOn  className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
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
