import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

//Estado Incial y Global de la App
const initialState = {
  counter: 0,
};

// Definimos las acciones de la App
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer: una función pura que gestiona los cambios en el estado en función de las acciones
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
}

// Creamos la store
const store = Redux.createStore(counterReducer);

export default store;
