import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { isClient } from '@/utils/detect';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  // devTools: !!DEVELOPMENT,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// if (DEVELOPMENT && module.hot) {
//     module.hot.accept('./root_reducer', () => {
//         const newRootReducer = require('./root_reducer').default
//         store.replaceReducer(newRootReducer)
//     })
// }

sagaMiddleware.run(rootSaga);

if (isClient()) {
  // @ts-ignore
  window.getDebugState = () => {
    console.log(JSON.stringify(store.getState()));
  }
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper<typeof store>(() => store);

export const persistor = persistStore(store);
export default store;
