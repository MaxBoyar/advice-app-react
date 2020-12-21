import React from 'react'
import './Advice.css'

const Advice = (props) => {
    return (
        <div className="main">
            <div className="Row">
                <h1>"{props.advices}"</h1>
                
            </div>
            <div className='Row'>
            <div className="box">
            <a href="" onClick={props.call} className="btn btn-white btn-animation-1">GIVE an advice</a> 
          
            </div>
                {/* <button type="button" className="btn btn-white btn-animation-1" onClick={props.call}>Click Me!</button>  */}
            </div>

        
            
            
            
        </div>
    )
}

export default Advice
