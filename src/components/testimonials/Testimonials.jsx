import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img1"> <img src="https://master.d39qbdudhxt2ym.amplifyapp.com/static/media/site_logo.a1321c8d7efe5417bc1a.png" width={"125px"} height="125px" style={{objectFit:"contain",paddingTop:"45px"}}/> </div>
          <h1 class="name" style={{ color: "crimson" }}>
           <img src="https://cdn-icons-png.flaticon.com/512/4903/4903884.png" style={{position:"relative", top:"5px"}} width={"35px"} height={"35px"} />  Better Buys (E- Commerce App)
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gowtham212088/e-commerce_Task.git")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://master.d39qbdudhxt2ym.amplifyapp.com/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gowtham212088/E-commerce-backend.git")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN made website its name is Better Buys.
            <br></br>This application is used to sell & shop elctronics gadgets.
            <br />
            Has a Admin , Seller and Buyer Mechanism
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>


      </div>
    </>
  );
}
