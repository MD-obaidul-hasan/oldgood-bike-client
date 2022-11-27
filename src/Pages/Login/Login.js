import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contextx/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
    useTitle('Login')

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUseEmail] = useState(' ');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true });

    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        // console.log(errors);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUseEmail(data.email);
               
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                require: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                require: "password is require",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                // pattern: {value:/(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])/, message:"password must mbe strong"}
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <input />
                        <label className="label"><span className="label-text">Forget password</span>
                        </label>
                    </div>
                    
                    {/* <input className='btn btn-accent w-full mt-4' type="radio" name="user" />
                    <input className='btn btn-accent w-full mt-4' type="radio" name="user" /> */}
                    <input className='btn btn-accent w-full mt-4' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}why not</p>}
                    </div>
                </form>
                <p>New to OldGood Bike <Link className='text-secondary' to="/signup">Create new account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;