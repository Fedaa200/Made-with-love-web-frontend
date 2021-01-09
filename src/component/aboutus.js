import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import about10 from "../images/about10.jpg";
import down from "../images/down.jpg";
// import heart from "../images/heart.jpg";
import logo1 from "../images/logo1.png";
import story20 from "../images/story20.jpg";
const About = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundImage: `url(${about10})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="justify-content-md-center">
            {/* <Col xs lg="3">
      1 of 3
    </Col> */}
            <div
              style={{
                float: "none",
                marginLeft: "900px",
                marginRight: "500px",

                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={logo1} width="180" height="150" />
              </a>
            </div>
            {/* <Col md="auto">
              <hr style={{ color: "white", height: "50px" }} />
            </Col> */}
            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgb(0, 0, 0, 0)",
              }}
            />
          </Row>
          <hr style={{ marginLeft: "400px", border: "0.5px solid white" }}></hr>
          <Row style={{ marginLeft: "50px" }}>
            <Col style={{ padding: "0px 20px 0px 500px" }}>
              <a
                href="/"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}>
              <a
                href="/about"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                About Us
              </a>
            </Col>
            <Col>
              <a
                href="/login"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Login
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br> <br></br>
      <div>
        <Row style={{ marginTop: "150px", marginLeft: "7px" }}>
          <Col className="col-6">
            <img
              src={story20}
              style={{
                border: "solid  white 3px",
                borderRadius: "10px",
              }}
              width="500px"
              height="400px"
            ></img>
          </Col>
          <Col className="col-6" style={{ marginTop: "-10px" }}>
            <h1>Our Story</h1>
            <br />
            <p style={{ fontSize: "23px", fontFamily: "Yanone Kaffeesatz" }}>
              We support homemade businesses by providing them with a space
              (online store ) to showcase and <br />
              sell their unique products , introducing them to a larger market
              and offering them the chance to grow <br />
              and develop their businesses in a competitive and inspiring
              environment . Our application will also ,<br /> provide the
              consumers of homemade products with a easy to access and
              all-including market where
              <br /> they can find all the homemade product they may need in one
              place , one app , with an
              <br /> easy to order system .
            </p>
          </Col>
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "150px",
          height: "600px",
          backgroundImage: `url(${down})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#fcfbed" }}>Have a Question?</h3>
              <br />

              <i
                className="far fa-clock fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                Saturday - Thursday: 09:00AM - 18:30PM
              </i>
              <br />
              <br />
              <i
                class="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                Jordan,Amman
              </i>
              <br />
              <br />
              <i
                class="fas fa-phone-alt fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                +962796720978
              </i>
              <br />
              <br />
              <i
                class="fas fa-envelope fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                <a
                  href="mailto:lovemadewith817@gmail.com"
                  style={{ color: "#fcfbed" }}
                >
                  {" "}
                  Made_With_Love
                </a>
              </i>
            </Col>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#fcfbed" }}>Informations</h3>
              <br />
              <Link to="/about">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  About Us
                </i>
              </Link>
              <br />
              <br />
              <Link to="/contactUs">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  Contact Us
                </i>
              </Link>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default About;
