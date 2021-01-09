import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarSeller from "./layout/NavbarSeller";
import NavbarBuyer from "./layout/NavbarBuyer";
import down from "../images/down.jpg";
var action = { type: "food_category" };
var actionclothes = { type: "clothes_category" };
var actionbaby = { type: "babyshower_category" };
var actionacc = { type: "accesories_category" };

const getcategoryfood = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/food");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/food`);
  return action;
};

const getcategoryclothes = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/clothes");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/clothes`);
  return actionclothes;
};
const getcategorybaby = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/babyproducts");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/babyproducts`);
  return actionbaby;
};
const getcategoryacc = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/accessories");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/accessories`);
  return actionacc;
};
// var mapDispatchToProps = (dispatch) =>{
//     return {

//     //     onclickCat : (cat) => {
//     //         action = {type : 'change_category', text:cat}
//     //         dispatch(action);

//     //      }
//     // }
//     const
// }

export default function Home(props) {
  const dispatch = useDispatch();
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj["type"]);
  if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
  if (tokenObj.type === "seller") var nav = <NavbarSeller />;
  return (
    <div>
      {nav}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "-200px",
                  transition: "width 2s",
                }}
              >
                <Link to="/buyer/food">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryfood());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Third slide"
                        width="400px"
                        height="300px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1448131063153-f1e240f98a72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1448&q=80"
                        alt="Third slide"
                        width="400px"
                        height="300px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "600px",
                  height: "700px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",

                  marginLeft: "-150px",
                }}
              >
                <Link to="/buyer/food">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryfood());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Third slide"
                        width="600px"
                        height="700px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "100px",
                }}
              >
                <Link to="/buyer/clothes">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryclothes());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1534337711732-1c9ae62389e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        width="400px"
                        height="300px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1603321582010-d342bd5a2e07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="col-sm-6" className="container-fluid">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  marginLeft: "-200px",
                  cursor: "pointer",
                  marginTop: "-300px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                }}
              >
                <Link to="/buyer/accessories">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryacc());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1521120098171-0400b4ec1319?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="400px"
                        height="300px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3> Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1551026965-10a65509886d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
          <Col>
            <div className="col-sm-6">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-300px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "300px",
                  paddingBottom: "100px",
                }}
              >
                <Link to="/buyer/babyproducts">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategorybaby());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1565058528605-670489ab6f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhYnklMjAlMjB3b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560506840-ec148e82a604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhYnklMjBjbG90aGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby productsl</h3>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://i1.wp.com/dadfixeseverything.com/wp-content/uploads/2019/01/wash_baby_clothes.jpg?resize=600%2C400&ssl=1"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <hr
            style={{
              color: "black",
              marginLeft: "-5px",
              width: "90%",
              borderWidth: "2px",
              height: "5px",
            }}
          />
        </Col>
        <Col>
          <h2 style={{ marginLeft: "100px" }}>Most Popular</h2>
        </Col>

        <Col>
          {" "}
          <hr
            style={{
              color: "black",
              marginRight: "-5px",
              width: "90%",
              borderWidth: "2px",
              height: "5px",
            }}
          />
        </Col>
      </Row>
      <div>
        <Container style={{ marginTop: "100px", marginRight: "250px" }}>
          <Row>
            <Col style={{ padding: "0px 200px 0px 0px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 150px 0px 50px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 100px 0px 100px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
}
