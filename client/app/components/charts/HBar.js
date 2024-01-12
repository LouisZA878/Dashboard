import React, { Component, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HBar = ({ Sum, data, Width, Height, Title, Text }) => {
    
    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: Title
        },
        axisX: {
            title: Text,
            reversed: true,
            // titleFontColor: "rgb(225,225,226)",
            // labelFontColor: "rgb(225,225,226)"
        },
        height: Height,
        axisY: {
            title: "Monthly Active Users",
            includeZero: true,
            // titleFontColor: "rgb(225,225,226)",
            // labelFontColor: "rgb(225,225,226)"
        },
        legend: {
            // fontColor: "rgb(225,225,226)"
          },
        backgroundColor: "transparent",
        data: [{
            type: "bar",
            dataPoints:  data.map(item => {
                return { y:  item.count, label: item.package }
            })
        }]
    }

      if(Sum === 0){
        return <div>Loading</div>
    }
  return (
    <div style={{width: Width}} className="Chart">
        <CanvasJSChart options = {options}/>
    </div>
  )
}

export default HBar