import "./search-panel.css";

const SearchPanel = (props) => {
  const onChangeInput = (e) => {
    const search = e.target.value.toLowerCase();
    props.searchInputHandler(search);
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
