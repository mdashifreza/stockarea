import React from 'react'

function SearchFuntionality({ searchTerm, handleSearch}) {
    return (
        <div>
            <input type="text" className='border-2 rounded-md p-1 w-1/2'
            placeholder='Search Warehouse by Name eg: Warehouse-5454'
            value = {searchTerm}
            onChange = {handleSearch}
            />
        </div>
    )
}
export default SearchFuntionality;
