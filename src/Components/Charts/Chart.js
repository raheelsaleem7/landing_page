import React from 'react'
import "./_Chart.scss"
import chart1 from '../../assests/images/1.png'
import chart2 from '../../assests/images/2.png'
import chart3 from '../../assests/images/3.png'


function Chart() {  
  return (
    <div className='chart'>
        <h5>Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige,<br /> sin tapujos, que añada cerveza al whisky. Jovencillo empon</h5>
        <div className='chart-container'>
        <div id="chart">
        <img src={chart1} />
         </div>

         <div id="chart2">
          <img src={chart2} />
         </div>

         <div id="chart3">
         <img src={chart3} />
         </div>

      
        </div>
    </div>
  )
}

export default Chart