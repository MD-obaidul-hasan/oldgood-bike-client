import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contextx/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashbordlayout = () => {
    
    const  {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const url = `https://oldgood-bike-server-md-obaidul-hasan.vercel.app/users/${user?.email}`;

    const {data } = useQuery({
        queryKey: ['data', user?.email],
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
console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                      {
                        data?.role === 'buyer' && <li><Link to="/dashboard"></Link>My Order</li>
                      } 
                      {/* {
                        isAdmin && <>
                        <li><Link to="/dashboard/allusers"></Link>All Users</li>
                        </>
                      } */}
                      {
                        data?.role === 'admin' &&  <li><Link to="/dashboard/allusers"></Link>All Users</li>
                      }
                      
                        
                        
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbordlayout;