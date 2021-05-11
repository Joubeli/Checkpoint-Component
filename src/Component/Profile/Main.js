import React from 'react'
import FullName from './FullName'
import ProfilePhoto from './ProfilePhoto'
import Adress from './Address'
import {Card, Nav, Button} from 'react-bootstrap'



const Main = () => {
    return (
        <>
            <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#second" disabled>
          My Work
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  </Card>
  <div className='main'>
  <div className='profile'>
  <ProfilePhoto />  {/* component ProfilePhoto */}
  <FullName /> {/* component FullName */}
<Adress /> {/* component Adress */}
</div>
<div className='profile'>
<Card.Body>
    <Card.Title>LinkedIn Profile</Card.Title>
    <img className='photo' src='./linked.gif' alt='photo2'/>
    <Card.Text>
      You can reach me via LinkedIn
    </Card.Text>
    <Button variant="primary">LinkedIn</Button>
  </Card.Body>
</div>
<div className='profile'>
<Card.Body>
    <Card.Title>GitHub Profile</Card.Title>
    <img className='photogit' src='./git.gif' alt='photo2'/>
    <Card.Text>
      You can reach me via GitHub
    </Card.Text>
    <Button variant="primary">GitHub</Button>
  </Card.Body>
</div>

</div>
<p className='copyright'> © 2021 Copyright</p>
        </>

    )
}

export default Main
