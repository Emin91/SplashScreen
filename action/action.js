

export const chacgebg = (id) => (
	{
		type: 'Change',
		id,
		payload: changeColor.color, id
	}
)

export const changeColor = (color) => (
	{
		type: 'ChangeColor',
		color,
		payload: chacgebg.id, color
	}
)

