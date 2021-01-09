import React from "react";
import { connect } from "react-redux";
import { Control, Form } from "react-redux-form";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import $ from "jquery";
import Seller from "../images/Seller.jpg";
import logo from "../images/logo.png";
import heart from "../images/heart.jpg";
import down from "../images/down.jpg";
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storage } from "./fireConfig";
var mapStateToProps = (state) => {
  return {
    email: state.reducer.email,
    password: state.reducer.password,
    storeName: state.reducer.storeName,
    category: state.reducer.category,
    description: state.reducer.description,
    location: state.reducer.location,
    delieveryTime: state.reducer.deliveryOrder,
    url: state.reducer.image,
  };
};

var action = { type: "INPUT_CANGE", text: "" };
var mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (event) => {
      action = {
        type: "INPUT_CANGE",
        text: event.target.value,
        name: event.target.name,
      };
      dispatch(action);
    },
  };
};
function SignUpSeller(props) {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  var clickButton = (signUpSeller) => {
    // console.log( props.email)
    var obj = {};
    obj.email = props.email;
    obj.password = props.password;
    obj.storeName = props.storeName;
    obj.category = props.category;
    obj.description = props.description;
    obj.location = props.location;
    obj.delieveryTime = props.delieveryTime;
    obj.url = url;
    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/seller/signup",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function (data) {
        //redirect to login page
        console.log("POST sent successfully!");
        window.location = `/login`;
        // <Route  path ='/login' exact  component ={Login}></Route>
      },
      error: function (err) {
        alert("email already exsit");
        window.location = `/seller/signup`;
      },
    });
  };

  var handleUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    console.log(image);
  };
  //console.log(event.target.files[0])
  // event.preventDefault();
  var tr1 = () => {
    var uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(image.name);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  var takingTheUrl = () => {
    if (image !== "") {
      return (
        <div>
          <img
            src={url}
            width="200px"
            height="200px"
            style={{ padding: "0px 50px 0px 0px" }}
          ></img>
          <button
            type="button"
            onClick={tr1}
            style={{
              borderRadius: "10px",
              border: "2px solid white",
              fontSize: "20px",
              padding: "14px 28px",
              fontFamily: "Yanone Kaffeesatz",
            }}
          >
            Upload
          </button>
        </div>
      );
    }
  };
  return (
    <div>
      <div
        className="creative-tim-logo"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url(${Seller})`,
          backgroundSize: "cover",
          height: "600px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          position: "relative",
        }}
      >
        <Container className="justify-content-md-center">
          <Row>
            {/* <Col xs lg="3">
  1 of 3
</Col> */}
            <div
              style={{
                float: "none",
                marginLeft: "450px",
                marginRight: "100px",
                marginBottom: "20px",
                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={logo} width="200" height="180" />
              </a>
            </div>
            <Col md="auto"></Col>
            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            />
          </Row>
          <hr
            style={{ marginLeft: "100px", border: "0.5px solid  #FCFBED" }}
          ></hr>
          <Row>
            <Col style={{ padding: "0px 550px 0px 550px" }}>
              <a
                href="/"
                style={{
                  color: "#FCFBED",
                  fontSize: "30px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}></Col>
          </Row>
          <Row style={{ padding: "40px" }}>
            <Col>
              <div
                style={{
                  float: "none",
                  marginLeft: "360px",
                  marginRight: "100px",
                  marginTop: "60px",
                }}
              >
                <a href="/">
                  <img src={heart} width="150" height="120" />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginLeft: "200px",
                marginRight: "200px",
                marginTop: "-60px",
              }}
            >
              <div
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  float: "none",
                  fontSize: "40px",
                  color: "#FCFBED",
                }}
              >
                The Secret To Getting Ahead Is Getting Started
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>
        <Row>
          <Col>
            <h2
              style={{
                fontFamily: "Yanone Kaffeesatz",
                float: "none",
                margin: "10px 600px 0px 600px",
                fontSize: "40px",
              }}
            >
              Sign Up
            </h2>
          </Col>
        </Row>
      </div>

      <Card
        style={{
          width: "550px",
          margin: "200px auto",
          height: "930px",
          padding: "10px 0px 10px 25px",
        }}
      >
        <div>
          {/* <div className="card-body"> */}
          <div className="container">
            <Form
              class="row g-3 needs-validation"
              model="login"
              type="submit"
              onSubmit={(signUpSeller) => clickButton(signUpSeller)}
              novalidate
            >
              <div class="col-md-4">
                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Email address
                </label>
                <Control.text
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  model="signUpSeller.email"
                  id="signUpSeller.email"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  password
                </label>
                <Control.text
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Enter password"
                  model="signUpSeller.password"
                  id="signUpSeller.password"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Store Name
                </label>
                <Control.text
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="storeName"
                  className="form-control"
                  type="text"
                  placeholder="Enter Store Name"
                  model="signUpSeller.storeName"
                  id="signUpSeller.storeName"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Description
                </label>
                <Control.text
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="description"
                  className="form-control"
                  type="text"
                  placeholder="Enter Description"
                  model="signUpSeller.description"
                  id="signUpSeller.description"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Location
                </label>
                <Control.text
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="location"
                  className="form-control"
                  type="text"
                  placeholder="Enter Location"
                  model="signUpSeller.location"
                  id="signUpSeller.location"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Choose Category
                </label>
                <select
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="category"
                  className="form-control"
                  type="text"
                  model="signUpSeller.category"
                  id="signUpSeller.category"
                  required
                  onChange={props.inputChanged}
                >
                  <option></option>
                  <option value="food">Food</option>
                  <option value="clothes">clothes</option>
                  <option value="babyproduct">Baby Products</option>
                  <option value="accessories">Accessories</option>
                </select>

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "23px",
                  }}
                >
                  Deliver Order WithIn
                </label>
                <select
                  style={{
                    width: "350px",

                    height: "50px",
                  }}
                  autocomplete="off"
                  name="deliveryOrder"
                  className="form-control"
                  type="text"
                  model="signUpSeller.deliveryOrder"
                  id="signUpSeller.deliveryOrder"
                  required
                  onChange={props.inputChanged}
                >
                  <option></option>
                  <option value="12 Hours">12 Hours</option>
                  <option value="24 Hours">24 Hours</option>
                  <option value="Same Day">Same Day</option>
                </select>

                <div class="custom-file">
                  <label
                    for="validationCustom01"
                    class="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "24px",
                    }}
                  >
                    Your Photo
                  </label>
                  <input
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "14px 28px",
                      fontFamily: "Yanone Kaffeesatz",
                    }}
                    name="image"
                    className="form-control"
                    type="file"
                    model="signUpSeller.image"
                    id="signUpSeller.image"
                    required
                    onChange={handleUpload}
                  />
                  <div style={{ margin: "-80px 300px" }}>{takingTheUrl()}</div>
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  style={{
                    borderRadius: "10px",
                    border: "2px solid white",
                    fontSize: "20px",
                    padding: "14px 28px",
                    fontFamily: "Yanone Kaffeesatz",
                    marginTop: "40px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Card>
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
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);
