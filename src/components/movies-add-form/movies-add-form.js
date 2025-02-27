import "./movies-add-form.css";
import { Component } from "react";

class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onAddhandler = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.viewers);
    this.setState({
      name: "",
      viewers: "",
    });
  };

  render() {
    return (
      <div className="add-movies">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.onAddhandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            value={this.state.name}
            onChange={this.onValueChange}
            name="name"
          />
          <input
            type="number"
            value={this.state.viewers}
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            onChange={this.onValueChange}
            name="viewers"
          />
          <button
            disabled={this.state.name === "" || this.state.viewers === ""}
            type="submit"
            className="btn btn-outline-dark"
          >
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovies;
