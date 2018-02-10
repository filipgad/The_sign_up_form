import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/formReducer";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    startDate: ''
};
const middleware = applyMiddleware(logger);

export default createStore( reducer, initialState, middleware );