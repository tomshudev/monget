import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import layoutReducer from "./layout/layout.reducer";
import definerReducer from "./definer/definer.reducer";

export default combineReducers({
  user: userReducer,
  layout: layoutReducer,
  definer: definerReducer,
});
