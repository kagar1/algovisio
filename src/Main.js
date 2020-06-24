import React, { Component } from 'react';
import RectangleScheme from './components/RectangleScheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

export default class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        value:5,
    };

    this.arrayToSort = [];
  }


  // function to test if an element exists on Array
  elementExistOnArray(elemnt, array){
      let isExist = false;
      for (let index = 0; index < array.length; index++) {
        if(elemnt == array[index]){
            isExist = true;
            break;
        }else{
            isExist = false;
        }  
      }

      return isExist;
  }

  //function to fill an empty array with different element base on number giving throw parameter
  generateArrayToSort(val){
      let array =[];
      let randomVal;
      
      while(array.length != val){
        randomVal = Math.floor(Math.random()*val);

        if (array.length == 0) {
            array.push(randomVal);
        }else{
            if(!this.elementExistOnArray(randomVal, array)){
                array.push(randomVal); 
            }
        }
        
        

      }

      return array;

  }

  render() {

    // generation of our array of 50 element to sort 
    this.arrayToSort = this.generateArrayToSort(50);

    return (
        <div className="container-flex  ml-md-5 mr-md-5 row"> 
            <div className="col-md-12 mt-md-1">
                <h1>Common Sort Algorithms</h1>
            </div>
            <div className="col-md-10 row">
    
                <div className="col-md-10">
                    <InputRange
                    maxValue={20}
                    minValue={2}
                    value={this.state.value}
                     onChange = {(value) => this.setState({ value })}
                    />
                </div>
        
                <div className="col-md-5  mt-md-3">
                    <RectangleScheme numbRectangle={this.state.value} arraySort = {this.arrayToSort}/>
                </div>
                <div className="col-md-5  mt-md-3">
                    <RectangleScheme numbRectangle={this.state.value} arraySort = {this.arrayToSort}/>
                </div>
                <div className="col-md-5  mt-md-2">
                    <RectangleScheme numbRectangle={this.state.value} arraySort = {this.arrayToSort}/>
                </div>
                <div className="col-md-5  mt-md-2">
                    <RectangleScheme numbRectangle={this.state.value} arraySort = {this.arrayToSort}/>
                </div>
            </div>
            <div className="col-md-2 bg-info">
            fdsfdsf
            </div> 
      </div>
    );
  }
}
