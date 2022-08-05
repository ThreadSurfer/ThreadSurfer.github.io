import {React, useState} from 'react'

export default function Banner() {
const [infoVisible, setInfoVisible] = useState('hidden')

  return (

    <>
    <div id="header" className='container-fluid'>
      <div className='shiner'>
        <h1 className="display-1" onClick={() => infoVisible === 'hidden' ? setInfoVisible('visible') : setInfoVisible('hidden')}>Joel Giladi</h1>
        <h4>Full Stack Developer</h4>
      </div>
      <h1 onClick={() => console.log("Hello")}>Joel Giladi</h1>
      <h4>Full Stack Developer</h4>

      <p id="first_greeting">Hi there</p>
      <p id="second_greeting">Nice to meet you</p>
      <p id="third_greeting">Feel free to scroll down and see my projects 😊</p>
    </div>

    </>
  )
}
