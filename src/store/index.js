import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { expenseSlice } from "./expense/expense-slice";
import { PersistGate } from "redux-persist/integration/react"; // Step 7: Import PersistGate

// 1. Combine the reducers into a single reducer
const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

// 2. Create a basic configuration to tell Redux to use local storage
const persistConfig = {
  key: "root",
  storage: storage,
};

// 3. Persist the reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Send the persisted reducer to the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create a persisted version of the store
const persistor = persistStore(store); // Renamed persistore to persistor

// 6. Export the persisted version of the store
export { store, persistor }; // Renamed persistore to persistor

// 7. Use the PersistGate component to give access to your persisted store
// Uncomment and wrap your application with the PersistGate component.
// Example:

// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store';

// const App = () => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {/* Your application components */}
//     </PersistGate>
//   </Provider>
// );

// 8. Redux Toolkit automatically handles the serialization of actions with the serializableCheck option.

// Note: Make sure to install the required packages (redux-persist, redux-persist/lib/storage, etc.) using npm or yarn before running the application.
