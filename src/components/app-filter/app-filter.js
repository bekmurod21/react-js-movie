import "./app-filter.css";
const AppFilter = (props) => {
  const onButtonClick = (name) => {
    props.filterInputHandler(name);
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
            className={`btn ${props.filter === btn.name ? "btn-dark" : ""} `}
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
