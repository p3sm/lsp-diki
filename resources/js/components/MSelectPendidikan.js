import React, { Component } from 'react'
import { Form, Button, Row, Col, Card, Modal, Table } from 'react-bootstrap';
import axios from 'axios'
import Select from 'react-select'

export default class MSelectProvinsi extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get(`/api/pendidikan`).then(response => {
      console.log(response)

      let data = []

      response.data.map((d) => {
        data.push({
          value: d.id,
          label: d.deskripsi
        })
      })

      this.setState({
        data: data,
        loading: false
      })
    }).catch(err => {
      console.log(err.response)

      this.setState({
        loading: false,
      })
    })
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>Jenjang</Form.Label>
        <Select placeholder="-- pilih Jenjang --" value={this.state.data.filter(obj => {return obj.value == this.props.value})[0]} options={this.state.data} onChange={(val) => this.props.onChange(val)}/>
      </Form.Group>
    )
  }
}
