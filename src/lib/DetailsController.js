import { Component } from 'react'
import axios from 'axios'
import config from './config'

export default class DetailsController extends Component {
  async componentDidMount() {
    // fetch news
    const { id } = this.props.location.state
    const content = await this.onGetrticle({id})
    this.setState({content})
  }

  // for index get data from service
  async onGetrticle (params) {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_SERVER_PORT}/single`,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET"
      },
      params,
      withCredentials: false
    })
    if (response.status !== config.statusOk) {
      return {}
    }

    return response.data.response.content
  }
}
