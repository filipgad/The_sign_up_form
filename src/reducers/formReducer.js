const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_UPDATE_VALUE':
            state = Object.assign({}, state, {
                [action.name]: action.value
            });
            break;
        case 'SET_NEW_DATE':
            state = {
                ...state,
                startDate: action.date
            };
            break;
    }
    return state;
};

export default reducer;