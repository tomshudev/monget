export const initialState = {
  isSidebarOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
