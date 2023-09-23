import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse } from "../reduxToolkit/warehouseSlice";
import { useEditedData } from "./DisplayEditedData";

function EditForm() {
    const { id } = useParams();
    const { saveEditedData } = useEditedData();
    const warehouseDetails = useSelector((state) => state.warehouse.warehouseDetails);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [spaceAvailable, setSpaceAvailable] = useState("");
    const [cluster, setCluster] = useState("");

    const filterValue = warehouseDetails.find((item) =>
        item.id === parseInt(id)
    );

    // useEffect(() => {
    //     if (filterValue) {
    //         // If filterValue exists, set the cluster state
    //         setCluster(filterValue.cluster);
    //     }
    // }, [filterValue]);

    const handleClusterChange = (e) => {
        setCluster(e.target.value.toString());
    };

    const handleSpaceAvailableChange = (e) => {
        setSpaceAvailable(Number(e.target.value));
    };

    const handleSave = () => {
        const updatedData = {
            ...filterValue,
            cluster,
            space_available: spaceAvailable,
        };
        // Save edited data to local storage
        saveEditedData(updatedData);
        // Dispatch the update action
        dispatch(updateWarehouse(updatedData));
        navigate('/');
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 m-10 w-full sm:w-1/2">
            <h2 className="text-xl font-semibold">Edit The Warehouse Details</h2>
            <h2 className="text-xl font-semibold"><strong>Selected Warehouse: </strong>{filterValue && filterValue.name}</h2>
            <form className="bg-white shadow-md p-4 mb-4 rounded-md m-10">
                <div className="flex flex-col mb-4">
                    <label htmlFor="cluster" className="mb-2 font-semibold">Cluster:</label>
                    <input
                        type="text"
                        id="cluster"
                        className="border-2 rounded-md border-gray-400 focus:outline-none focus:border-black px-4 py-2"
                        value={cluster}
                        onChange={handleClusterChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="city" className="mb-2 font-semibold">City </label>
                    <input
                        type="text"
                        id="city"
                        className="border-2 rounded-md border-gray-400 focus:outline-none focus:border-black px-4 py-2"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="city" className="mb-2 font-semibold">Warehouse Name:</label>
                    <input
                        type="text"
                        id="city"
                        className="border-2 rounded-md border-gray-400 focus:outline-none focus:border-black px-4 py-2"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="spaceAvailable" className="mb-2 font-semibold">Space Available:</label>
                    <input
                        type="number"
                        id="spaceAvailable"
                        className="border-2 rounded-md border-gray-400 focus:outline-none focus:border-black px-4 py-2"
                        value={spaceAvailable}
                        onChange={handleSpaceAvailableChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="city" className="mb-2 font-semibold">Warehouse Live:</label>
                    <input
                        type="text"
                        id="city"
                        className="border-2 rounded-md border-gray-400 focus:outline-none focus:border-black px-4 py-2"
                    />
                </div>
            </form>
            <button className="bg-red-400 font-bold p-2 rounded-sm w-full" onClick={handleSave}>Save</button>
        </div>

    );
}

export default EditForm;
