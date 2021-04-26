import React, { useContext, useReducer, createContext } from "react";

const Context = createContext();
const initialState = {
  cart: {},
};

export function useGlobaContext() {
  const [state, dispatch] = useContext(Context);

  if (!state || !dispatch) {
    throw new Error(`useGlobalContext must be use within a Provider`);
  }
  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;
    default: {
      throw new Error(`unhandle Action Type ${action.type}`);
    }
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
