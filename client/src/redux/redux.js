import {createStore, combineReducers} from 'redux'
import authReducer from "./auth-reducer";
import moviesReducer from "./movies-reducer";
import genresReducer from "./genres-reducer";
import channelsReducer from "./channels-reducer";
import modalsReducer from "./modals-reducer";

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  genres: genresReducer,
  channels: channelsReducer,
  modals: modalsReducer
})

const store = createStore(reducers)

window.state = store.getState()

export default store