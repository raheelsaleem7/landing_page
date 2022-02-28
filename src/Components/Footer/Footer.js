import React from 'react'
import './_Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_container'>
          
          <div className='footer-content'>
          <h3>Wealth Manager</h3>

          <p>To build a democratized, streamlined, and secure <br /> real estate marketplace.</p>
          </div>

          <div className='navs'>
           <div className='navs_content'>
           <h5>Dashboard</h5>
           <p>Tickets</p>
           <p>Requests</p>
           </div>

           <div className='navs_content'>
           <h5>Allotte</h5>
           <p>Current Allote</p>
           <p>Invite Allotte</p>
           </div>


           <div className='navs_content'>
           <h5>Phases</h5>
           <p>Residential </p>
           <p>Commercial</p>
           </div>


           <div className='navs_content'>
           <h5>Balotting</h5>
           <p>Current Ballot</p>
           <p>New Ballot</p>
           </div>

           <div className='navs_content'>
           <h5>Agents</h5>
           <p>Invite Agents</p>
           <p>Current Agents</p>
           </div>



          </div>

        
      <div className='listing'>
            <ul>
              <li>Site Map</li>
              <li>Privacy Policy</li>
              <li>Cookie Setting</li>
              <li>Terms</li>
            </ul>
          </div>


          <div className='toTop'>
            <div>
            © 2022Akru
            </div>

            <div>
              Back To Top
            </div>
          </div>

  </div>        

      </div>


 
  )
}

export default Footer