import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <React.Fragment>
        <div className='col-md-auto' style={{marginTop : '30px'}}>
          <div className="card" style={{width : '300px'}}>
             <Link to={`character/${props.id}`}>
                <img src={props.imageUrl} className="card-img-top" style={{height : '300px', width : '300px'}} />
             </Link>
             <div className="card-body" style={{textAlign : 'center'}}>
              <h5 className="card-title" style={{color : 'red'}}>{props.name}</h5>
             </div>
          </div>
        </div>
       
    </React.Fragment>
  )
}

export default Card