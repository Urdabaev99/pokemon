import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style/Moves.css';
export default function Moves() {

   const { id } = useParams();
   const [fetching, setFetching] = useState(true);
   const [pokemon, setPokemon] = useState([]);

   useEffect(() => {
      if (fetching) {
         console.log(fetching)
         axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(response => {
               setPokemon([...pokemon, response.data])
               console.log(response.data)
               return pokemon;
            })
            .finally(() => setFetching(false))
      }
   }, [fetching])

   return (
      <div>
         {
            pokemon.map((item, i) =>
               <div className='movies' id="element" key={i}>
                  {item.moves.map((a, k) => <div className='movie' key={k}>{a.move.name}</div>)}
               </div>
            )
         }
      </div>
   )
}
