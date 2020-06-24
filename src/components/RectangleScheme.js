import React, { Component } from 'react';
import SelectCmpAlgo from './SelectCmpAlgo';
import RectangleRender from './RectangleReander';

// Array which contain different type of algorithm manage by our app
const  searchAlgoManage = ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Selection Sort'];


export default class RectangleScheme extends Component {
  render() {
    return (
      <div>
         <SelectCmpAlgo searchAlgo = {searchAlgoManage}/>
         <RectangleRender numbRectangles={50} arraySortOut = {this.props.arraySort}/>
      </div>
      
    );
  }
}
