import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navigation = [
        {name:"About", linkTo:"/about"},
        {name:"Services", linkTo:"/services"},
        {name:"Pricing", linkTo:"/pricing"},
        {name:"Portfolio", linkTo:"/portfolio"},
        {name:"Careers", linkTo:"/careers"},
        {name:"Contact", linkTo:"/contact"},
    ]

  return (
    <nav className=' bg-secondary text-dark'>
        <div className='container d-flex align-items-center justify-content-between py-3'>
            <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                </span>
                <div>
                    <Link className='text-dark me-4' to={'/'}>Order Now</Link>
                    <Link className='text-dark me-4' to={'/image'}>Image Edit</Link>
                    <Link className='text-dark' to={'/listing'}>See Orders</Link>
                </div>
        </div>
    </nav>
  )
}

export default Navbar