import React from 'react';
const CrimeChart = (props) => {
  let crimes = Object.keys(props.crimes);
  if (!crimes.length){ return null; }
  
  const crimeKeys = crimes.map(cat => {
    let total = props.crimes[cat];
    let proportion = total/crimes.length;
    return (
      <div key={cat} >
        {cat} : {total}
      </div>
    )
  });

  return (
    <div className='crime'>
      {crimeKeys}
    </div>
  );
}

export default CrimeChart;
