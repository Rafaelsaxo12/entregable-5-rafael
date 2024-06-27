import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/pokedex/PokeCard';
import useFetch from '../hooks/useFetch';
import PokeSelect from '../components/pokedex/PokeSelect';
import './styles/pokedex.css'
import Paginate from '../components/Paginate';

const Pokedex = () => {

  const trainer = useSelector((store) => store.trainer);
  const [inputValue, setInputValue] = useState('');
  const [page, setPagina] = useState(1)
  const [typeFilter, setTypeFilter] = useState('');

  const [pokemons, getPokemons, getType] = useFetch();

  
  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter)
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1310';
   getPokemons(url);
    }   
  }, [typeFilter])

  const textInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.trim().toLowerCase())
  }
  
  const cbFilter =(poke) => {
    return poke.name.includes(inputValue)
  }

  const quantity = 10;
  const total = Math.ceil(pokemons?.results.length / quantity);

  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    return pokemons?.results.slice(start, end)
  }
  
  console.log(pokemons?.results);

  return (
    <div className='pokedex'>
      <h3 className='pokedex__wave'><span>Welcome {trainer}, </span>here you could find your favorite pokemon, let's go!</h3>
      <div className='pokedex__filters'>
          <form className='pokedex__form' onSubmit={handleSubmit}>
            <input ref={textInput} type="text" />
            <button>Search</button>
          </form>
          <Paginate
            page={page} 
            setPagina={setPagina}
            total={total}
          />
          <PokeSelect
          setTypeFilter={setTypeFilter}
          />
      </div>
      <div className='pokedex__container'>
        {
          pagination()?.filter(cbFilter).map((poke) => (<PokeCard
            key={poke.url}
            url={poke.url}
          />))
        }
      </div>
    </div>
  )
}

export default Pokedex