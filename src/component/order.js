import { Control, Form } from "react-redux-form";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import NavbarBuyer from "./layout/NavbarBuyer.js";
import "../Style/map.css";
import app from "./fireConfig";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import $ from "jquery";
import AutoComplete from "./AutoComplete";
import Marker from "./Marker";
import "../Style/map.css";
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

// import MyGoogleMap from './renderTheMap';
var time = new Date().toDateString();
var price;
var quan;
var total;
var cash = false;
var token = false;
toast.configure();
class Order extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "prooooops");
    this.database = app.database().ref("notification");
    this.state = {
      data: {},
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      geoCoder: null,
      places: [],
      center: [],
      zoom: 9,
      address: "",
      draggable: true,
      lat: null,
      lng: null,
      show: false,
      alerts: false,
      credit: false,
      token: "",
    };
  }
  /////////////////////////////////////////
  onMarkerInteraction = (childKey, childProps, mouse) => {
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng,
    });
  };
  //////////////////////////////////////
  onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
    this.setState({ draggable: true });
    this._generateAddress();
  };
  ///////////////////////////////////////////
  _onChange = ({ center, zoom }) => {
    this.setState({
      center: center,
      zoom: zoom,
    });
  };
  ////////////////////////////////
  _onClick = (value) => {
    this.setState({
      lat: value.lat,
      lng: value.lng,
    });
  };
  ////////////////////////////////
  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });

    this._generateAddress();
  };
  ///////////////////////////
  addPlace = (place) => {
    this.setState({
      places: [place],
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    this._generateAddress();
  };
  ///////////////////////////
  _generateAddress() {
    const { mapApi } = this.state;

    const geocoder = new mapApi.Geocoder();

    geocoder.geocode(
      { location: { lat: this.state.lat, lng: this.state.lng } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            this.zoom = 12;
            this.setState({ address: results[0].formatted_address });
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }
  ///////////////////////
  // Get Current Location Coordinates
  setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: [position.coords.latitude, position.coords.longitude],
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }
  ///////////////////////////////////////

  //

  showMap = () => {
    this.setState({
      show: true,
    });
    this.setCurrentLocation();
    console.log(this.props, "yuyuyuiyiuiu");
  };

  location = (lat, lng) => {
    console.log(this.state.lat);
  };

  ajax(order) {
    var link =
      "https://www.google.com/maps/search/" +
      this.state.lat +
      "," +
      this.state.lng +
      "?sa=X&ved=2ahUKEwiRo7PR4frtAhXVURUIHfmeDe4Q8gEwAHoECAEQAQ";
    console.log(this.props.location.info.price, "pay price");
    price = this.props.location.info.price;
    var obj = { order };
    quan = obj.order.quantity;
    obj.location = link;

    // location=link

    total = quan * price * 100;
    console.log(order, "ordeeeeer");
    var fire = obj["store_id"] + "";
    var that = this;
    obj["item_id"] = this.props.location.info.id;
    obj["store_id"] = this.props.location.info.store;
    obj["date"] = time;
    // obj['location'] =  this.props.location.info.location
    this.setState({ data: obj });
    console.log(obj, "objjjjj");
    if (!cash) {
      obj.is_payed = true;
      that.setState(
        {
          credit: true,
        },
        () => {
          $.ajax({
            url: "http://127.0.0.1:8000/buyer/order",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",
            headers: {
              Authorization: JSON.parse(localStorage.getItem("token"))["token"],
            },
            success: function () {
              console.log("success");
              //to show the alert that order is sent
              that.setState({ alerts: true });

              // window.location = `/home`;

              //Notification
              var urlRef = that.database;

              urlRef.once("value", function (snapshot) {
                var exist = false;
                snapshot.forEach(function (childSnapshot) {
                  childSnapshot.forEach(function (child) {
                    // if the store id exist in firebase  increment number of orders
                    if (
                      Number(child.key) === that.props.location.info.storeId
                    ) {
                      exist = true;
                      console.log(typeof child.val(), child.val());
                      var x = Number(child.val()) + 1;
                      console.log(x);
                      that.database
                        .child(childSnapshot.key)
                        .set({ [child.key]: x });
                    }
                  });
                });
                // if the store id does nto exist in firebase create it and set it to 1 (first order)
                if (!exist) {
                  urlRef.push({ [that.props.location.info.storeId]: 1 });
                }
                console.log(that.state.credit);
                if (!that.state.credit) {
                  window.location = `/home`;
                } else if (that.state.credit && that.state.token) {
                  window.location = `/home`;
                }
              });
            },
            error: function (err) {},
          });
        }
      );
    }
    if (cash) {
      obj.is_payed = false;
      $.ajax({
        url: "http://127.0.0.1:8000/buyer/order",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token"))["token"],
        },
        success: function () {
          console.log("success");
          //to show the alert that order is sent
          that.setState({ alerts: true });

          // window.location = `/home`;

          //Notification
          var urlRef = that.database;
          urlRef.once("value", function (snapshot) {
            var exist = false;
            snapshot.forEach(function (childSnapshot) {
              childSnapshot.forEach(function (child) {
                // if the store id exist in firebase  increment number of orders
                if (Number(child.key) === that.props.location.info.storeId) {
                  exist = true;
                  console.log(typeof child.val(), child.val());
                  var x = Number(child.val()) + 1;
                  console.log(x);
                  that.database
                    .child(childSnapshot.key)
                    .set({ [child.key]: x });
                }
              });
            });
            // if the store id does nto exist in firebase create it and set it to 1 (first order)
            if (!exist) {
              urlRef.push({ [that.props.location.info.storeId]: 1 });
            }

            if (!token) window.location = `/home`;
          });
        },
        error: function (err) {},
      });
    }
  }
  handleToken(token, addresses) {
    token = true;
    setTimeout(() => {
      window.location = "/home";
    }, 3000);
    console.log({ token, addresses }, "handle toooookeeen");

    // token.total = total;
    // const response = await axios.post(
    //   "http://127.0.0.1:8000/payments/checkout",
    //   { token, addresses }
    // );
    // this.ajax()
  }
  render() {
    const { places, mapApiLoaded, mapInstance, mapApi } = this.state;
    if ((this.state.show = true))
      var map = (
        <div className="main-wrapper">
          <Wrapper>
            {mapApiLoaded && (
              <div>
                <AutoComplete
                  map={mapInstance}
                  mapApi={mapApi}
                  addplace={this.addPlace}
                />
              </div>
            )}

            <GoogleMapReact
              center={this.state.center}
              zoom={this.state.zoom}
              draggable={this.state.draggable}
              onChange={this._onChange}
              onChildMouseDown={this.onMarkerInteraction}
              onChildMouseUp={this.onMarkerInteractionMouseUp}
              onChildMouseMove={this.onMarkerInteraction}
              onChildClick={() => console.log("child click")}
              onClick={this._onClick}
              bootstrapURLKeys={{
                key: "AIzaSyDhdSw1QzkXBrYnLSt3EF3izfHEhUj6LMc",
                libraries: ["places", "geometry"],
              }}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                this.apiHasLoaded(map, maps)
              }
            >
              <Marker
                text={this.state.address}
                lat={this.state.lat}
                lng={this.state.lng}
              />
            </GoogleMapReact>
          </Wrapper>
        </div>
      );

    var link =
      "https://www.google.com/maps/search/" +
      this.state.lat +
      "," +
      this.state.lng +
      "?sa=X&ved=2ahUKEwiRo7PR4frtAhXVURUIHfmeDe4Q8gEwAHoECAEQAQ";
    return (
      <div>
        <NavbarBuyer />
        <br />
        {this.state.alerts ? (
          <div class="alert alert-success" role="alert">
            Your Order has been successfully submitted
          </div>
        ) : null}
        <br />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            border: "solid #dcdcdc 2px",
            border: "2px solid gray",
            borderRadius: "3px",
            padding: "6px",
          }}
        >
          <div>
            <h4 style={{ textAlign: "center" }}>YOUR ORDER</h4>
            <br />
            <br />
            <h5 style={{ textAlign: "center" }}>
              {this.props.location.info.name}
            </h5>
          </div>
          <div className="d-flex">
            <br />
            <div>
              {/* <h5>{this.props.location.info.store}</h5><br/><br/> */}
              <br />
              <br />{" "}
              <img
                src={this.props.location.info.url}
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottton: "30px",
                }}
              />
            </div>
            <div className="p-2">
              {/* <h5>{this.props.location.info.name}</h5> */}
              <br />
              <br />
              <Form
                model="order"
                onSubmit={(order) => this.ajax(order)}
                className="row g-3"
                style={{
                  maxWidth: "500px",
                  border: "solid lightGray 2px",
                  border: "2px solid gray",
                  borderRadius: "3px",
                  padding: "6px",
                  marginLeft: "20px",
                }}
              >
                <label for="validationDefault01" classNameName="form-label">
                  Quantity:
                </label>
                <Control.text
                  name="order"
                  className="form-control"
                  type="number"
                  model="order.quantity"
                  min="1"
                  id="validationDefault01"
                  required
                />
                <br></br>
                <label for="validationDefault02">Phone Number:</label>
                <Control.text
                  className="form-control"
                  model="order.phoneNumber"
                  id="order.phoneNumber"
                  required
                />

                <label for="validationDefault02" className="form-label">
                  Location:
                </label>
                <Control.text
                  className="form-control"
                  model="order.location"
                  id="order.location"
                  required
                  value={link}
                />
                <button type="button" onClick={this.showMap}>
                  Your Location
                </button>
                {map}

                <br></br>
                <br></br>
                <br></br>

                <button
                  className="btn btn-success"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    margin: "40px 150px 0px 150px",
                  }}
                  onClick={() => {
                    cash = true;
                  }}
                >
                  Pay Cash
                </button>
                {/* </Form> */}
                <StripeCheckout
                  type="button"
                  stripeKey="pk_test_51I2FktCNmtNvriYQGjLYu0G8wYecRexcoEiC52AMMZwsISRlg1irJgpBFMKJ2qwvFSOB48zEuxLlnRaC6lfGbMCs006oNLTZZq"
                  token={this.handleToken.bind(Order)}
                  amount={total}
                  name={this.props.location.info.productname}
                  style={{
                    marign: "10px auto",
                    width: "200px",
                    textAlign: "center",
                    marginLeft: "30%",
                    marginBottom: "50px",
                  }}
                />
              </Form>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
  //
}
export { app, Order };
