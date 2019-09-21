import { Component } from 'react'
import axios from 'axios'
import config from '../lib/config'

export default class HomeController extends Component {
  async componentDidMount() {
    // fetch news
    const articles = await this.onGetAllArticles()
    this.setState({articles, spinner: 'none'})
    articles.length > 0 ? 
      this.setState({seeMoreBtn: 'block'}) : 
      this.setState({showMessage: config.searchNotFound})
  }

  // for index get data from service
  async onGetAllArticles (params = {}) {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_SERVER_PORT}`,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET"
      },
      params,
      withCredentials: false
    })

    return (response.data.response && response.data.response.results.length > 0) ? response.data.response.results : []
  }

  async onArticleSearch(event) {
    if (event.key === 'Enter') {
      const search = event.target.value
      const articles = await this.onGetAllArticles({
        search,
        orderBy: (this.state.orderBy === 1) ? config.newest : config.oldest
      })
      this.setState({ articles, search})
      articles.length > 0 ? 
        this.setState({seeMoreBtn: 'block'}) : 
        this.setState({showMessage: config.searchNotFound, seeMoreBtn: 'none'})
    }
  }

  async onArticleSort(sort) {
    if (this.state.orderBy !== sort) {
      const orderBy = (sort === 1) ? config.newest : config.oldest

      const params = { orderBy }
      if (this.state.search) params.search = this.state.search

      const articles = await this.onGetAllArticles(params)
      this.setState({
        articles,
        orderBy: sort,
        newest: (sort === 1) ? true : false,
        oldest: (sort === 0) ? true : false
      })
    }
  }

  async onLoadMore() {
    // guardian maximum pagination is 1900
    if (this.state.page === 1880) {
      this.setState({ seeMoreBtn: 'none' })
    } 
    // go to next page
    const page = this.state.page + config.page
    if (page <= 1900) {
      // prepare param for guardian api
      const params = { 
        page,
        orderBy: (this.state.orderBy === 1) ? config.newest : config.oldest
      }
      if (this.state.search) params.search = this.state.search

      const articleData = await this.onGetAllArticles(params)
      // merge with the existing data
      const allData = this.state.articles.concat(articleData)
      this.setState({ articles: allData, page})
    }
  }
}
