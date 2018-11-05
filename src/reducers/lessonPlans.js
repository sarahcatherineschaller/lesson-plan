export default (state = [], action) => {
	switch(action.type) {
		case 'GET_LESSON_PLANS':
			return action.lesson_plans;
		case 'ADD_LESSON_PLAN':
			return state.concat(action.lesson_plan);

		default:
			return state;
	}
}