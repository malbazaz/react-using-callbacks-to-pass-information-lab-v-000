import React, { Component } from 'react'
import ColorSelector from './ColorSelector.js'
import Cell from './Cell.js'

export default class Matrix extends Component {
  constructor(){
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  function selectNewColor(color){
    this.setState({
      this.selectedColor: color
    })
  }

  }
}
