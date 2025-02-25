import React from 'react';
import './movie-list-item.css';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: props.increase,islike: false
    }
  }
  setOnclick = () => {
    this.setState(prev => ({
      increase: !prev.increase}))
  }
  changeIsLike = () => {
    this.setState(prev => ({
      islike: !prev.islike}))
  }
   render() {
    const {name,viewers} = this.props;
    const {increase,islike} = this.state;
    return (
      <li className={`list-group-item d-flex justify-content-between ${increase && 'increase'} ${islike && 'like'}`}> 
          <span onClick={this.changeIsLike} className='list-group-item-label'> {name}</span>
          <input type='number' className='list-group-item-input' defaultValue={viewers} />
          <div className='d-flex justify-content-center align-items-center'>
              <button className='btn-cookie btn-sm' type='button' onClick={this.setOnclick}>
                  <i className='fas fa-cookie'></i>
              </button>
              <button className='btn-trash btn-sm' type='button'>
                  <i className='fas fa-trash'></i>
              </button>
              <i className='fas fa-star'></i>
          </div>
      </li>
    )
   }

}

// const MovieListItem = ({name,viewers,increase}) => {
//   console.log(increase,'increase')
//   return (
//     <li className={`list-group-item d-flex justify-content-between ${increase && 'increase'}`}> 
//         <span className='list-group-item-label'> {name}</span>
//         <input type='number' className='list-group-item-input' defaultValue={viewers} />
//         <div className='d-flex justify-content-center align-items-center'>
//             <button className='btn-cookie btn-sm' type='button'>
//                 <i className='fas fa-cookie'></i>
//             </button>
//             <button className='btn-trash btn-sm' type='button'>
//                 <i className='fas fa-trash'></i>
//             </button>
//             <i className='fas fa-star'></i>
//         </div>
//     </li>
//   )
// }

export default MovieListItem