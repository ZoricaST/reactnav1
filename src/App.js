import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 //import { Link, Switch, Route } from 'react-router';
  import Nav from './components/nav';
  import Page1 from './pages/page1';
  import Page2 from './pages/page2';
  import Page3 from './pages/page3';
  import Contact from './pages/Contact';
  import BasicForm from "./components/BasicForm";


  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
          <Router>
            <div>
              <Nav />
              <Routes>
              <Route 
     path='/' 
     element={ 
      <div className="app">
      <BasicForm />
    </div>
            }  />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/page1' element={<Page1 />} />
              <Route path='/page2' element={<Page2 />} />
              <Route path='/page3' element={<Page3 />} />
             
              </Routes>
            </div>
          </Router>
        </div>
      );
    }
  }