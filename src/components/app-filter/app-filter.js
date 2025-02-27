import "./app-filter.css";
const AppFilter = (props) => {
  const onButtonClick = (name) => {
    props.filterInputHandler({ filter: name });
  };
  const btnArray = [
    { name: "all", label: "Barcha kinolar" },
    { name: "popular", label: "Mashxur kinolar" },
    { name: "mostviewers", label: "Eng ko'p ko'rilgan kinolar" },
  ];
  return (
    <div className="btn-group">
      {btnArray.map((btn) => {
        return (
          <button
            className={`btn ${props.filter === btn.name ? "btn-dark" : ""} `}
            type="button"
            onClick={()=>onButtonClick(btn.name)}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
