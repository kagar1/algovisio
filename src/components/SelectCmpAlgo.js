import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class SelectCmpAlgo extends Component {
  render() {
    return (
      <div> 
          <Form>
              <Form.Group controlId="selectalgotype">
                
                <Form.Control as="select" custom>
                    {this.props.searchAlgo.map((item) => <option>{item}</option>)}
                </Form.Control>
              </Form.Group>
          </Form>
      </div>
    );
  }
}

SelectCmpAlgo.propTypes = {
    searchAlgo: PropTypes.array.isRequired,
}