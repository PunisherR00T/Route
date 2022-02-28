import { Link } from 'react-router-dom'
import '../App.css'

const NavFilms = () => {

    return (
                <div id='NavFilms'>

                        <div >
                            <ul id='Navlist'>
                                
                                    <li><Link to='/Acceuil' className='link'>Home</Link></li>
                                    <li id='Films'><Link to='/Films' className='link'>Films</Link></li>
                                    <li><Link to='/Séries' className='link'>Séries</Link></li>
                               
                            </ul>
                        </div>

                        

                </div>
    )
}

export default NavFilms 