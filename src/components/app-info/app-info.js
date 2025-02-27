import "./app-info.css";

const AppInfo = (props) => {
  const { allMoviesCount, likedMoviesCount } = props;
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {allMoviesCount}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar soni: {likedMoviesCount}
      </p>
    </div>
  );
};

export default AppInfo;
