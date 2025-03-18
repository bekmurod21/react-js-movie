import { useContext } from "react";
import "./app-filter.css";
import { Context } from "../../context";
const AppFilter = () => {
  const { state, dispatch } = useContext(Context);
  const onButtonClick = (name) => {
    dispatch({ type: "ON_FILTER", payload: name });
  };
  const btnArray = [
    { id: 1, name: "all", label: "Barcha kinolar" },
    { id: 2, name: "popular", label: "Mashxur kinolar" },
    { id: 3, name: "mostviewers", label: "Eng ko'p ko'rilgan kinolar" },
  ];
  return (
    <div className="btn-group">
      {btnArray.map((btn) => {
        return (
          <button
            key={btn.id}
            className={`btn ${state.filter === btn.name ? "btn-dark" : ""} `}
            type="button"
            onClick={() => onButtonClick(btn.name)}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
