import React, { Component } from "react";
import $ from "jquery";
import { Container, Row, Col, Card } from "react-bootstrap";
// import ItemList from "./itemList.js"
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import {useDispatch} from 'react-redux'
// import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import NavbarSeller from "./layout/NavbarSeller.js";
import down from "../images/down.jpg";

export default class CategorySeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  clicked(id) {
    console.log(id);
  }
  componentDidMount() {
    // var cat = this.props.cat
    var that = this;
    $.ajax({
      type: "GET",
      url: `http://127.0.0.1:8000/seller/${this.props.cat}`,
      //  url:`http://127.0.0.1:8000/seller/food`,
      // headers: {"Authorization": localStorage.getItem('token')},
      // headers: { 'x-my-custom-header': 'some value' },
      success: function (data) {
        console.log("data fom get request", data);
        //  var action ={type:'getdata', text:data}
        //  that.props.store.dispatch(that.disp(action))
        //  console.log("dataaaa",that.props.store.getState().categoryReducer.data)
        that.setState(
          {
            data: data,
          },
          () => {
            console.log(that.state.data, "statee");
          }
        );
      },
      error: function (err) {
        console.log("error:", err);
      },
    });
  }
  render() {
    return (
      <div>
        <NavbarSeller />
        <br />
        <br />
        <div className="row" style={{ margin: "0 auto" }}>
          {this.state.data.map((item, i) => {
            return (
              <div className="col-sm-6" key={item["pk"]}>
                <Card
                  className="card"
                  style={{
                    border: "solid  black 2px",
                    width: "25rem",
                    cursor: "pointer",
                    height: "500px",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                    marginLeft: "200px",
                  }}
                >
                  <Card.Img
                    src={item["fields"].image}
                    alt="car"
                    style={{
                      width: "100%",
                      height: "300px",
                      margin: " 0 auto",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Store Name : {item["fields"].store_name}
                    </Card.Title>
                    <Card.Text> {item["fields"].description} </Card.Text>
                    <Card.Text>Location : {item["fields"].location}</Card.Text>
                    <Link
                      to={{
                        pathname: `/seller/visit/${item["pk"]}`,
                        id: item["pk"],
                      }}
                    >
                      <button
                        onClick={() => {
                          this.clicked(item["pk"], item.name, item.url);
                        }}
                      >
                        Visit
                      </button>
                    </Link>
                  </Card.Body>
                </Card>
                <br />
                <br />
              </div>
            );
          })}
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
                <h3 style={{ color: "#FCFBED" }}>Have a Question?</h3>
                <br />
                <i
                  className="far fa-clock fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  {" "}
                  Saturday - Thursday: 09:00AM - 18:30PM
                </i>
                <br />
                <br />
                <i
                  class="fas fa-map-marker-alt fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  {" "}
                  Jordan,Amman
                </i>
                <br />
                <br />
                <i
                  class="fas fa-phone-alt fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  {" "}
                  +962796720978
                </i>
                <br />
                <br />
                <i
                  class="fas fa-envelope fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  <a
                    href="mailto:lovemadewith817@gmail.com"
                    style={{ color: "#FCFBED" }}
                  >
                    {" "}
                    Made_With_Love
                  </a>
                </i>
              </Col>
              <Col style={{ padding: "130px" }}>
                <h3 style={{ color: "#FCFBED" }}>Informations</h3>
                <br />
                <Link to="/about">
                  <i
                    class="far fa-sticky-note fa-2x"
                    style={{ fontSize: "20px", color: "#FCFBED" }}
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
                    style={{ fontSize: "20px", color: "#FCFBED" }}
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
}
