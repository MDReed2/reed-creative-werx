import React from 'react'
import './softwareDev.scss'
import CV from '../../Assets/MeshiaReed_Resume.pdf'

const SoftwareDeveloper = () => {
  return (
    <div className='software-dev'>
      <section className='header'>
        <h1>Meshia Reed</h1>
        <p className='dev-header-text'>Software Engineer</p>
        <div>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn'>Let's Talk</a>
        </div>
      </section>
      <section className='main'>
        <div className='about'></div>
        <div className='experience'></div>
        <div className='projects'></div>
        <div className='contact'></div>
      </section>
    </div>
  )
}

export default SoftwareDeveloper