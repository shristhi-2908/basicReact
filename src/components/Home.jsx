import React from 'react'
import Card from './Card'
import ngoImage from "../assets/charity.png"
// import Video from './Video';


function Home() {
  return (

    <div className='ngo_home'>
      <div className="row py-lg-5 homePage">
            <img className='img-fluid rounded' style={{width:"500px",height:"400px" }} src={ngoImage} alt="poor child" />
                <div className="col-lg-6 col-md-8 home-div">
                    <h1 className="ngo_heading">Spread Love, Give Hope, Create Change!</h1>
                    <p className="lead text-body-secondary">Every act of kindness creates a ripple of change. Join us in spreading hope, helping communities, and making a difference—one small gesture at a time..</p>
                   <button href="#" className="home-btn my-2">Get Started</button>
                </div>
            </div>
           {/* <Video/> */}
           <Card/>
    </div>


  )
}

export default Home;
