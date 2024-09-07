import React from 'react'
import './Service.css'
import training from './training.jpg'
import groupFitness from './groupFitness.jpeg'
import nutritionImg from './nutritionImg.jpg'
import zumbaImg from './zumbaImg.jpg'
// import Cards from './Cards'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Service() {
  return (
    <div className='serviceAll'>
      <h1 className='serviceHead'>Our Services</h1>
      <div className="serviceCards">
      <Row>
        <Col sm={3}>
        <Card style={{ width: '18rem', height:'25rem' }}>
          <Card.Img className='serviceCardImg' variant="top" src={training} />
          <Card.Body>
            <Card.Title className='serviceTitle'>Personal Training Programs</Card.Title>
            <Card.Text className='serviceText'>
            Get customized workout plans that fit your goals and schedule. Train with guidance every step of the way.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>


        <Col sm={3}>
        <Card style={{ width: '18rem', height:'25rem' }}>
          <Card.Img className='serviceCardImg' variant="top" src={groupFitness} />
          <Card.Body>
            <Card.Title className='serviceTitle'>Group Fitness Classes</Card.Title>
            <Card.Text className='serviceText'>
            Join our group classes for a fun and motivating workout. Stay active with others in a supportive environment.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>


        <Col sm={3}>
        <Card style={{ width: '18rem', height:'25rem' }}>
          <Card.Img className='serviceCardImg' variant="top" src={nutritionImg} />
          <Card.Body>
            <Card.Title className='serviceTitle'>Nutrition Advice</Card.Title>
            <Card.Text className='serviceText'>
            Receive tailored nutrition advice to complement your workouts. Support your fitness journey with a healthy diet.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>


        <Col sm={3}>
        <Card style={{ width: '18rem', height:'25rem' }}>
          <Card.Img className='serviceCardImg' variant="top" src={zumbaImg} />
          <Card.Body>
            <Card.Title className='serviceTitle'>Zumba Classes</Card.Title>
            <Card.Text className='serviceText'>
            Join our fun and lively Zumba classes. Dance your way to a fitter you with easy-to-follow routines. Perfect for all skill levels, these sessions are designed to make fitness enjoyable.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </div>
      
    </div>
  )
}
