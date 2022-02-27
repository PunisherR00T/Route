import { useState } from 'react'
import AllFilms from './AllFilms'
import FilmAdd from './FilmAdd'
import Filmfilter from './Filmfilter'
import './Films.css'

const Films = () => {
     
   const [films,setFilms] = useState(
       [
        {titre:"John Wick",image:'https://images-na.ssl-images-amazon.com/images/I/51lgnA3dRbL._SY300_QL70_ML2_.jpg',description:"John Wick est un film d'action américain réalisé par David Leitch et Chad Stahelski et sorti en 2014. Il met en scène Keanu Reeves dans le rôle-titre, qui est un ancien tueur à gages contraint à reprendre du service pour retrouver celui qui l'a agressé, volé sa voiture et tué son chiot beagle, cadeau de son épouse récemment décédée.",rating:2,id:Math.random()},
        {titre:"mission impossible",image:'https://th.bing.com/th/id/OIP.XjTe42c9K6Qix1P-MpPP2AAAAA?pid=ImgDet&rs=1',description:"Les membres d’un commando de la CIA sont envoyés à Prague avec pour mission d’appréhender, lors d’une réception dans l’ambassade américaine, un espion ennemi qui s’apprête à dérober une disquette contenant la liste secrète des agents en Europe centrale.",rating:5,id:Math.random()}    
    ]
       )

    const handleadd = (NouveauFilm) => setFilms([...films,NouveauFilm])
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