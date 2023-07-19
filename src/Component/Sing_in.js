import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Rest of your code...


export class Sing_in extends Component {
  constructor(props) {
    super(props);

    this.userRef = React.createRef();
    this.passRef = React.createRef();
  }



  render() {
    return (
      <div className="flex justify-center items-center " id='main' >
        <div className="w-90">
          <form >
            <h1 className="text-4xl font-bold mb-8 font-billabong text-center mt-7">Instagram</h1>

            <div className="flex items-center justify-center py-2 bg-blue-500 text-white rounded-md mt-14">
              <a href="#" className="text-blue-500 bg-white w-5 h-5 m-1 text-xl fa fa-facebook flex justify-end"></a>
              <a href="/" className="text-white hover:underline">
                <span className="font-medium">Log in with Facebook</span>
              </a>
            </div>

            <div className="flex justify-center my-3">
              <div className="w-2/3 flex items-center">
                <div className="flex-grow border-b-2 border-gray-300"></div>
                <div className="mx-4 text-gray-500">OR</div>
                <div className="flex-grow border-b-2 border-gray-300"></div>
              </div>
            </div>

            <div className="mb-2">
              <input
                ref={this.userRef}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <input
                ref={this.passRef}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="mt-2 mb-6 text-center appearance-none list-none">
              <a href="/" className="text-black-500 hover:underline">
                Forgot your login details? <span className="font-medium">Get help signing in.</span>
              </a>
            </div>

            <div className="flex items-center justify-center py-2 bg-blue-500 text-white rounded-md ">
            <Link to="/Home" className=" text-center w-full py-2 bg-blue-500 text-white rounded-md">Log in</Link>
          </div>
          

            <div className="mt-8 text-center appearance-none list-none">
              <a href="/" className="text-black-500 hover:underline">
                Don't have an account?<span className="font-medium text-blue-600"> Sign up.</span>
              </a>
            </div>

            
            <div className='margin'>
            <div className='text-center '><p className='text-sm text-gray-500'>from</p></div>
            <div className="flex items-center justify-center ">
            <img src={require('./image/6033716.png')} alt="" className="h-5 w-5" />
            <span className="text-blue-600 mx-1 font-medium">Meta</span>
            </div>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default Sing_in;
