import { useEffect, useRef } from "react";
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DLine = ({ Sum, data, Width, Height, Title, Text }) => {
    const ref = useRef();


    const containerNamesSet = new Set();
        data.forEach((Item) => {
            if (Item.hasOwnProperty('package')) {
                containerNamesSet.add(Item.package);
              }
        })
    const setConArr = Array.from(containerNamesSet)
    
    const newD = setConArr.map((item, i) => {
        return {package: item , values : data.filter(ITEM => {
            return ITEM.package === item
        })}

    })

        const options = {
            animationEnabled: true,	
            title:{
                text: Title
            },
            axisY : {
                title: Text,
                // titleFontColor: "rgb(225,225,226)",
                // labelFontColor: "rgb(225,225,226)"
            },
            axisX : {
                title: Text,
                // titleFontColor: "rgb(225,225,226)",
                // labelFontColor: "rgb(225,225,226)"
            },
            toolTip: {
                shared: true
            },
            legend: {
                // fontColor: "rgb(225,225,226)"
              },
            backgroundColor: "transparent",
            Height: Height,
            data: newD.map(item => {
                return {
                    type: "spline",
                    name: item.package,
                    showInLegend: true,
                    dataPoints: item.values.map(ITEM => {
                        return { y: ITEM.count, label: ITEM.severity }
                    })
                    
                }
            })
    }



    if(Sum === 0){
        return <div>Loading</div>
    }

  return (<div style={{width: Width}} className="Chart">
    <CanvasJSChart options = {options}/>
  </div>
    
  )
}

export default DLine