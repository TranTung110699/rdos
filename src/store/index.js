import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { whitelist } from "./persist-keys";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
