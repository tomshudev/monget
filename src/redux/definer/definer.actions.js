import { DefinerAcitonTypes } from "./definer.types";

export const selectCategory = (category) => ({
  type: DefinerAcitonTypes.SELECT_CATEGORY,
  payload: category,
});

export const setCategories = (categories) => ({
  type: DefinerAcitonTypes.SET_CATEGORIES,
  payload: categories,
});

export const updateCategoryValue = (categoryID, value) => ({
  type: DefinerAcitonTypes.UPDATE_CATEGORY_VALUE,
  payload: { categoryID, value },
});
