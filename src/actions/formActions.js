// UPDATE FORM INPUT VALUE
export const formUpdateValue = (name, value) => {
    return {
        type: 'FORM_UPDATE_VALUE',
        name, 
        value
    };
};

// SET NEW DATE
export const setNewDate = (date) => {
    return {
        type: 'SET_NEW_DATE',
        date
    };
};