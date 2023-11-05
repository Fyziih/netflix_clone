import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/Rowpost';

import { originals } from './url'
import { action,horror,romance,comedy,documentaries } from './url'

import axios from "axios";
import { useState } from "react";
function App() {
  const [state,setState]=useState([])
  return (
    <div className='App'>
     <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals'/> 
    <RowPost url={action} title='Actions' isSmall /> 
    <RowPost url={horror} title='Horror' isSmall /> 
    <RowPost url={comedy} title='Comedy' isSmall /> 
    <RowPost url={romance} title='Romance' isSmall /> 
    <RowPost url={documentaries} title='Documentaries' isSmall /> 
    </div>
  )
}

export default App;

