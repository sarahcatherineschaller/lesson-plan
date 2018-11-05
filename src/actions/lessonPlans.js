const setLessonPlans = lesson_plans => {
	return {
		type: 'GET_LESSON_PLANS',
		lesson_plans
	}
}

const addLessonPlan = lesson_plan => {
	return {
		type: 'CREATE_LESSON_PLAN',
		lesson_plan
	}
}


export const getLessonPlans = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/lesson_plans')
		.then(response => response.json())
		.then((data) => {this.setState({ lesson_plans: data }) })
		.then(lesson_plans => dispatch(setLessonPlans(lesson_plans)))
		.catch(error => console.log(error))
	}
}

export const createLessonPlan = lesson_plan => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/lesson_plans', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(lesson_plan)
		})
			.then(response => response.json())
			.then(lesson_plan => dispatch(addLessonPlan(lesson_plan)))
			.catch(error => console.log(error))
	}
}