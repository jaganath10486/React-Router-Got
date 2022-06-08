import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import '../Styles/Character.css'

function Character() {
  const params = useParams()
  const [characters, setcharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')

  useEffect(() => {
    setLoading(true)
    axios.get(`https://thronesapi.com/api/v2/Characters/${params.id}`)
    .then((Response) => {
        console.log(Response.data)
        seterrorMessage('')
        setcharacters(Response.data)
        setLoading(false)
    })
    .catch(error => {
        seterrorMessage(error)
    })
  }, [])
  return (
    <div className='character'>
      {
        loading ? (<div className='lds-dual-ring '>

        </div>)
        : 
        (<div className='character-details'>
          <div className='char-inner'>
            <div className='char-header'>
              <h4 className=''>{characters.fullName}</h4>
            </div>
            <div className='image'>
              <img src={characters.imageUrl} alt={characters.fullName}></img>
            </div>
            <div className='info'>
              <h6><span className='heading'>First Name</span> : <span className='name'>{characters.firstName}</span></h6>
              <h6><span className='heading'>Last Name </span> : <span className='name'>{characters.lastName}</span></h6>
              <h6><span className='heading'>Full Name </span> : <span className='name'>{characters.fullName}</span></h6>
              <h6><span className='heading'>Title </span>     : <span className='name'> {characters.title}</span></h6>
             <h6><span className='heading'>Family</span>      : <span className='name'> {characters.family}</span></h6>
             <h6><span className='heading'>Image</span>          : <span className='name'> {characters.image}</span></h6>
           </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Character