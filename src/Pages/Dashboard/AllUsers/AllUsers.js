import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../Contextx/AuthProvider';
import toast from 'react-hot-toast';

const AllUsers = () => {
    useTitle('AllUser')
    const  {user} = useContext(AuthContext);
    const url = `http://localhost:5000/users?email=${user?.email}`;
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            
            return data;
        }
        
    })
console.log(users)
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/users?');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfully.')
                refetch();
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>All User</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users?.map((user, i) => 
                            <tr key={user._id}>
                            <th>{i}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make admin</button>}</td>
                            <td><button className='btn btn-xs btn-denger'>Delect</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;