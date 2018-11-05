import React from 'react';

export default function LessonPlan({lesson_plans}) {
	const list = () => {
		return lesson_plans.map(lesson_plan => {
			return(
				
				<li key={lesson_plan.id}>{lesson_plan.title}</li>
			)
		})
	}

	return (
		<div>
			<ul>
				{ list() }
			</ul>
		</div>
	)
}