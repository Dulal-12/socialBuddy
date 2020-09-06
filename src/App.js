import React from 'react';
import './App.css';
import Error from './components/ErrorProblem/Error'
import Header from './components/Header/Header';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Head from './components/Head/Head';
import PostDetail from './components/postDetail/PostDetail';


function App() {
  return (
    <div>
      <Router>
           <Header></Header>
           <Switch>
               <Route exact path='/'>
                     <Head></Head>
               </Route>
             <Route path="/home">
                     <Head></Head>
             </Route>
             <Route path="/user/:id">
               <PostDetail></PostDetail>
             </Route>
             <Route  path="*">
                    <Error></Error>
             </Route>
           </Switch>
      </Router>
      
    </div>
  );
}

export default App;
