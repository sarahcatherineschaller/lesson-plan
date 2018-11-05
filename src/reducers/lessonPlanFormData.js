const initialState = { 
	title: '', 
	grade_level: '', 
	subject: '', 
	total_time: '', 
	objective: '', 
	materials: '', 
	summary: '', 
	other: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATED_DATA':
			return action.lessonPlanFormData;

		default:
			return state;
	}
}