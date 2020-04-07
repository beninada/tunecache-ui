import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Here we set up hot module replacement (HMR) for the reducer so that
// whenever we change redux reducer logic Create-React-App will rebuild
// the app and devs will see changes without having to refresh the page
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root.reducer", () => {
    const newRootReducer = require("./root.reducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
