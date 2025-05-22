import React from 'react'
import { useParams } from 'react-router-dom'
import { filmmakers } from '../data/filmmakers'

const FilmmakerDetail = () => {
  const { id } = useParams()
  const filmmaker = filmmakers.find(f => f.id === id)

  if (!filmmaker) return <div className="container">Filmmaker niet gevonden.</div>

  return (
    <div className="container">
      <h1>{filmmaker.name}</h1>
      <p>{filmmaker.bio}</p>
      <h2>Projecten</h2>
      {filmmaker.projects.map((p, index) => (
        <div key={index} style={{
          backgroundColor: '#1a1a1a',
          marginBottom: '20px',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <h3>{p.title}</h3>
          <img src={p.poster} alt={p.title} style={{ width: '100%', maxWidth: '300px' }} />
          <p>{p.description}</p>
          <a href={p.trailer} target="_blank" rel="noreferrer">Bekijk trailer →</a>
        </div>
      ))}
    </div>
  )
}

export default FilmmakerDetail
