import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function Event_card(props) {
  return (
    <div className="card">
      <Row xs={1} md={2} className="g-4" >
        <Col>
          <Card>
            <Card.Img variant="top" src={props.img} alt={props.title}  width="200 px" height="250 px"/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
              <Link as={Link} to="/UpcomingEvents">
              <Button className="float-right" variant="primary" >Details</Button>
              </Link>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{props.date}</small>
        </Card.Footer>
          </Card>
        </Col>
       
    </Row>
    
        
    </div>
  )
}

export default Event_card
