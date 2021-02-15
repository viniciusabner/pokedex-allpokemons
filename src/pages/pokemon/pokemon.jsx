import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/styles.scss"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  let url
  let namePokemon

  if (typeof window !== "undefined") {
    url = window.location?.href;
    namePokemon = url.split("pokemon/")[1];
  }
  console.log(namePokemon, 'namePokemon')
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setPokemon(preview.data);
      });
  }, []);

  return (
    <>
      <Link to="/" className='title'>Pokedex</Link>
      <div className="pokemon-infos">
        <div className="infos">
          <div className="map-infos">Name:  <div className="data-map"> {pokemon.species?.name}</div> </div>
          <div className="map-infos">Number: <div className="data-map-number"> {pokemon.id}</div> </div>


          <div className="map-infos">
            Abilities:
            {pokemon.abilities?.map((data) => {
            console.log(pokemon, 'pokemon')
            return (
              <div className="data-map-ability"> {data.ability?.name}</div>
            )
          })}
          </div>

          <div className="map-infos">
            Types:
            {pokemon.types?.map((data) => {
            console.log(pokemon, 'pokemon')
            return (
              <div className="data-map"> {data.type?.name}</div>
            )
          })}
          </div>
          <div>
          </div>
          <img className="img-pokemon"
            src={pokemon.sprites?.other.dream_world.front_default}
          />
        </div>
      </div>
    </>
  )
}

export default Pokemon;