import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'

import SearchForm from './SearchForm'
import CardComponent from './CardComponent'
import HomeController from '../lib/HomeController'

class Home extends HomeController {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      showMessage: '',
      seeMoreBtn: 'none',
      page: 10,
      search: '',
      newest: true,
      oldest: false,
      orderBy: 1,
      spinner: 'block'
    }
  }

  // render all articles
  renderArticles(item, key) {
    return (
      <CardComponent 
        key={key}
        title={item.webTitle} 
        date={item.webPublicationDate} 
        id={item.id} />
    )
  }

  render() {
    const { articles, showMessage, seeMoreBtn, newest, oldest, spinner } = this.state

    return (
      <div>
        <Container style={{ marginTop: 20, marginBottom: 20}}>
          <Row>
            <Col>
              <SearchForm ref="search" onSearch={this.onArticleSearch.bind(this)}/>
              <Row style={{ marginBottom: 20 }}>
                <Col>
                  <Button style={{ marginRight: 10 }} variant="light" disabled={newest} onClick={this.onArticleSort.bind(this, 1)}>Newest</Button>
                  <Button variant="light" disabled={oldest} onClick={this.onArticleSort.bind(this, 0)}>Oldest</Button>
                </Col>
              </Row>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Spinner animation="border" role="status" style={{display: [spinner]}}>
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
              {
                (articles.length > 0) 
                  ? articles.map((item, key) => this.renderArticles(item, key))
                  : <p>{showMessage}</p>
              }
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="light" style={{display: [seeMoreBtn]}} onClick={this.onLoadMore.bind(this, 0)}>Load More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
