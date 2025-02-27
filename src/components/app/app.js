import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import AddMovies from "../movies-add-form/movies-add-form";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      search: "",
      filter: "all",
    };
  }
  onDelete = (id) => {
    console.log(id);
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  onAdd = (name, viewers) => {
    this.setState(({ data }) => {
      const id = data[data.length - 1].id + 1;
      const newData = { id, name, viewers };
      return { data: [...data, newData] };
    });
  };
  onToggleValue = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          return item.id === id ? { ...item, [prop]: !item[prop] } : item;
        }),
      };
    });
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.islike);
      case "mostviewers":
        return arr.filter((item) => item.viewers > 500);
      default:
        return arr;
    }
  };
  searchHandler = (arr, search) => {
    if (search.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().includes(search));
  };

  searchInputHandler = (search) => this.setState(search);
  filterInputHandler = (filter) => this.setState(filter);
  render() {
    const { data, search,filter } = this.state;
    const allMovies = data.length;
    const likedMovies = data.filter((item) => item.islike).length;
    const visibleData = this.searchHandler(this.filterHandler(data,filter), search);

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMovies} likedMoviesCount={likedMovies} />
          <div className="search-panel">
            <SearchPanel searchInputHandler={this.searchInputHandler} />
            <AppFilter filter={filter} filterInputHandler={this.filterInputHandler} />
          </div>
          <MovieList
            data={visibleData}
            onToggleValue={this.onToggleValue}
            onDelete={this.onDelete}
          />
          <AddMovies onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;
