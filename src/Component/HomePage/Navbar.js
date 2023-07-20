import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>

      <div className="flex justify-center items-center" id="main">
        <div className="w-80 ">
          {/* Navbar */}
          <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold  font-billabong text-center">Instagram</h1>

          <div className='flex  '>
          <img src={require('../image/1077035.png')} alt="" className="h-5 w-5 mx-4" />
          <img src={require('../image/1617469.png')} alt="" className="h-5 w-5" />
          </div>
          </nav>
        </div>
      </div>

      
    </div>
    )
  }
}

export default Navbar