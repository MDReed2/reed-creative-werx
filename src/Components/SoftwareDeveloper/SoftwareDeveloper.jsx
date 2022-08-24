import React from 'react'
import './softwareDev.scss'
import CV from '../../Assets/MeshiaReed_Resume.pdf'
import ME from '../../Assets/Images/comingSoon.png'
import TRUEFOODIE from '../../Assets/Images/true-foodie.png'
import JOTIT from '../../Assets/Images/jotit.png'
import TICTACTOE from '../../Assets/Images/tictactoe.png'
import { FaAward, FaUsers, FaRegFolder } from 'react-icons/fa'


import Card from 'react-bootstrap/Card'

const aboutData = [
  {
    id: 1,
    icon: <FaAward />,
    title: 'Experience',
    description: 5,
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: 'Clients',
    description: 11,
  },
  {
    id: 3,
    icon: <FaRegFolder/>,
    title: 'Projects',
    description: 15,
  },
]

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
          <div className='section_header_text'>
            <h5>Get to Know</h5>
            <h2>About</h2>
          </div>
          <div className='about_inner'>
            <Card className='left-img'>
              <Card.Img src={ME} />
            </Card>
            <div className='about_info_section'>
              <div>
                {aboutData.map(({id, icon, title, description}) => {
                  return (
                    <Card key={id}>
                      <Card.Img />
                      <Card.Body>
                        <Card.Text>
                          {icon}
                          <h4>{title}</h4>
                          <p>{description}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  )
                })}
              </div>
              <div>
                <p>A devoted Software Engineer, who values taking initiative, being respectful, positively impacting organizations, fostering genuine connections with stakeholders, and among much more.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='experience'>
          <div></div>
        </div>
        <div className='projects'>
          <div className='section_header_text'>
            <h5>My Work</h5>
            <h2>Projects</h2>
          </div>
          <div className='card-section'>
            {data.map(({id, image, title, description, github, demo}) => {
              return (
                <Card key={id}>
                  <Card.Img src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className='prjt-card-btns'>
                      <a href={github}>Github</a>
                      <a href={demo}>Demo</a>
                    </div>
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