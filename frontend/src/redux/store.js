import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/Auth";

// const initialState = {
//   value: false,
// };

export default configureStore({
  reducer: {
    auth: authReducer,
  }
})