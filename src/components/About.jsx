import React from 'react';
import './style/About.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function About() {

   const { id } = useParams();
   const [fetching, setFetching] = useState(true);
   const [pokemon, setPokemon] = useState([]);
   const [pokemonSpacies, setPokemonSpacies] = useState([]);


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

         axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then(res => {
               setPokemonSpacies([...pokemonSpacies, res.data])
               console.log(res.data)
               return pokemonSpacies;
            })
            .finally(() => setFetching)
      }
   }, [fetching])

   return (
      <>
         <div className='about'>
            <div className='mini-container'>
               {
                  pokemonSpacies.map((item, j) =>
                     <div key={j}>
                        <div className='about-info'><p>Species:</p> <p>{item.genera[7].genus}</p></div>
                     </div>
                  )
               }
               {
                  pokemon.map((item, j) =>
                     <div key={j}>
                        <div className='about-info'><p>Height:</p><p>{item.height}0cm</p></div>
                        <div className='about-info'><p>Weight:</p><p>{item.weight}kg</p></div>
                        {item.abilities.map((a, j) => <div className='about-info' key={j}><p>Ability:</p> <p>{a.ability.name}</p></div>)}
                     </div>
                  )
               }
            </div>
            <div className='about-subtitle'>
               <h2>Breeding</h2>
            </div>
            {
               pokemonSpacies.map((item, j) =>
                  <div key={j}>
                     {item.egg_groups.map((a, d) => <div className='about-info' key={d}><p>Egg Group:</p> <p>{a.name}</p></div>)}
                  </div>
               )
            }
         </div>
      </>
   )
}
