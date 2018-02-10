// UPDATE FORM INPUT VALUE
export const formUpdateValue = (name, value) => {
    return {
        type: 'FORM_UPDATE_VALUE',
        name, 
        value
    };
};