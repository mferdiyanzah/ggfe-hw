import React from 'react'
import data from '../../utils/data'
import './style.css'

const Home = () => {
  console.log(data.album.artists)
  return (
    <div class="info">
        <img src={data.album.images[0].url} alt="albumImage" className="album-image"/>
        <h3>{data.album.name}</h3>
        <h4>{data.album.artists.name}</h4>
        <h5>{data.name}</h5>
        <button type="button">
          PLAY
        </button>
      </div>
  )
}

export default Home