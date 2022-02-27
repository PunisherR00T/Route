import React from 'react';
import './App.css';
import Films from './Components/Films';
import NavFilms from './Components/NavFilms';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div >
     <NavFilms/>
     <Films/>
    </div>
  );
}

export default App;
