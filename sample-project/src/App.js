import logo from './logo.svg';
import {Newcard} from './newcard.js';
import {Logo} from './logo.js';
import {Buttons} from './buttons.js';
import {Home} from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notass } from './notass';
import { Userlogin } from './userlogin';
import { Box } from './box';
import { Card } from './card';
import { Reslayout1 } from './reslayout1';
import { Reslayout2 } from './reslayout2';
import { Reslayout3 } from './reslayout3';
import { Reslayout4 } from './reslayout4';
import { Finallayout } from './finallayout';
import { Counter } from './counter';
import { Task1pg2 } from './task1p2';
import { Task1pg3 } from './task1p3';
import { Task1pg1 } from './task1p1';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <h1>Hello World</h1>
    // <Newcard/>
    // <Logo/>
    // <Buttons/>
  //  <div>
  //   <BrowserRouter>
  //     <Routes>
  //       {/* <Route path='/' element={<Home/>}/>
  //       <Route path='/logo' element={<Logo/>}/>
  //       <Route path='/buttons' element={<Buttons/>}/>
  //       <Route path='/newcard' element={<Newcard/>}/>
  //       <Route path='/notass' element={<Notass/>}/>
  //       <Route path='/userlogin' element={<Userlogin/>}/>
  //       <Route path='/box' element={<Box/>}/>
  //       <Route path='/card' element={<Card/>}/> */}
  //       <Route path='/finallayout' element={<Finallayout/>}/>

      
  //     </Routes>
  //   </BrowserRouter>
  //  </div>
  // <Notass/>
  // <Userlogin/>
  // <Box/>
  // <Card/>
  // <div>
  // <Reslayout1/>
  // <Reslayout2/>
  // <Reslayout3/>
  // <Reslayout4/>
  // </div>
    // <div>
    //   {/* <Counter/> */}
    //   <Task1pg1/>
    //   <Task1pg2/>
    //   <Task1pg3/>
    // </div>
    <div>
      <Counter/>
    </div>
  );
  
}

export default App;
