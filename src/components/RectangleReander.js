import React, { Component } from 'react';
import {rectangle, verticalAlign} from '../CustomStyles/style1'
    

export default class RectangleRender extends Component {
  
  constructor(props){
    super(props);
    this.state ={
        rectangleWidth:2,
    }

    this.renderRectangles = this.renderRectangles.bind(this);
    this.arrayOfRectangles =[];
    this.arrayOfShuffleRectangles =[];

  }

  componentDidMount(){
    let divWidth = this.mainDiv.offsetWidth;
    this.setState({
        rectangleWidth: divWidth/this.props.numbRectangles,
    })
  }


  //generate rectangle with a width base on the size of the div they are and the height base on the number of element
  renderRectangles(){
    this.arrayOfRectangles =[];
    for (let index = 1; index <= this.props.numbRectangles; index++) {
        this.arrayOfRectangles.push(<div style={rectangle(this.state.rectangleWidth, index*10)} className="align-baseline">
        </div>)
        
    }
  }

  //Bubble sort out algorithme which take a shuffle array an return one sort
  bubbleSortAlgorithme(array){
      let i , j, temp ;

      for (i = 0; i < array.length; i++) {

         for ( j = 0;  j < array.length-i-1; j++) {

             if(array[j] > array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
             }
             
         }
          
      }

      return array;
  }

  // function to generate a shuffle array of rectangles
  getShuffleArray(array1, array2){
      let array = [];

      for (let index = 0; index < array1.length; index++) {
          
          array.push(array1[array2[index]])
      }

      return array;
  }

  render() {
    // I get the width of my main div which content my rectangles
    this.renderRectangles();

    
    // base on the amount of rectangle I want I try to get the width of each rectangles
    let widthEachRectangle = Math.floor(20);
    return (
      <div ref={(el)=>this.mainDiv = el} className="col-lg-12 row">  
        {
           this.getShuffleArray(this.arrayOfRectangles, this.props.arraySortOut) 
        } 
      </div>
    );
  }
}
