import  {Modal,Form,Button} from 'react-bootstrap'
import './Filmadd.css'
import { useState } from 'react';
import { Rating } from '@mui/material';

const FilmAdd = ({handleadd}) => {
    const [show, setShow] = useState(false);
    const [title,setTitle] = useState('')
    const [imageurl,setImageurl] = useState('')
    const [Description,setDescription] = useState('')
    const [ratingstars,setRatingstars] = useState(0)
    const handleclose = () => setShow(false)

    return (
        <div>
<Button id='ConfirmBtn' variant="success" onClick={() => setShow(true)}>
        Ajouter un Film
      </Button>

      <Modal
        show={show}
        onHide={handleclose}
        dialogClassName="modal-90w"
        aria-labelledby="Modaltitle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Modaltitle">
            Ajouter un Film
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                        
                        <Form.Group className="mb-3" >
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setImageurl(e.target.value)}  />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" placeholder="Titre..." onChange={(e)=>setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description..." onChange={(e)=>setDescription(e.target.value)}/>
                        </Form.Group>
                        <Rating onChange={(e)=>setRatingstars(e.target.value)} />

                    </Form>
                    
        </Modal.Body>
        <Modal.Footer>
                <Button  variant="primary" onClick={()=>{handleadd({titre:title,image:imageurl,description:Description,rating:ratingstars,id:Math.random()});handleclose()}} >
                    Confirmer
                </Button>
                </Modal.Footer>
      </Modal>
      </div>
    )
}

export default FilmAdd