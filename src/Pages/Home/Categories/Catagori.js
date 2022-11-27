import React from 'react';
import { Link } from 'react-router-dom';
import PrimarryButton from '../../../Components/PrimarryButton/PrimarryButton';
import Modal from '../../Bikecatagory/Model/Modal';


const Catagori = ({catagori}) => {
    const { name,id, description, img} = catagori;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    {/* <button className="btn btn-primary">See More</button> */}
                    
                    <Link to={`/catagory/${id}`}><PrimarryButton>See  Details</PrimarryButton></Link>
                </div>
                
            </div>
        </div>
        
    );
};

export default Catagori;