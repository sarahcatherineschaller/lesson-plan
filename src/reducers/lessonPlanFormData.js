const intialState = {
	title: '', 
	grade_level: '', 
	subject: '', 
	total_time: '', 
	objective: '', 
	materials: '', 
	summary: '', 
	other: '',
}

export default (state = intialState, action) => {
	switch(action.type) {
		case 'UPDATE_LESSON_PLAN':
			return action.lessonPlanFormData 

		default:
			return state;
	}
}