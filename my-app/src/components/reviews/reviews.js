import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import review from "../../reviews.json";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
    };
  }
  componentDidMount() {

    let reviewCard = review.review.map((item, index) => {
      return (
        <p src={item.review}></p>
      );
    });

    this.setState({ reviewArray: reviewCard });
  }


  
  render() {
    return (
      <p>{this.state.reviewArray}</p>
    );
  }
}

export default Reviews;
