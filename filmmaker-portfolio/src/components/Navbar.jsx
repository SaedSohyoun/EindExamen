import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#1e1e1e', borderBottom: '1px solid #333', padding: '15px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, color: '#66ccff' }}>🎬 Portfolio</h2>
                <div>
                    <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
