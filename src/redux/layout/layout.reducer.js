import { LayoutAcitonTypes } from "./layout.types";

const initialState = {
  isSidebarOpen: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LayoutAcitonTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };

    default:
      return state;
  }
};

export default layoutReducer;
