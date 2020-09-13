const { DefinerAcitonTypes } = require("./definer.types");

const initialState = {
  selectedCategory: null,
  categories: [],
};

const definerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DefinerAcitonTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case DefinerAcitonTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case DefinerAcitonTypes.UPDATE_CATEGORY_VALUE: {
      const newCategories = [...state.categories];
      newCategories.find((cat) => cat.id === action.payload.categoryID).value =
        action.payload.value;

      return {
        ...state,
        categories: newCategories,
        selectedCategory: {
          ...state.selectedCategory,
          value: action.payload.value,
        },
      };
    }

    default:
      return state;
  }
};

export default definerReducer;
