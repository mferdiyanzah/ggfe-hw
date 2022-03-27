import React from 'react'
import Track from '../../components/Track'
import data from '../../utils/data'
import './style.css'

const Home = () => {
  return (
    <div className="info">
      {
        data.map(track => <Track albumImage={track.album.images[0].url} albumName={track.album.artists.name} songName={track.album.name} artistName={track.artists[0].name}/>)
      }
    </div>
  )
}

export default Home