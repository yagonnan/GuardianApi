import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <Form.Group controlId="formGroupSearch">
        <Form.Control 
          type="text" 
          placeholder="Search Your Articles" 
          ref={this.inputRef} 
          onKeyPress={event => this.props.onSearch(event)} />
      </Form.Group>
    )
  }
}

export default SearchForm