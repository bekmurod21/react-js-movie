import React from "react";
import "./movie-list-item.css";

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggleValue, islike, increase } = props;
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
