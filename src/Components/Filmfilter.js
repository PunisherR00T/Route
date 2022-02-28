import { Rating } from '@mui/material'
import './Filmfilter.css'

const Filmfilter = ({inpt,rate,setInpt,setRate}) => {
    
    return (
        <div className="modalL">
            <input onChange={(e)=> setInpt(e.target.value)} value={inpt}/>
            <Rating onChange={(e)=> setRate(e.target.value)} value={rate}/>
        </div>
    )
}

export default Filmfilter