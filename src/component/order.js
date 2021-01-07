import { Control, Form } from "react-redux-form";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import NavbarBuyer from "./layout/NavbarBuyer.js";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import $ from "jquery";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// import "animate.css";
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
toast.configure();
class Order extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "prooooops");
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

  click() {
    window.location = `/home`;
  }

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
    // console.log(location, "locaaaaation");
    total = quan * price * 100;
    console.log(order, "ordeeeeer");

    obj["item_id"] = this.props.location.info.id;
    obj["store_id"] = this.props.location.info.store;
    obj["date"] = time;
    // obj['location'] =  this.props.location.info.location
    this.setState({ data: obj });
    // obj["item_id"]=this.props.location.info.id
    // obj["store_id"]=this.props.location.info.store
    // obj['date']=time
    console.log(obj, "objjjjj");
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
        // window.location = `/home`;
      },
      error: function (err) {},
    });
  }
  async handleToken(token, addresses) {
    //  var that = this;
    price = console.log({ token, addresses }, "handle toooookeeen");
    token.total = total;
    const response = await axios.post(
      "http://127.0.0.1:8000/payments/checkout",
      
      { token, addresses }
      
    );
    console.log(response.data, "resppoooooonse");
    // const { status } = response.data;
    // console.log(status, "statuuuuuuuus");
    if (response.data === "ok") {
      toast("Success! check email for details", { type: "success" });
      // this.ajax();

      console.log("okkkkkkkk");
      window.location = `/home`;
     
    } else {
      toast("somthing went wrong", { type: "error" });
    }

    //  var obj = this.state.data
    //   $.ajax({
    //     url:'http://127.0.0.1:8000/buyer/order',
    //       method:'POST',
    //       data:JSON.stringify(obj),
    //       contentType: "application/json",
    //       success:function(){
    //         console.log('success')
    //       },
    //       error: function(err){
    //         console.log(err)
    //       }
    //     })

    // window.location = `/home`;
  }
  render() {
    const { places, mapApiLoaded, mapInstance, mapApi } = this.state;

    // console.log("this.props", this.props.location.info.id);
    // var x;
    //   {this.state.data ?  x = <Redirect to={'/seller/profile'}/>
    //   :'not'}
    //   console.log(this.props,'proooooops')
    // console.log(this.props.location.info.price, 'priiiiiiiice')
    if ((this.state.show = true))
      var map = (
        <div>
          <div className="main-wrapper" width="50px">
            <Wrapper className="main-wrapper">
              {mapApiLoaded && (
                <div className="main-wrapper">
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
              {
                (this.state.show = true ? (
                  <div className="info-wrapper">
                    <div className="map-details">
                      Latitude: <span>{this.state.lat}</span>, Longitude:{" "}
                      <span>{this.state.lng}</span>
                    </div>
                    <div className="map-details">
                      Zoom: <span>{this.state.zoom}</span>
                    </div>
                    <div className="map-details">
                      Address: <span>{this.state.address}</span>
                    </div>
                    <button onClick={this.location}>Add My Location</button>
                  </div>
                ) : null)
              }
            </Wrapper>
          </div>
        </div>
      );

    var link =
      "https://www.google.com/maps/search/" +
      this.state.lat +
      "," +
      this.state.lng +
      "?sa=X&ved=2ahUKEwiRo7PR4frtAhXVURUIHfmeDe4Q8gEwAHoECAEQAQ";

    console.log("proooooops", this.props.location.info.name);
    return (
      <div>
        <NavbarBuyer />
        <br />
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
            <h5 style={{ textAlign: "center", marginTop: "40px" }}>
              {this.props.location.info.name}
            </h5>
          </div>
          <div className="d-flex">
            <br />
            <div className="p-2" style={{ marginRight: "30px" }}>
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
                <button onClick={this.showMap}>Your Location</button>

                <br></br>
                <label for="validationDefault02">Phone Number:</label>
                <Control.text
                  className="form-control"
                  model="order.phoneNumber"
                  id="order.phoneNumber"
                  required
                />
                <br />
                <br />
                <br />
                <br />

                <button
                  className="btn btn-success"
                  onClick={this.click}
                  style={{
                    marign: "0 auto",
                    width: "200px",
                    textAlign: "center",
                    marginLeft: "30%",
                    marginBottom: "50px",
                  }}
                >
                  Pay Cash
                </button>
                <StripeCheckout
                  stripeKey="pk_test_51I2FktCNmtNvriYQGjLYu0G8wYecRexcoEiC52AMMZwsISRlg1irJgpBFMKJ2qwvFSOB48zEuxLlnRaC6lfGbMCs006oNLTZZq"
                  token={this.handleToken}
                  amount={total}
                  name={this.props.location.info.productname}
                  // billingAddress
                  // shippingAddress
                  onClick={this.ajax}
                  style={{
                    marign: "0 auto",
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
        {map}
      </div>
    );
  }

  //
}
export default Order;
