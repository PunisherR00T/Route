import { Rating } from '@mui/material'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShowMoreText from 'react-show-more-text'

import './FilmCard.css'

const FilmCard = ({film}) => {


    return (
    <div>
        <Card id='Card' style={{ width: '18rem' }}>
  <Card.Img id='ImageCard' variant="top" src={film.image} alt="Verify Source" />
  <Card.Body>
  
    <Card.Title>{film.titre}</Card.Title>
    <Card.Text>
                        <ShowMoreText lines={3} more="Plus" less="Moins" className='showMore'>
                            {film.description}
                        </ShowMoreText>                     
                    </Card.Text> 
                    <Rating defaultValue={film.rating} readOnly />

    <Button variant="primary"><Link to={`/Films/${film.titre}`} id='link'>Regarder</Link></Button>

  </Card.Body>
</Card>
</div>
    )
}

export default FilmCard