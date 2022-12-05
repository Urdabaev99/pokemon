import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PokemonsCard from './PokemonsCard';
import Pagination from './Pagination';





export default function Main() {

   const [loading, setLoading] = useState(true);
   const [PokemonsData, setPokemonsData] = useState([]);
   const [url] = useState(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
   const [currentPage, setCurrentPage] = useState(1);
   const [value, setValue] = useState('');
   const [pokemonPerPage] = useState(20)



   const lastPokemonIndex = currentPage * pokemonPerPage;
   const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
   const currentPokemon = PokemonsData.slice(firstPokemonIndex, lastPokemonIndex)
   const paginate = pageNumber => setCurrentPage(pageNumber)


   const filteredPokemon = currentPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase())

   })



   console.log(PokemonsData)
   console.log(currentPokemon)



   const createPokemons = async () => {
      setLoading(true);
      const res = await axios.get(url);
      getPokemon(res.data.results);
      setLoading(false);
   }

   const getPokemon = async (res) => {
      res.map(async (item) => {
         // console.log(item.url)

         const result = await axios.get(item.url)
         // console.log(result)
         setPokemonsData(state => {

            state = [...state, result.data]
            state.sort((a, b) => a.id > b.id ? 1 : -1)

            return state;
         })

      })

   }
   useEffect(() => {
      createPokemons();
   }, [url])





   return (
      <>{
         <div className='full-main'>
            <div className='container'>
               <div className='header'>
                  <h1>Pokedex</h1>
                  <div >
                     <div className="d7">
                        <form autoComplete='off' className='header-search'>
                           <input type="search" onChange={(event) => setValue(event.target.value)} placeholder="Search..." />
                        </form>
                     </div>
                  </div>
               </div>
               <div className='main-content'>
                  <PokemonsCard loading={loading} pokemon={filteredPokemon} />
               </div>
               <Pagination
                  pokemonPerPage={pokemonPerPage}
                  totalPokemons={PokemonsData.length}
                  paginate={paginate}
               />
            </div >
         </div>
      }  </>
   )
}


