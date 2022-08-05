import {React} from 'react'
import profileImage from "../img/selfie.jpg"

export default function Bio() {

  return (
    <div id="bio">
    <div id="selfie-container">
    <img id="selfie" src={profileImage} alt="selfie picture of myself"></img>
    </div>
    
    {/* <p className="bioText" id = "personalName">Joel Giladi</p> */}
    <p className="bioText">Recently graduated Software Developer with 2 years experience of school and freelance work.
    <br></br>
    <br></br> 
    I have experience with both front end and back end development on both web and mobile platforms.
    <br></br>
    <br></br>
    I am also a hobby tinkerer with Arduino electronic circuits.</p>
    <p className="bioText">Contact: 
    <br></br>
    Email: giladij@outlook.com
    </p>
</div>
  )
}
