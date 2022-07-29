import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

// import Hero from '../Hero/Hero'
// import SWE from '../../Assets/Images/SWE-Header.jpeg'

const Header = () => {
  return (
    <div>
      {/* <NavbarComponent /> */}

      <div className='header-container'>
        <div className='header-img' alt='desktop imgae'>
          {/* <div><Hero/></div> */}
        </div>
        <div className='intro-area-text'>
          <p>Hello, I'm Meshia Reed.</p>
          <p>I develop, and shoot photography.</p>
        </div>
        <div className='grid-2-col'>
          <Link to="/software-development" className='left'>
            <div>
              <h2>Software Development</h2>
            </div>
          </Link>
          <Link to="/photography" className='right'>
            <div>
              <h2>Photography</h2>
            </div>
          </Link>
        </div>
        <div className='header-intro'>
          {/* <p>Hello, I'm Meshia Reed.</p>
          <p>I develop, and shoot photography.</p> */}
          <p>I am a creative mind. I have five years of experiene as a Software Engineer utilizing MERN stack technologies. I am passionate about enhancing the user experince one line at a time. When I am not coding I am looking to create beautiful works of art through a lens. Night photography, product, interior design speak volumes for me.</p>
        </div>
      </div>
    </div>
  )
}

export default Header