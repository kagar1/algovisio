import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class PannelConfigContainer extends Component {
  render() {
    return (
      <Card 
        bg= "Primary"
        key={this.props.titleconfig}
        className="mb-2"
      >
          <Card.Body>
            <Card.Title>{this.props.titleconfig}</Card.Title>
            <Card.Text>
                0
            </Card.Text>
          </Card.Body>
      </Card>
      
    );
  }
}
