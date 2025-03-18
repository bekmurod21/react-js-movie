import { Context } from "../../context";
import "./movies-add-form.css";
import { Component, useContext, useState } from "react";

const AddMovies = () => {
  const [name, setName] = useState("");
  const [viewers, setViewers] = useState("");
  const { _, dispatch } = useContext(Context);
  const onAddhandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FORM", payload: { name, viewers } });
    setName("");
    setViewers("");
  };
  return (
    <div className="add-movies">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={onAddhandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={viewers}
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan?"
          onChange={(e) => setViewers(e.target.value)}
        />
        <button
          disabled={name === "" || viewers === ""}
          type="submit"
          className="btn btn-outline-dark"
        >
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
