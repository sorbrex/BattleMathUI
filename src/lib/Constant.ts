import {fade} from "svelte/transition";

export const MODAL_SETTINGS = {
	name: 'Game Over',
	transition: fade,
	transitionParams: { duration: 200 },

	escapeToClose: false,
	clickOutsideToClose: false
}

export const MODAL_STYLE =  {
	breakpoints: {
		'32rem': {
			maxWidth: '350px',
			margin: '1rem',
			borderRadius: '10px',
			centered: true,
		},
	},
}
