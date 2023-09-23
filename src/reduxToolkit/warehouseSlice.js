import { createSlice } from '@reduxjs/toolkit';
import warehouseData from './warehouse.json';

const localEditedData = JSON.parse(localStorage.getItem('editedData'));
const initialData = localEditedData ? [localEditedData] : warehouseData;

const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState: {
        warehouseDetails: initialData,
    },
    reducers: {
        updateWarehouse: (state, action) => {
            const updatedIndex = state.warehouseDetails.findIndex(item => item.id === action.payload.id);
            if (updatedIndex !== -1) {
                state.warehouseDetails[updatedIndex] = action.payload;
            }
        },
    },
});

export const { updateWarehouse } = warehouseSlice.actions;
export default warehouseSlice.reducer;
