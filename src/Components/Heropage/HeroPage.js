import React from 'react'
import './_HeroPage.scss'
import wealth_M from '../../assests/images/Wealth_Manager_dashboard.png'


function HeroPage() {
  return (
    <div className='heropage'>
        <div className='heropage_container'>
            
            <div className='globe'></div>
            <div className='blur'>

              <div className='content-left'>
                  <div>
            <p>Lorem ipsum dolor sit amet</p>
              </div>
             <div>
            <h4>Quiere la boca exhausta vid, kiwi , pina</h4>
               </div>
<div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
     </div>        
            

             
             </div>

             <div className='wealth-manager'>
                 <img src={wealth_M} />
             </div>
           </div>


        </div>
    </div>
  )
}

export default HeroPage