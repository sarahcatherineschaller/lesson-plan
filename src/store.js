import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import lessonPlans from './reducers/lessonPlans';
import lessonPlanFormData from './reducers/lessonPlanFormData';
import lessonPlanEditData from './reducers/lessonPlanEditData';


const reducers = combineReducers({
	lesson_plans,
	lessonPlanFormData,
	lessonPlanEditData
});

const middleware = [thunk] 

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(...middleware)
);