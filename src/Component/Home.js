import React, { Component } from 'react'
import Navbar from './HomePage/Navbar'
import Storybar from './HomePage/Storybar'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Storybar/>
      </div>
    )
  }
}

export default Home