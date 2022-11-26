import { async } from '@firebase/util';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http//localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1>hi</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favor</th>
                            <th>Favorate color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map((user, i) => 
                            <tr key={user._id}>
                            <th>{i}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;