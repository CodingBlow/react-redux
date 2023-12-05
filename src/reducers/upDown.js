const initialState = 0;

export const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state < 50 ? state + 1 : state;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    case "PLUSFIVE":
      return state < 50 ? state + action.payload : state;
    case "MINUSFIVE":
      return state > 0 ? state - action.payload : state;
    default:
      return state;
  }
};
