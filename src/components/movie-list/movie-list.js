import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data}) => {

  return (
    <ul className='movie-list'>
        {data.map(element => (
           <MovieListItem key={element?.id} {...element}/>
        ))}
    </ul>
  )
}

export default MovieList