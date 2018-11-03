const setLessonPlans = lesson_plans => {
	return {
		type: 'GET_LESSON_PLANS',
		lesson_plans
	}
}


export const getLessonPlans = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/lesson_plans')
		.then(response => response.json())
		.then(lesson_plans => dispatch(setLessonPlans(lesson_plans)))
		.catch(error => console.log(error))
	}
}