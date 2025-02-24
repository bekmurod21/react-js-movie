import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import AddMovies from '../movies-add-form/movies-add-form';

const App = () => {
    const data = [
        { name:"Free Guy", viewers:"156",increase: false},
        {name:'Salom sevgim gunchasi', viewers:'123',increase: true},
        {name:'Overloading', viewers:'4585',increase: false},
        {name:'Forrest Gump', viewers:'963',increase: false},
        {name:'The Shawshank Redemption', viewers:'852',increase: false},
        {name:'The Dark Knight', viewers:'741',increase: true},
    ]

 return <div className='app font-monospace'>
    <div className='content'>
        <AppInfo />
        <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
        </div>
        <MovieList data={data} />
        <AddMovies />
    </div>
 </div>
}

export default App;