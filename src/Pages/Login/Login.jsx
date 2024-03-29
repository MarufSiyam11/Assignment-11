import { useContext, useState,  } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/banner/login-image.png'
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


        const {signIn, signInWithGoogle} =useContext(AuthContext)

    const location = useLocation();
    const navigate =useNavigate();
    console.log('location in login page', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // reset error and success
          setRegisterError('');
          setSuccess('');


           signIn(email, password)
           .then(result =>{
            console.log(result.user)
            setSuccess ("User login successfully", "success");
            // navigate after login
            navigate(location?.state ? location.state : "/");
           })
           .catch(error =>{
            console.error(error);
            setRegisterError('Your email  does not match')
           })
           }

           const handleGoogleSignIn =() =>{
            signInWithGoogle()
            .then(result =>{
                console.log(result.user)
            })
            .catch(error =>{
                console.error(error)
            })
    }
    return (
        <div className="bg-sky-700">
            <h1 className="text-3xl font-bold text-center p-8">Please Login</h1>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={img} alt="" />
                        </div>

                        <div className="card flex-shrink-0 bg-sky-800  w-full max-w-sm shadow-2xl ">

                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">Login</button>
                                </div>
                            </form>
                            {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                            <p className="p-3">Do Not have an account <Link className="text-amber-600 font-bold" to="/register">Register</Link></p>
                            <p><button onClick={handleGoogleSignIn} className="btn  btn-success w-full">Google</button></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;