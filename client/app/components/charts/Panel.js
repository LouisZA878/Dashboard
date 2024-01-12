'use client'

import { useState, useEffect } from 'react'

const Panel = ({ Height, data, conName }) => {
    const [panelData, setPanelData] = useState([])
    const [toggle, setToggle] = useState(true)

    // const con = new Set()
    // data.forEach((item) => {
    //     if(item.hasOwnProperty('container_name')){
    //         con.add(item.container_name)
    //     }
    // })
    // const setCon = Array.from(con)
    // let h ={
    //     container: '',
    //     data: []
    // }
    // setCon.map((item, i) => {
    //     setPanelData(prev => {
    //         return [...prev, {
    //             container: item,
    //             data: data.map(Item => {
    //                 if(Item.container_name === item){
    //                     return Item.vulnerabilities.map((ITEM) => {
    //                         return ITEM
    //                     })
    //                 }
    //             }).filter(t => t !== undefined).reduce((accumulator, element) => {
    //                 return accumulator.concat(element)
    //             })
    //         }]
    //     })


    // })
    
    
    useEffect(() => {
        const con = new Set();
        data.forEach((item) => {
            if (item.hasOwnProperty('container_name')) {
                con.add(item.container_name);
            }
        });
    
        const setCon = Array.from(con);
    
        // const promises = setCon.map((item) => {
            const containerData = data
                .filter((Item) => Item.container_name === conName)
                .flatMap((Item) => Item.vulnerabilities);

                let h = containerData;
        // }
        // );
    
        Promise.all(h).then((newPanelData) => {
            setPanelData(newPanelData);
        });
    }, [conName, data]);
    const SORTs = panelData.sort(function (a, b) {
        if (toggle ? a.package < b.package : a.package > b.package) {
          return -1;
        }
        if (toggle ? a.package > b.package : a.package < b.package) {
          return 1;
        }
        return 0;
      });

  return (
    <div className='Chart Panel' style={{ height: Height}}>
      <table className='PTable'>
        <caption className='PCaption'>Every single Vulenerability in every package :</caption>
        <thead className='PHead'>
          <tr>
            <th className='TFIlter' onClick={() => setToggle(!toggle)}>Package</th>
            <th>Severity</th>
            <th>Fix-Version</th>
          </tr>
        </thead>
        <tfoot className='PFoot'>
          <tr>
            <td colSpan="2">Amount of Vul in this container:</td>
            <td>{panelData.length}</td>
          </tr>
        </tfoot>
        <tbody className='PBody'>
          { 
            SORTs.map((item, i) => {
                        return <tr>
                        <td>{item.package}</td>
                        <td>{item.severity}</td>
                        <td>{item.fix_version}</td>
                        </tr>
                    })}
        </tbody>
    </table>
    </div>
  )
}

export default Panel