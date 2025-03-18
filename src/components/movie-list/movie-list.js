import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
import { useContext } from "react";
import { Context } from "../../context";
import { searchHandler, filterHandler } from "../../utilities/data";
const MovieList = () => {
  const { state } = useContext(Context);
  const data = searchHandler(
    filterHandler(state.data, state.filter),
    state.search
  );

  return (
    <ul className="movie-list">
      {data.map((element) => (
        <MovieListItem key={element?.id} {...element} />
      ))}
    </ul>
  );
};

export default MovieList;
