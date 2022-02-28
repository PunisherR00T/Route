import React, { useState } from 'react';
import './App.css';
import Films from './Components/Films';
import NavFilms from './Components/NavFilms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom'
import CardContent from './Components/CardContent';


function App() {
  const [films,setFilms] = useState(
    [
     {titre:"John Wick",image:'https://images-na.ssl-images-amazon.com/images/I/51lgnA3dRbL._SY300_QL70_ML2_.jpg',description:"John Wick est un film d'action américain réalisé par David Leitch et Chad Stahelski et sorti en 2014. Il met en scène Keanu Reeves dans le rôle-titre, qui est un ancien tueur à gages contraint à reprendre du service pour retrouver celui qui l'a agressé, volé sa voiture et tué son chiot beagle, cadeau de son épouse récemment décédée.",rating:2,id:Math.random()},
     {titre:"mission impossible",image:'https://th.bing.com/th/id/OIP.XjTe42c9K6Qix1P-MpPP2AAAAA?pid=ImgDet&rs=1',description:"Les membres d’un commando de la CIA sont envoyés à Prague avec pour mission d’appréhender, lors d’une réception dans l’ambassade américaine, un espion ennemi qui s’apprête à dérober une disquette contenant la liste secrète des agents en Europe centrale.",rating:5,id:Math.random()}    
 ]
    )
    const handleadd = (NouveauFilm) => setFilms([...films,NouveauFilm])

  return (
    <div >
     <NavFilms/>
     <Routes>
             <Route path='/Acceuil'/>
             <Route path='/Films' element={<Films films={films} handleadd={handleadd}/>}/>
             <Route path='/Séries'/>
             <Route path='/Films/:content' element={<CardContent films={films} />}/>
     </Routes>
    </div>
  );
}

export default App;
