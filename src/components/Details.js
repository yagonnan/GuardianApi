import React from 'react'
import { Container, Row, Breadcrumb, Col } from 'react-bootstrap'
import Moment from 'react-moment'
import DetailsController from '../lib/DetailsController'

export default class Details extends  DetailsController{
  constructor(props) {
    super(props)
    this.state = {
      content: {}
    }
  }

  render() {
    const { content } = this.state
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>Details</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
        <Row>
          <Col>
            <p>
              <span style={{ paddingRight: 10, fontWeight: 'bold' }}>Web Title:</span>
              <span>{content ? content.webTitle : ''}</span>
            </p>
            <p>
              <span style={{ paddingRight: 10, fontWeight: 'bold' }}>Web Url:</span>
              <span>{content ? <a href={content.webUrl} target='_blank'>{content.webUrl}</a> : ''}</span>
            </p>
            <p>
              <span style={{ paddingRight: 10, fontWeight: 'bold' }}>Api Url:</span>
              <span>{content ? content.apiUrl : ''}</span>
            </p>
            <p>
              <span style={{ paddingRight: 10, fontWeight: 'bold' }}>Published Date:</span>
              <span>
              {
                content 
                  ? <Moment format="YYYY-MM-DD HH:mm">{content.webPublicationDate}</Moment> 
                  : ''
              }
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
