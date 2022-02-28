import React from 'react'
import "./_VideoSection.scss"
import video from '../../assests/images/video.png'

function VideoSection() {
  return (
    <div className='videoSection'> 
        <div className='container'>

        <div className='col-1'>
            <div className='progress_div'>
              <h5>Challenge 01</h5>
               
               <div className='drag'>

               <div className='progress_Bar'>
                   <div className='progress'></div>
               </div>

               <div className='percent'>
               <p>35%</p>
                </div>

                </div>
                <p>Here go numbers XX of total XX</p>

            </div>

            <div className='about_video'>
          <h3>Quiere la boca exhausta vid,<br /> 
kiwi, piña</h3>
  
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
sed diam nonumy eirmod tempor invidunt ut</p>

            </div>
</div>


            <div className='video_section'>
              <div className='video_cover'>
               <img src={video} />
               </div>

               <div className='play_svg'>
               <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="132.63" height="132.63" viewBox="0 0 132.63 132.63">
  <defs>
    <linearGradient id="linear-gradient" x1="0.159" y1="0.169" x2="0.9" y2="0.833" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0.051"/>
    </linearGradient>
  </defs>
  <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle" d="M66.378.563a65.815,65.815,0,1,0,65.815,65.815A65.8,65.8,0,0,0,66.378.563Zm30.7,72.184L50.375,99.55A6.381,6.381,0,0,1,40.9,93.977v-55.2A6.384,6.384,0,0,1,50.375,33.2L97.082,61.6A6.39,6.39,0,0,1,97.082,72.747Z" transform="translate(-0.063 -0.063)" stroke="#fff" stroke-width="1" fill="url(#linear-gradient)"/>
</svg>

               </div>
            </div>
            
        </div>
    </div>
  )
}

export default VideoSection