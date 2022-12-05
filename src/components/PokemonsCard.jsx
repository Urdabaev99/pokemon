import React from 'react'
import { Link } from 'react-router-dom';


export default function PokemonsCard({ loading, pokemon, }) {

   return (
      <>
         {
            loading ? <h1>Loading...</h1> : pokemon.map((item, i) => {
               const type = item.types;
               if (type.length <= 1) {
                  return (<div >

                     <Link to={`/Pokemoninfo/${item.id}`} >
                        <div className={item.types[0].type.name} >
                           <div className='card'>
                              <div className='card-left'>
                                 <h1>{item.name}</h1>
                                 <h2>{type[0].type.name}</h2>
                              </div>
                              <div className='card-right'>
                                 <div className='card-id'>#{item.id.toString().padStart(3, "0")}</div>
                                 <img className='card-img' src={item.sprites.other.dream_world.front_default} alt="" />
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>)
               } else {
                  return (
                     <>
                        <Link to={`/Pokemoninfo/${item.id}`}>
                           <div className={item.types[0].type.name}>
                              <div className='card'>
                                 <div className='card-left'>
                                    <h1>{item.name}</h1>
                                    <h2>{type[0].type.name}</h2>
                                    <h2>{item.types[1].type.name}</h2>
                                 </div>
                                 <div className='card-right'>
                                    <div className='card-id'>#{item.id.toString().padStart(3, "0")}</div>
                                    <img className='card-img' src={item.sprites.other.dream_world.front_default} alt="" />
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </>
                  )
               }

            })
         }
      </>
   )
}
