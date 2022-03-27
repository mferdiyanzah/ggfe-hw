import React from 'react'

const Track = ({albumImage, songName, albumName, artistName }) => {
  return (
    <div className='track'>
      <img src={albumImage} alt="albumImage" width={250} height={250}  className="album-image"/>
      <h3>{songName}</h3>
      <h4>{albumName}</h4>
      <h5>{artistName}</h5>
      <button type="button">
        PLAY
      </button>
    </div>
  )
}

export default Track