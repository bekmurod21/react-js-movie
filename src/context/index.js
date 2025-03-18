import { Children, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  data: [],
  search: "",
  filter: "all",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_DELETE":
      const deleteArr = state.data.filter((a) => a?.id !== payload);
      return { ...state, data: deleteArr };
    case "ON_TOGGLE_PROP":
      const { id, prop } = payload;
      const togglearr = state.data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      );
      return { ...state, data: togglearr };
    case "ADD_FORM":
      const { name, viewers } = payload;
      let newId = uuidv4();
      console.log(newId);
      const newData = { newId, name, viewers };
      return { ...state, data: [...state.data, newData] };
    case "ON_TERM":
      return { ...state, search: payload };
    case "ON_FILTER":
      return { ...state, filter: payload };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
