import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Moment from 'react-moment'

class CardComponent extends Component {
  render() {
    return (
      <Card style={{ marginBottom: 10 }}>
        <Card.Body>
          <Card.Text>
            <Link to={{
              pathname: 'details',
              state: { id: this.props.id }
            }}>{this.props.title}</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Published On &nbsp;
          <cite title="Source Title">
            <Moment format="YYYY-MM-DD HH:mm">{this.props.date}</Moment>
          </cite>
        </Card.Footer>
      </Card>
    )
  }
}

export default CardComponent