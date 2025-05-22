// src/pages/Home.jsx
import React from 'react'
import { filmmakers } from '../data/filmmakers'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h1>Welkom bij het Filmmakers Portfolio</h1>
      <p>Ontdek het werk van drie inspirerende filmmakers.</p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filmmakers.map(f => (
          <div key={f.id} className="card" style={{ width: '300px' }}>
            <h3>{f.name}</h3>
            <p>{f.bio}</p>
            <Link to={`/filmmaker/${f.id}`}>Bekijk projecten →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
