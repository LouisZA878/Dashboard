'use client'

import { useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = ({ Width, Height, Title, Text, data, Sum, amount}) => {



    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        title:{
            text: "Trip Expenses"
        },
        legend: {
            // fontColor: "rgb(225,225,226)"
          },
        Height: Height,
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: data.map(item => {
                return {y:  Math.round(item.count / amount * 100),label: item.package}
            })
        }]
    }


  return (
    <div style={{ width: Width }} className='Chart'>
        <CanvasJSChart options = {options} />
    </div>
  )
}

export default Pie