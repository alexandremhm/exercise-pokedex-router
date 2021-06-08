import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';

function App() {
  return (     
    <div className='App'>
       <BrowserRouter>
    <div>
    <Link to="/">Pokedex</Link>
    <Link to="/about">About</Link>
    </div>
      <h1> Pokedex </h1>
      <Switch>
        <Route exact path="/" render={ (props) => <Pokedex {...props} pokemons={pokemons} />} />
        <Route path="/details/:id" render={ (props) => <PokemonDetails {...props} pokemons={pokemons} />} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
       
  );
}

export default App;