import { useState } from 'react'
import AllFilms from './AllFilms'
import FilmAdd from './FilmAdd'
import Filmfilter from './Filmfilter'
import './Films.css'

const Films = ({handleadd , films}) => {
     
   

    const [inpt,setInpt] = useState('')
    const [rate,setRate] = useState(0)
    return (

        <div>
                
                <aside id='Title'>
                        <h2>Films</h2> 
                        <Filmfilter inpt={inpt} rate={rate} setInpt={setInpt} setRate={setRate} />
                        <FilmAdd handleadd={handleadd}/>
                        <AllFilms films={films} inpt={inpt} rate={rate}/>
                 </aside>
                
        </div>
    )
}

export default Films