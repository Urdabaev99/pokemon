import React from 'react';
import { useParams } from 'react-router-dom';
import './style/PokemonInfo.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import About from './About';
import BaseStats from './BaseStats';
import Moves from './Moves';
import arrow from '../img/arrow.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function PokemonInfo() {
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
         <div className='pokemoninfo-header'>
            <Link to="/"> <h1> <img src={arrow} alt="" /> Pokedex</h1></Link>
         </div>
         <div className="container-card">

            {pokemon.map((item, i) =>

               <div key={i}>
                  <div className={item.types[0].type.name}>
                     <div className='pokemoninfo-title'>
                        <h1>{item.name}</h1>
                        <h1>#{item.id.toString().padStart(3, "0")}</h1>
                     </div>
                     <div className="pokemoninfo-type">
                        {item.types.map((item, index) => (<h2 key={index}>{item.type.name}</h2>))}
                     </div>
                     <div className="pokemoninfo-img">
                        <img className='pokemoninfo-images' src={item.sprites.other.dream_world.front_default} alt="" />
                     </div>
                  </div>
               </div>
            )
            }
            <Tabs>
               <TabList>
                  <Tab className="detail-tab"><h2>About</h2></Tab>
                  <Tab className="detail-tab"><h2>Base stats</h2></Tab>
                  <Tab className="detail-tab"><h2>Moves</h2></Tab>
               </TabList>

               <TabPanel>
                  <About />
               </TabPanel>
               <TabPanel>
                  <BaseStats />
               </TabPanel>
               <TabPanel>
                  <Moves />
               </TabPanel>
            </Tabs>
         </div>

      </div>
   )
}
