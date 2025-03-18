import { useContext } from "react";
import "./search-panel.css";
import { Context } from "../../context";

const SearchPanel = (props) => {
  const { _, dispatch } = useContext(Context);
  const onChangeInput = (e) => {
    const search = e.target.value.toLowerCase();
    dispatch({ type: "ON_TERM", payload: search });
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={onChangeInput}
      value={props.search}
    />
  );
};

export default SearchPanel;
