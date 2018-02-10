import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/formReducer";
import moment from 'moment';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    startData: moment().format('DD.MM.YYYY')
};
const middleware = applyMiddleware(logger);

export default createStore( reducer, initialState, middleware );