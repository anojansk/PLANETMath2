import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Pages/Home"
import {  BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CRT from "./Pages/NumberTheory/CRT"
import FLT from './Pages/NumberTheory/FLT';
import RSA from './Pages/Cryptography/PKE/RSA';
import Layout from './Components/Layout';
import OV from './Pages/Cryptography/QuantumPKE/OV';
import MoreTasksLayout from './Components/MoreTasksLayout';
import MTDifficult from './Components/MTTasks.jsx/MTDifficult';
import MTEasy from './Components/MTTasks.jsx/MTEasy';
import MTIntermidiate from './Components/MTTasks.jsx/MTIntermidiate';
//import MTAll from './Components/DumpsterFiles/MTAll';
import ET from './Pages/NumberTheory/EulersTheorem';
import EPF from './Pages/NumberTheory/EulersPhiFunction';
import ElGamal from './Pages/Cryptography/PKE/ElGamal';
import MI from './Pages/Cryptography/QuantumPKE/MI';
import DH from './Pages/Cryptography/DH';
import Groups from './Pages/AbstractAlgebra/Groups';
import Feedback from './Pages/Feedback';
import CG from './Pages/AbstractAlgebra/CyclicGroups';
import LagrangeInterpolation from './Pages/NumericalAnalysis/LagrangeInterpolation.jsx';
import LUFac from './Pages/NumericalAnalysis/LUFac';
import About from './Pages/About.jsx';



const ToggleContext = React.createContext()


function App() {

const [DarkMode, setDarkMode] = React.useState(false)

function handleClick(){
  setDarkMode(prevState => !prevState)
}

const pageColor = DarkMode ? "dark" : "light"




 
  return (
    <ToggleContext.Provider value = {{handleClick, pageColor, DarkMode}}>
    <main className={pageColor}>  
    <div> 
    <BrowserRouter >
       <Routes>

            <Route element = {<Layout/>}>               
            <Route path="/" element = {<Home />}/>
            <Route path="OV" element={<OV />}/>
            <Route  path="CRT" element={<CRT />}/>
            <Route  path="FLT" element={<FLT />}/>
            <Route  path="RSA" element={<RSA />}/>
            <Route path="ET" element={<ET />}/>
            <Route path="LagrangeInterpolation" element={<LagrangeInterpolation />}/>
            <Route path="LUFactorising" element={<LUFac />}/>
            <Route path="EPF" element={<EPF />}/>
            <Route path="ElGamal" element={<ElGamal />}/>
            <Route path="DH" element={<DH />}/>
            <Route path="MI" element={<MI />}/>
            <Route path="Groups" element={<Groups />}/>
            <Route path="CyclicGroups" element={<CG />}/>
            <Route path="About" element={<About />}/>
           

            <Route path="/moretasks" element = {<MoreTasksLayout />}>
            <Route index element={<MTEasy />}/>
            <Route  path="intermidiate" element={<MTIntermidiate />}/>
            <Route  path="difficult" element={<MTDifficult />}/>
            </Route>
            
            <Route path="Feedback" element={<Feedback />}/>
            </Route>
    
        </Routes>
    </BrowserRouter>  
    </div>
    </main>
    </ToggleContext.Provider>  
    )
}


export {ToggleContext}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);