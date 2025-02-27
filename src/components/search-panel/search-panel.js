import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }
  onChangeInput = (e) => {
    const search = e.target.value.toLowerCase();
    this.props.searchInputHandler({ search });
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.onChangeInput}
        value={this.props.search}
      />
    );
  }
}

export default SearchPanel;
