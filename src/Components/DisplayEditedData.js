import { useState } from 'react';

export const useEditedData = () => {
    const [editedData, setEditedData] = useState(null);

    const saveEditedData = (data) => {
        localStorage.setItem('editedData', JSON.stringify(data));
        setEditedData(data);
    };

    const clearEditedData = () => {
        localStorage.removeItem('editedData');
        setEditedData(null);
    };

    return { editedData, saveEditedData, clearEditedData };
};
