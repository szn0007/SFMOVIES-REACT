import { createStore, combineReducers, applyMiddleware } from 'redux'
import { movies, isLoading, movieDetails } from './reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = {
  movies,
  isLoading,
  movieDetails
}

const rootReducer =  combineReducers(reducers)

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )