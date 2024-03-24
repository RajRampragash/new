
import './App.css';
import Header from './components/header/header';
import { About } from './components/About/about';

import {Contactinfo} from "../src/components/contactinfo/index.js"

import RegForm from './components/regForm/regForm.js';
import Benefit from './components/benefits/index.js';
import Footer from './components/Footer/index,.js';





function App() {
  return (
    <div className="App">
   <Header/>
   <About/>
   <Benefit/>
    <RegForm/>
   <Contactinfo/>
   <Footer/>
  
    </div>
  );
}

export default App;
