import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/styles.scss";

const Pokedex = () => {

  const [pokedex, setPokedex] = useState([]);



  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
        headers: {},
      })
      .then((preview) => {
        setPokedex(preview.data.results);
      });
  }, []);

  return (
    <>
      <Link to="/" className='title'>Pokedex</Link>
      <table className="table-pokedex">
        <thead>
        </thead>
        <tbody className="poke-table">
          {pokedex.map((pokemon) => {
            return (
              <a
                className="pokemon-name"
                href={`/pokemon/${pokemon.name}`}>
                <tr>{pokemon.name}</tr>
              </a>
            )
          })}
        </tbody>
      </table>
    </>
  )

}

export default Pokedex;