import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class RangeButton extends Component {
  render() {
    return (
        <Form>
            <Form.Group controlId="formBasicRangeCustom">
            <Form.Control type="range" custom onChange = {(e)=> alert(e.value)} />
            </Form.Group>
        </Form>
    );
  }
}
