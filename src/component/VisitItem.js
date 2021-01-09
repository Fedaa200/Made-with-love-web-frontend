import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const VisitItems = (props) => {
  console.log(props);
  return (
    <div>
      <Row>
        {props.items.map((item) => {
          if (JSON.parse(localStorage.getItem("token"))["type"] === "buyer")
            var button = (
              <Link
                to={{
                  pathname: "/order",
                  info: {
                    id: item["pk"],
                    name: item["fields"].productname,
                    url: item["fields"].image,
                    store: item["fields"].store,
                    price: item["fields"].price,
                  },
                }}
              >
                <button>Order </button>
              </Link>
            );
          return (
            <Col>
              <Card
                style={{
                  width: "400px",
                  marginTop: "50px",
                  marginLeft: "50px",
                }}
              >
                <Link
                  to={{
                    pathname: "/buyer/item",
                    info: { item: item, cat: props.cat },
                  }}
                >
                  {" "}
                  <Card.Img variant="top" src={item["fields"]["image"]} />
                </Link>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Product Name :
                    </label>{" "}
                    {item["fields"]["productname"]}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Description :
                    </label>{" "}
                    {item["fields"]["description"]}
                  </Card.Text>
                  <Card.Text style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Product Price :
                    </label>{" "}
                    {item["fields"]["price"]}
                  </Card.Text>
                  {button}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default VisitItems;
