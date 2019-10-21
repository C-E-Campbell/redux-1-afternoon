import { createStore } from "redux";

const initialState = {
	recipeName: "",
	recipeCategory: "",
	authorFirstName: "",
	authorLastName: ""
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME";
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NAME:
			return { ...state, recipeName: action.payload };
		case UPDATE_CATEGORY:
			return { ...state, recipeCategory: action.payload };
		case UPDATE_AUTHOR_FIRST_NAME:
			return { ...state, authorFirstName: action.payload };
		case UPDATE_AUTHOR_LAST_NAME:
			return { ...state, authorLastName: action.payload };
		default:
			return state;
	}
};

export default createStore(reducer);
