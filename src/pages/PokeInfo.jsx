import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css'

const PokeInfo = () => {

  const [pokemon, getPokemon] = useFetch()

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    getPokemon(url)
  }, [])
  
console.log(pokemon?.types[0].type.name);
  return (
    <section className='pokeinfo'>
      <figure className={`pokeinfo__img ${pokemon?.types[0].type.name}`}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
      </figure>
      <div className='pokeinfo__namecontainer'>
        <span className={`pokeinfo__name `}>{pokemon?.name}</span>
        <div className='pokeinfo__info'>
          <span>Weight: {pokemon?.weight} lb</span>
          <span>Height: {pokemon?.height} '</span>
        </div>
        <div>
            <article className={'pokeinfo__typecontainer'}>Types: 
              <span className={`pokeinfo__types ${pokemon?.types[0].type.name}`}>
                {pokemon?.types[0].type.name}
              </span>
              <span className={`pokeinfo__types ${pokemon?.types[1].type.name}`}>
                {pokemon?.types[1].type.name}
              </span>
            </article>
        </div>
      </div>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li className='pokeinfo__stats-item' key={stat.stat.url}>
              <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
              <div className='outbar'>
                <div className='inbar' style={{width: `${stat.base_stat/2.5}%`,}}></div>
              </div>
            </li>
          ))
        }
      </ul>
      <div className='movements'>Movements:
        <span className='PokeInfo__movetitle'> 
          {
            pokemon?.moves.map(move => (
              <div className='pokeInfo__moves'>
                <span className='moves'>{move.move.name}</span>
              </div>
            )) 
          }
        </span>
      </div>
      <br /><br /><br /><br /><br /><b><br /><br /><br /><br /></b>
    </section>
  )
}

export default PokeInfo