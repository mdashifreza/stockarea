import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import WarehouseCard from './WarehouseCard';

function EditWarehouse({ warehouseDetails }) {
    const { id } = useParams();
    const filterWarehouseWithId = warehouseDetails.filter((warehouse)=>
        warehouse.id === parseInt(id)
    );

    const navigate = useNavigate();

    const handleButton = ()=>{
        navigate(`/editform/${id}`, { state: { filterWarehouseWithId } });
    }

    return (
        <div className="bg-white shadow-md p-4 mb-4 rounded-md m-10">
            {   
                filterWarehouseWithId.map((warehouse, index) => (
                    <WarehouseCard key={index} warehouse={warehouse} buttonProps = {"edit"} handleButton={handleButton} />
                ))
            }
        </div>
    );
}

export default EditWarehouse;
