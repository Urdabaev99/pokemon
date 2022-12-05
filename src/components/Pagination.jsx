import React from 'react';
import './style/Pagination.css';

export default function Pagination({ pokemonPerPage, totalPokemons, paginate }) {
   const pageNumbers = []


   for (let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <div>

         <div className="pagination">
            {
               pageNumbers.map(number => (
                  <button className='pagination-bnt' onClick={() => paginate(number)}>
                     {number}
                  </button>
               ))
            }
         </div>
      </div>
   )
}
