import React from 'react'

const FItems = ({ grype, setName, Filter }) => {

    const style = {
        borderRadius: 3,
        width: 100,
        height: 25,
        margin: 3,
    }
    const containerNamesSet = new Set();
    grype.forEach((item) => {
      if (item.hasOwnProperty('container_name')) {
        containerNamesSet.add(item.container_name);
      }
    });
    const setArr = Array.from(containerNamesSet)

    const arr = setArr.filter(item => {
        return Filter === '' || undefined || null ? item : item.toString().toLowerCase().includes(Filter) ||
                                item.toString().toUpperCase().includes(Filter)
    })
  return (
    <div className='FItems'>
        {arr.map((item, i ) => (
            <div key={i} style={style} className='F-I-Data' onClick={() => setName(item)}>
            {item}
            </div>
        ))}
    </div>
  )
}


export default FItems