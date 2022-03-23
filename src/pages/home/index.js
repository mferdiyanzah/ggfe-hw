import React from 'react'
import Track from '../../components/Track'
import data from '../../utils/data'
import './style.css'

const Home = () => {
  return (
    <div class="info">
      <Track albumImage={data.album.images[0].url} albumName={data.album.artists.name} songName={data.album.name} artistName={data.name}/>
    </div>
  )
}

export default Home