import React, { useContext } from "react";
import "./movie-list-item.css";
import { Context } from "../../context";
import { type } from "@testing-library/user-event/dist/type";

const MovieListItem = (props) => {
  const { name, viewers, islike, increase, id } = props;

  const { _, dispatch } = useContext(Context);

  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };
  const onToggleValue = (e) => {
    const payload = {
      id,
      prop: e.currentTarget.getAttribute("data-toggle"),
    };
    dispatch({ type: "ON_TOGGLE_PROP", payload });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        increase && "increase"
      } ${islike && "like"}`}
    >
      <span
        onClick={onToggleValue}
        className="list-group-item-label"
        data-toggle="islike"
      >
        {" "}
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          type="button"
          onClick={onToggleValue}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;
