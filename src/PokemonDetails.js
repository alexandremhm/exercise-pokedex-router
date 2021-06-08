import React from 'react';
import Data from './data';


class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params
    const { pokemons } = this.props
    const selectedPokemon = pokemons.find((pokemon) => pokemon.id === Number(id))
    const { name, type, averageWeight:{ value, measurementUnit}, moreInfo, foundAt, image } = selectedPokemon;
    return ( 
      <div>
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>{type}</p>
        <p>{value}{measurementUnit}</p>
        <a href={moreInfo}>More info</a>
        {foundAt.map((info) => <div><p>{info.location}</p><img src={info.map} alt={selectedPokemon.name} /></div>)}
      </div> 
    )
  }
}

export default PokemonDetails;