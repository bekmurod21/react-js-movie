import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import AddMovies from "../movies-add-form/movies-add-form";
import { useState, useRef } from "react";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Free Guy",
      viewers: "156",
      increase: false,
      islike: false,
    },
    {
      id: 2,
      name: "Overloading",
      viewers: "4585",
      increase: false,
      islike: false,
    },
    {
      id: 3,
      name: "Salom sevgim gunchasi",
      viewers: "123",
      increase: true,
      islike: false,
    },
    {
      id: 4,
      name: "Forrest Gump",
      viewers: "963",
      increase: false,
      islike: false,
    },
    {
      id: 5,
      name: "The Shawshank Redemption",
      viewers: "852",
      increase: false,
      islike: false,
    },
    {
      id: 6,
      name: "The Dark Knight",
      viewers: "741",
      increase: true,
      islike: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const onAdd = (name, viewers) => {
    const id = data[data.length - 1].id + 1;
    const newData = { id, name, viewers };
    setData([...data, newData]);
  };
  const onToggleValue = (id, prop) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      )
    );
  };
  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.islike);
      case "mostviewers":
        return arr.filter((item) => item.viewers > 500);
      default:
        return arr;
    }
  };
  const searchHandler = (arr, search) => {
    if (search.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().includes(search));
  };
  const searchInputHandler = (search) => setSearch(search);
  const filterInputHandler = (filter) => setFilter(filter);
  const allMovies = data.length;
  const likedMovies = data.filter((item) => item.islike).length;
  const visibleData = searchHandler(filterHandler(data, filter), search);
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMoviesCount={allMovies} likedMoviesCount={likedMovies} />
        <div className="search-panel">
          <SearchPanel searchInputHandler={searchInputHandler} />
          <AppFilter filter={filter} filterInputHandler={filterInputHandler} />
        </div>
        <MovieList
          data={visibleData}
          onToggleValue={onToggleValue}
          onDelete={onDelete}
        />
        <AddMovies onAdd={onAdd} />
      </div>
    </div>
  );
};

export default App;
