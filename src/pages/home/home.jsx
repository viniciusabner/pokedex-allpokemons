import { Link } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [namePokemon, setNamePokemon] = useState();
  async function updateInput(e) {
    // if (e.key === 'Enter' && canLaunch && e.currentTarget.value != '') {
    if (e.key === "Enter" && e.currentTarget.value != "") {
      setNamePokemon(e.target.value);
      await resultSearch();
    }
  }

  function resultSearch() {
    window.location.href = `/pokemon/${namePokemon}`;
  }
  console.log(namePokemon, 'namepokemon')
  return (
    <div className="container-home">
      <div className="form-home">
        <div className="input-button">
          <div>
            <input
              type="text"
              required
              placeholder="Pokemon"
              onKeyDown={updateInput}
              onChange={(event) => {
                setNamePokemon(event.target.value.toLowerCase());
              }}
            />
          </div>
          {namePokemon && (
            <div
              className="bubtton-home"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                resultSearch();
              }}>Start</div>
          )}
          <Link to="/pokedex">
            <div className="bubtton-home">All Pokemons</div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home;