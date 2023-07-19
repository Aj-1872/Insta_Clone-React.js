import React, { Component, Fragment } from 'react'




export class Sing_in extends Component {
    constructor(props) {
        super(props)

        this.userRef = React.createRef();
        this.passRef = React.createRef();
    }

    userNameSingIn = () => {

    }
    passSingIn = () => {

    }





    render() {
        return (
            <div>

                <div className="flex justify-center items-center h-screen">
                    <div className="w-96">
                        <h1 className="text-4xl font-bold mb-8 font-billabong ">Instagram</h1>
                        <form>
                            <div className="mb-4">
                                <input ref={this.userRef}
                                    onClick={() => { this.userNameSingIn() }}

                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <input ref={this.passRef}
                                    onClick={() => { this.passSingIn() }}
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                className="w-full py-2 bg-blue-600 text-white rounded-md"
                            >
                                log in
                            </button>
                            <div className="mt-4 text-center appearance-none list-none">

                                <a href="/" className="text-black-500 hover:underline ">
                                    Forgot your login details? <span className='font-medium'>Get help singin in.</span>
                                </a>
                            </div>
                            <div class="flex justify-center mt-28">
                                <div class="w-2/3 flex items-center">
                                    <div class="flex-grow border-b-2 border-gray-300"></div>
                                    <div class="mx-4 text-gray-500">or</div>
                                    <div class="flex-grow border-b-2 border-gray-300"></div>
                                </div>
                            </div>

                            <div className="mt-0 text-center appearance-none list-none">

                                <a href="#" className="fa fa-facebook text-white bg-black w-6 h-4.5 m-1 text-xl rounded "></a>
                                <a href="/" className="text-black-500 hover:underline ">
                                    <span className='font-medium'>Log in with Facebook</span>
                                </a>
                            </div>
                            <div className="mt-10 text-center appearance-none list-none">
                            <hr/>
                            <a href="/" className="text-black-500 hover:underline ">
                                Don't have an account?<span className='font-medium'>Sing Up.</span>
                            </a>
                        </div>

                        </form>
                    </div>
                </div>



            </div>
        )
    }
}

export default Sing_in