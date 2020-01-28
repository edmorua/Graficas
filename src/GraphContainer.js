import React from 'react'
import RadialChart from './RadialChart';
import Data from './Data.js';
import './App.css';

export default class GraphContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let graphData = this.props.graphData;
    let {color} = this.props;
    console.log(graphData);
    var percentData2 = 100*parseInt(graphData.data2.quantity)/parseInt(graphData.quantity);
    return(
      <div className='Graph-Container'>
        <RadialChart color={color} unitName={graphData.unitName} unit={graphData.unit} quantity={graphData.quantity}
        progress={percentData2}
        ></RadialChart>
        <Data color={color} percentData1= {100 - percentData2} percentData2={percentData2} nameData1={graphData.data1.name}
        nameData2={graphData.data2.name} quantityData1={graphData.data1.quantity} quantityData2={graphData.data2.quantity} unitData={graphData.unit}></Data>
      </div>
    )
  }
}