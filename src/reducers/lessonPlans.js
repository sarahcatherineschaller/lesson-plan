export default (state = [], action) => {
	switch(action.type) {
		case 'GET_LESSON_PLANS':
			return action.lesson_plans;

		default:
			return state;
	}
}