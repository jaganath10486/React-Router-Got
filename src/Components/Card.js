import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <React.Fragment>
        <div className='col-md-auto'>
          <div className="card">
             <Link to={`character/${props.id}`}>
                <img src={props.imageUrl} className="card-img-top" style={{height : '150px', width : '150px'}} />
             </Link>
             <div className="card-body" style={{textAlign : 'center'}}>
              <h5 className="card-title">{props.name}</h5>
             </div>
          </div>
        </div>
       
    </React.Fragment>
  )
}

export default Card