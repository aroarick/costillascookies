import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import gallary from "../../gallary.json";

class Gallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallaryArray: [],
    };
  }
  componentDidMount() {

    let gallaryCard = gallary.gallary.map((item, index) => {
      return (
        <Card>
            <Card.Img src={item.image} />
        </Card>
      );
    });

    this.setState({ gallaryArray: gallaryCard });
  }


  
  render() {
    return (
      <CardColumns>{this.state.gallaryArray}</CardColumns>
    );
  }
}

export default Gallary;
