import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'

import '../Styles/Home.css'
import Card from './Card'

function Home() {
    const [charcters, setcharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    
    useEffect(() => {
        setLoading(true)
        axios.get('https://thronesapi.com/api/v2/Characters')
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
    <div className='container characters'>
        {
            loading ?
            (<div className="lds-dual-ring"></div>)
              : 
            (<div className = 'character-inner'>
                <div className='row'>
                    {
                        charcters.map(char => <Card key={char.id} id = {char.id} name = {char.fullName} imageUrl = {char.imageUrl}/>)
                    }
                </div>
            </div>)
        }
    </div>
  )
}

export default Home