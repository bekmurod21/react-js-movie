import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ data, onDelete, onToggleValue }) => {
  return (
    <ul className="movie-list">
      {data.map((element) => (
        <MovieListItem
          key={element?.id}
          {...element}
          onToggleValue={(e) => onToggleValue(element.id, e.currentTarget.getAttribute("data-toggle"))}
          onDelete={() => onDelete(element.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
