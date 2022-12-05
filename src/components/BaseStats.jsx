import React from 'react';
import './style/BaseStats.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function BaseStats() {

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
      <div className='BaseStats'>
         {
            pokemon.map((item, k) =>
               <div key={k}>
                  <div className='basestats-info'>
                     <p> HP</p>
                     <p>{item.stats[0].base_stat}</p>
                     <progress className='progress' max="100" value={item.stats[0].base_stat} />


                  </div>
                  <div className='basestats-info'>
                     <p>Attack</p>
                     <p>{item.stats[1].base_stat}</p>
                     <progress className='progress1' max="100" value={item.stats[1].base_stat} />
                  </div>

                  <div className='basestats-info'>
                     <p>Defense</p>
                     <p>{item.stats[2].base_stat}</p>
                     <progress className='progress' max="100" value={item.stats[2].base_stat} />
                  </div>

                  <div className='basestats-info'>
                     <p>Sp. Atk</p>
                     <p>{item.stats[3].base_stat}</p>
                     <progress className='progress1' max="100" value={item.stats[3].base_stat} />
                  </div>

                  <div className='basestats-info'>
                     <p>Sp. Def</p>
                     <p>{item.stats[4].base_stat}</p>
                     <progress className='progress1' max="100" value={item.stats[4].base_stat} />
                  </div>

                  <div className='basestats-info'>
                     <p>Speed</p>
                     <p>{item.stats[5].base_stat}</p>
                     <progress className='progress' max="100" value={item.stats[5].base_stat} />
                  </div>
                  <div className='basestats-info'>
                     <p>Total</p>
                     <p>{item.stats[5].base_stat + item.stats[4].base_stat + item.stats[3].base_stat + item.stats[2].base_stat + item.stats[1].base_stat + item.stats[0].base_stat}</p>
                     <progress className='progress' max="500" value={item.stats[5].base_stat + item.stats[4].base_stat + item.stats[3].base_stat + item.stats[2].base_stat + item.stats[1].base_stat + item.stats[0].base_stat} />
                  </div>
               </div>
            )
         }
      </div>
   )
}
