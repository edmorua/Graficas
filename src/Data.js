import React from 'react';
import './App.css';


export default class Data extends React.Component{
  
  render(){

    let {unitData,
      percentData1,
      percentData2,
      nameData1,
      nameData2,
      quantityData1,
      quantityData2,
      color
    } = this.props

    return(
      <div className="data-text-container">
        <div className="data1-container">
          <h5 style={{color:color.color1}}>{nameData1}</h5>
          <p style={{color:color.color1,fontWeight:'bold'}}>{percentData1 + '% ' + quantityData1 + unitData}</p>
        </div>
        <div className="data2-container">
          <h5 style={{color:color.color2}}>{nameData2}</h5>
          <p style={{color:color.color2}} >{percentData2 + '% ' + quantityData2 + unitData}</p>
        </div>
      </div>
      
    )
  }
}