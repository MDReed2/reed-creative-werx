import React from 'react'
import './softwareDev.scss'
import CV from '../../Assets/MeshiaReed_Resume.pdf'
import TRUEFOODIE from '../../Assets/Images/true-foodie.png'
import JOTIT from '../../Assets/Images/jotit.png'
import TICTACTOE from '../../Assets/Images/tictactoe.png'

import Card from 'react-bootstrap/Card'

const data = [
  {
    id: 1,
    image: TRUEFOODIE,
    title: 'True Foodie',
    description: 'HTML ◦ CSS ◦ JavaScript ◦ Express',
    github: 'https://github.com/MDReed2/true-foodie-client',
    demo: 'https://mdreed2.github.io/true-foodie-client/'
  },
  {
    id: 2,
    image: JOTIT,
    title: 'Jotit',
    description: 'HTML ◦ CSS ◦ JavaScript ◦ Express ◦ React',
    github: 'https://github.com/MDReed2/project-frontend',
    demo: 'https://house-slytherin.github.io/project-frontend/'
  },
  {
    id: 3,
    image: TICTACTOE,
    title: 'Tic Tac Toe',
    description: 'HTML ◦ CSS ◦ JavaScript',
    github: 'https://github.com/MDReed2/TicTacToe-Game',
    demo: 'https://mdreed2.github.io/TicTacToe-Game/'
  }
]

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
        <div className='about'>
          
        </div>
        <div className='experience'></div>
        <div className='projects'>
          <div className='card-section'>
            {data.map(({id, image, title, description, github, demo}) => {
              return (
                <Card key={id}>
                  <Card.Img src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
        <div className='contact'></div>
      </section>
    </div>
  )
}

export default SoftwareDeveloper