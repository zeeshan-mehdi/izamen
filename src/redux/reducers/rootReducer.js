/** @format */

import { combineReducers } from "redux";
import ListingReducer  from "./ListingReducer";
import UserReducer from "./UserReducer"
import AgentReducer from "./AgentReducer";
const rootReducer = combineReducers({
  listingReducer: ListingReducer,
  userReducer:UserReducer,
  agentReducer:AgentReducer
});

export default rootReducer;
