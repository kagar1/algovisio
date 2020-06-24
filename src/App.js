import React from 'react';
import './App.css';
import RectangleScheme from './components/RectangleScheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-input-range/lib/css/index.css';
import RangeButton from './components/RangeButton';
import InputRange from 'react-input-range';

function App() {
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
            onChange={value => alert(value)} 
            />
        </div>

        <div className="col-md-5  mt-md-3">
          <RectangleScheme />
        </div>
        <div className="col-md-5  mt-md-3">
          <RectangleScheme />
        </div>
        <div className="col-md-5  mt-md-2">
          <RectangleScheme />
        </div>
        <div className="col-md-5  mt-md-2">
          <RectangleScheme />
        </div>
      </div>
      <div className="col-md-2 bg-info">
        fdsfdsf
      </div> 
    </div>
  );
}

export default App;
