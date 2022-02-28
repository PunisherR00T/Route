import { Link, useParams } from "react-router-dom"
import './CardContent.css'

const CardContent = ({films}) => {
    const {id} = useParams()
    const selectedFilm = films.find(film => film.id === id)
  
    return (
        <div>
            <h1>{selectedFilm.titre}</h1>
            <Link to='/Films' className='link'>Films</Link>
        </div>
    )
}

export default CardContent