// import {useQuery} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contextx/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Myoderbike = () => {
    useTitle('Dashboard')
    const  {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Oder</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                                        <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>price</th>
                            <th>item</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map((booking, i) =><tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.price}</td>
                                <td>{booking.item}</td>
                                <td>{booking.email}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myoderbike;