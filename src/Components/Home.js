import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'

import '../Styles/Home.css'
import Card from './Card'

function Home() {
    const [charcters, setcharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    const [text, setText] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
       setSearchParams({
        })
        setLoading(true)
        axios.get('https://thronesapi.com/api/v2/Characters')
        .then((Response) => {
            //console.log(Response.data)
            seterrorMessage('')
            setcharacters(Response.data)
            setLoading(false)
        })
        .catch(error => {
            seterrorMessage(error)
        })
    }, [])

    const search = () => {
       
         let items =   searchParams.get('filter') ? charcters.filter(item => item.lastName === searchParams.get('filter')) : charcters
        return items.filter(item => item.fullName.toLowerCase().includes(text.toLowerCase()))
    }
    const filter = (event) => {
      if(event.target.value == 0)
      {
        setSearchParams({})
      }
      else
      {
        setSearchParams({
          filter : event.target.value
        })
      }
    }

  return (
    <div className=' container characters'>
        {
          errorMessage && <div className='error'>{errorMessage}</div>
        }   
        {
            loading ?
            (<div className="lds-dual-ring"></div>)
              : 
            (<div className = 'character-inner'>
              <div className='row'>
                <div className="mb-3 col">
                    <input type="text" className="form-control" id="exampleInputText" placeholder='Search by Name' value={text} onChange={(event) => {setText(event.target.value)}}/>
                </div>
                <div className='col'>
                   <select className="form-select" onChange={filter}>
                     <option selected value='0'>Filter the Characters </option>
                     <option value="Stark">Stark</option>
                     <option value="Targaryen">Targaryen</option>
                     <option value="Baratheon">Baratheon</option>
                     <option value="Lannister">Lannister</option>
                     <option value="Tyrell">Tyrell</option>
                     <option value="Bolton">Bolton</option>
                     <option value="Greyjoy">Greyjoy</option>
                   </select>
                </div>
              </div>
                <div className='row'>
                    {
                        search().map(char => <Card key={char.id} id = {char.id} name = {char.fullName} imageUrl = {char.imageUrl}/>)
                    }
                </div>
            </div>)
        }
        
    </div>
  )
}

export default Home