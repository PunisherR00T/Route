import { Link, useParams } from "react-router-dom"
import './CardContent.css'

const CardContent = ({films}) => {
    const {content} = useParams()
    const selectedFilm = films.find(film => film.titre === content)
  
    return (
        <div>
            <img src={selectedFilm.image}/>
            <h1>{selectedFilm.titre}</h1>
            <p>{selectedFilm.description}</p>
            <Link to='/Films' className='link'>Films</Link>
        </div>
    )
}

export default CardContent
