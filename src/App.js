import React from 'react';
import './App.css';
import RadialChart from './RadialChart.js';
import GraphContainer from './GraphContainer';

const data = [
  {
    unitName: 'REVENUE',
    quantity: '200.000',
    unit: '€',
    data1: {name: 'Tablet', quantity: '120.000'},
    data2: {name: 'Smartphone', quantity: '80.000'}
  },
  {
    unitName: 'IMPRESIONS',
    quantity: '50.000.000',
    unit: '',
    data1: {name: 'Tablet', quantity: '20.000.000'},
    data2: {name: 'Smartphone', quantity: '30.000.000'}
  },
  {
    unitName: 'VISITS',
    quantity: '600.000.000',
    unit:'',
    data1: {name:'Tablet', quantity:'480.000.000' },
    data2: {name:'Smartphone',quantity:'120.000.000'}
  }
]

const colors=[
  {
    color1: "#B1EFAA",
    color2: "#35B527",
  },
  {
    color1: "#A5CFF3",
    color2: "#5597D1",
  },
  {
    color1: "#FEB73B",
    color2: "#FE483B"
  }
]
class App extends React.Component{

  render(){
    let graphs = []
    var i = 1;
    data.map((datum) =>{
      graphs.push(<GraphContainer color={colors[i-1]} key={i++} graphData={datum}></GraphContainer>)
    });
    return(
      <div className="App">
      {graphs}
      </div>
    );
  }
}
export default App;
