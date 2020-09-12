import { LayoutAcitonTypes } from "./layout.types";

export const toggleSidebar = (isOpen) => ({
  type: LayoutAcitonTypes.TOGGLE_SIDEBAR,
  payload: isOpen,
});
