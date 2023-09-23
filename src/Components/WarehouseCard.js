import React from 'react';
import { Link } from 'react-router-dom';
function WarehouseCard({ warehouse, buttonProps, handleButton}) {
    return (
        <article className="bg-white shadow-lg rounded-lg overflow-hidden w-72 md:w-96 lg:w-1/4 p-4 m-2">
            <h2 className="text-xl font-semibold">{warehouse.name}</h2>
            <div className="text-gray-600 text-sm mt-2">
                <p>
                    <strong>City:</strong> {warehouse.city}
                </p>
                <p>
                    <strong>Cluster:</strong> {warehouse.cluster}
                </p>
                <p>
                    <strong>Code:</strong> {warehouse.code}
                </p>
                <p>
                    <strong>Type:</strong> {warehouse.type}
                </p>
                <p>
                    <strong>Space Available:</strong> {warehouse.space_available}
                </p>
                <p>
                    <strong>Is Live:</strong> {warehouse.is_live ? 'Yes' : 'No'}
                </p>
                <p>
                    <strong>Is Registered:</strong> {warehouse.is_registered ? 'Yes' : 'No'}
                </p>
                <button className='bg-red-400 font-bold p-2 rounded-sm w-full mt-2' onClick = {handleButton}>
                        <Link to={`/warehouseEdit/${warehouse.id}`}> { buttonProps } </Link>
                </button>
            </div>
        </article>
    );
}

export default WarehouseCard;
