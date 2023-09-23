import React, { useEffect, useState, useMemo } from 'react';
import WarehouseCard from './WarehouseCard';
import SearchFuntionality from './SearchFuntionality';

function WarehouseList({ warehouseDetails }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState(''); 
    const [selectedCluster, setSelectedCluster] = useState('');
    const [selectedSquareFit, setSelectedSquareFit] = useState(0)
    const [filterWarehouse, setFilterWarehouse] = useState([]);
    // Use useMemo to compute the filtered list only when warehouseDetails or searchTerm changes
    const filteredWarehouses = useMemo(() => {
        let filteredList = warehouseDetails;

        if (selectedCity) {
            // Filter by selected city
            filteredList = filteredList.filter((warehouse) =>
                warehouse.city.toLowerCase() === selectedCity.toLowerCase()
            );
        }

        if(selectedCluster){
            //filter by selected cluster
            filteredList = filteredList.filter((warehouse)=> 
                warehouse.cluster === selectedCluster
            );
        }
        if(selectedSquareFit){
            //filter by selecetd square fit
            filteredList = filteredList.filter((warehouse)=>
                parseInt(warehouse.space_available) === parseInt(selectedSquareFit)
            );
        }

        if (searchTerm) {
            // Filter by search term
            filteredList = filteredList.filter((warehouse) =>
                warehouse.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

    return filteredList;
    }, [ warehouseDetails, searchTerm, selectedCity, selectedCluster, selectedSquareFit ]);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
    };

    const handleCityFilterChange = (e) => {
        const val = e.target.value;
        setSelectedCity(val);
    };

    const handleClusterFilter = (e) => {
        const val  = e.target.value;
        setSelectedCluster(val);
    }

    const handleSpaceFilter = (e) => {
        const val  = e.target.value;
        setSelectedSquareFit(val)
    }
    // Update the filtered list when the searchTerm or selectedCity changes
    useEffect(() => {
        setFilterWarehouse(filteredWarehouses);
    }, [filteredWarehouses]);

    const checkLocalStorageData = () => {
        const editedData = JSON.parse(localStorage.getItem('editedData')); 
        return !!editedData; 
    };

    const isLocalStorageDataAvailable = checkLocalStorageData();
    const clearLocalStorageData = () => {
        localStorage.removeItem('editedData');
        window.location.reload();
    };

    return (
        <div className="bg-white shadow-md p-4 mb-4 rounded-md m-10">
            <h1 className='mb-2'><strong>Warehouse Details </strong></h1>
            <SearchFuntionality searchTerm={searchTerm} handleSearch={handleSearch}/>
            <div className='mt-2'>
                <label>
                    <strong> Filter by:</strong>
                    <select value={selectedCity} onChange={handleCityFilterChange} className='bg-gray-400 rounded-sm p-0.5'>
                        <option value="">All Cities</option>
                        {/* Assuming warehouseDetails is an array of objects with a 'city' property */}
                        {Array.from(new Set(warehouseDetails.map((warehouse) => warehouse.city))).map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <select value={selectedCluster} onChange={handleClusterFilter} className='bg-gray-400 rounded-sm ml-2 p-0.5'>
                        <option value="">All Cluster</option>
                        {/* Assuming warehouseDetails is an array of objects with a 'city' property */}
                        {Array.from(new Set(warehouseDetails.map((warehouse) => warehouse.cluster))).map((cluster, index) => (
                            <option key={index} value={cluster}>{cluster}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <select value={selectedSquareFit} onChange={handleSpaceFilter} className='bg-gray-400 rounded-sm ml-2 p-0.5'>
                        <option value="">All Space_available</option>
                        {/* Assuming warehouseDetails is an array of objects with a 'city' property */}
                        {Array.from(new Set(warehouseDetails.map((warehouse) => warehouse.space_available))).map((space, index) => (
                            <option key={index} value={space}>{space}</option>
                        ))}
                    </select>
                </label>
            </div>
            <ul className=''>
                {searchTerm.length === 0
                    ? filterWarehouse.map((warehouse, index) => (
                        <WarehouseCard key={index} warehouse={warehouse} buttonProps = {"View Details"} />
                    ))
                    : filterWarehouse.map((warehouse, index) => (
                        <WarehouseCard key={index} warehouse={warehouse} buttonProps = {"View Details"} />
                    ))}
            </ul>
            {isLocalStorageDataAvailable && (
            <button className='bg-red-400 font-bold p-2 rounded-sm w-full mt-2' onClick={clearLocalStorageData}>Clear Local Storage Data</button>
        )}
        </div>
    );
}

export default WarehouseList;
