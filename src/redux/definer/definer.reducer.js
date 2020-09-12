import { IconsEnum, IconsNames } from "../../enums/icons.enum";

const { DefinerAcitonTypes } = require("./definer.types");

const CATEGORIES = [
  {
    name: "Restaurants",
    icon: IconsNames.CAKE,
  },
  {
    name: "Groceries",
    icon: IconsNames.CART,
  },
  {
    name: "Shopping",
    icon: IconsNames.SHOPPING_BAG,
  },
  {
    name: "Luxury",
    icon: IconsNames.LUXURY,
  },
  {
    name: "Regular Expenses",
    icon: IconsNames.REGULAR,
  },
];

const initialState = {
  selectedCategory: null,
  categories: [...Array(CATEGORIES.length).keys()].map((val) => ({
    id: val,
    name: CATEGORIES[val].name,
    icon: IconsEnum[CATEGORIES[val].icon],
  })),
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

    default:
      return state;
  }
};

export default definerReducer;
