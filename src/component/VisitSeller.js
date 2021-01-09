import React from "react";
import $ from "jquery";
import { Container, CardGroup, Card, Row, Col } from "react-bootstrap";
import VisitItems from "./VisitItem";
import NavbarSeller from "./layout/NavbarSeller";
import Rate from "./rate";
const styles = {
  card: {
    backgroundColor: "#B7E0F2",
    borderRadius: 55,
    padding: "3rem",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 55,
  },
};
class VisitSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], items: [] };
  }
  fetchData = (id) => {
    var that = this;
    console.log(typeof this.props.location.pathname.slice(15), "iddddd");
    // console.log(1111111111111111)
    // var  { id } = useParams();
    console.log(this.props.location.pathname.slice(14), "idddddd");
    $.ajax({
      url: `http://127.0.0.1:8000/seller/visit/${this.props.location.pathname.slice(
        14
      )}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        var data1 = JSON.parse(data);
        that.setState({ data: data1 }, () => {
          console.log("22222222222222", that.state);
        });
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  fetchItems = (id) => {
    var that = this;
    console.log(id, "fetchitems");
    console.log(1111111111111111);
    $.ajax({
      url: `http://127.0.0.1:8000/seller/visit/items/${this.props.location.pathname.slice(
        14
      )}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        //  var data1 = JSON.parse(data)
        // var data1 = data
        that.setState({ items: data }, () => {
          console.log("itemsss", that.state);
        });
        // that.setState(data
        // console.log(that.state,'staaate')
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  componentDidMount = () => {
    console.log(this.props.location, "iddddd");
    this.fetchData();
    this.fetchItems();
  };
  upState = (data) => {
    this.setState({
      store_name: data["fields"],
    });
  };
  render() {
    console.log(this.state, "staaaaaaaate");
    if (this.state.data[0])
      var x = (
        <div>
          {" "}
          <Container fluid>
            <CardGroup className="m-5 d-block">
              <Card className="m-5 border-0 shadow" style={styles.card}>
                <Row>
                  <Col>
                    <Card.Img
                      src={this.state.data[0]["fields"].image}
                      style={styles.cardImage}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title as="h1">
                        Store Name :{this.state.data[0]["fields"].store_name}
                      </Card.Title>
                      <Card.Text as="h4" style={styles.cardText}>
                        Description :{this.state.data[0]["fields"].description}
                      </Card.Text>
                      <Card.Text as="h4" style={styles.cardText}>
                        Location :{this.state.data[0]["fields"].location}
                      </Card.Text>
                      <Card.Text as="h4" style={styles.cardText}>
                        Delievery Time :
                        {this.state.data[0]["fields"].delivery_time}
                      </Card.Text>
                      <Rate ttt={this.state.data[0].pk} />
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Container>
          <VisitItems
            items={this.state.items}
            cat={this.state.data[0]["fields"].category}
          />
        </div>
      );
    return (
      <div>
        <NavbarSeller />
        {x}
      </div>
    );
  }
}
export default VisitSeller;
