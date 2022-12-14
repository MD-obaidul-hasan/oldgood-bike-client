import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contextx/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    useTitle('SignUp')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState(' ')
    const [token] = useToken(createdUserEmail);
    const [role, setRole]  = useState('buyer');
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        // console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Create Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                        saveUser(data.name, data.email);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

    }

    const saveUser = (name, email) => {
        const user = { name, email, role };
        fetch('https://oldgood-bike-server-md-obaidul-hasan.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                // console.log('save user',data);

            })
    }

    // const getuserToken = email =>{
    //     fetch(`https://oldgood-bike-server-md-obaidul-hasan.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken);
    //             navigate('/');
    //         }
    //     })
    // }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            require: "name is required"
                        })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true
                        })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "password required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                        })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                    <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Buyer</span>
                        <input  type="radio" name="user" className="btn btn-accent w-full mt-1 checked:bg-red-500" checked={role === 'buyer'} 
                        onChange={() => setRole('buyer')}/>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Seller</span>
                        <input type="radio" name="user" className="btn btn-accent w-full mt-1 checked:bg-blue-600" checked={role === 'seller'} 
                        onChange={() => setRole('seller')} />
                    </label>
                </div>

                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Alrady  have an account <Link className='text-secondary' to="/login">please login</Link> </p>
                <div className="divider">OR</div>
                
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;