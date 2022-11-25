import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contextx/AuthProvider';

const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

const handleSignUp = (data) =>{
    console.log(data);
    setSignUPError('');
    createUser(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        toast('User Create Successfully')
        const userInfo ={
            displayName : data.name
        }
        updateUser(userInfo)
        .then(() => {})
        .catch(err => console.log(err));
    })
    .catch(error => {
        console.log(error)
        setSignUPError(error.message)
    });

}

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form  onSubmit={handleSubmit(handleSignUp)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span>    
                    </label>
                    <input type="text" {...register("name",{
                        require:"name is required"
                    })}
                     
                    className="input input-bordered w-full max-w-xs"  />
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                 
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span>    
                    </label>
                    <input type="email" {...register("email",{
                        required:true
                    })}
                     
                    className="input input-bordered w-full max-w-xs"  />
                     {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                 
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">password</span>    
                    </label>
                    <input type="password" {...register("password", {
                        required: "password required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                    })}
                    
                     className="input input-bordered w-full max-w-xs"  />
                     {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                              
                </div>

                <input className='btn btn-accent w-full mt-4'value="Sign Up"  type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Alrady  have an account <Link className='text-secondary' to ="/login">please login</Link> </p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;