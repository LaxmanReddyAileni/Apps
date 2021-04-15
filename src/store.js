import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import sampleReducer, { sampleInitialState } from "./store/sample/sampleSlice";

export const INITIAL_STATE = {
  sample: sampleInitialState(),
};

const combinedReducer = combineReducers({
  sample: sampleReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
  preloadedState: INITIAL_STATE,
});
