import React from 'react'


const Title = (props) => {
  return (
    <div className='App'>
        
        <hr></hr>

        <h3> 🌟🌟 Tenemos 🌟🌟</h3>
        <h2>{props.title}</h2>
        <p>{props.icons}</p>
        
    </div>
  )
}

export default Title;