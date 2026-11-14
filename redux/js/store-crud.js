import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

const store = Redux.createStore(todoReducer);

export default store;
