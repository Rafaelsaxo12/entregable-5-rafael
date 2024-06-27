import React from 'react'
import './pokedex/styles/paginate.css'

const Paginate = ({page, total, setPagina}) => {

    const handleLess = () => {
    if (page > 1) {    
        setPagina(page - 1)
        }
    }

    const handlePlus = () => {
    if (page < total) {   
        setPagina(page + 1)
        }
    }

  return (
    <div className='paginate'>
        <button className='paginate__prev' onClick={handleLess}>Prev</button>
        <span className='paginate__numbers'>{page} / {total}</span>
        <button className='paginate__plus' onClick={handlePlus}>Next</button>
    </div>
  )
}

export default Paginate