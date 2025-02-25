import './movies-add-form.css'
import {Component} from 'react'

class AddMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      viewers: ''
    }
  }
  onValueChange = (e) => {
    console.log(e)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state)
    this.setState({
      name: '',
      viewers: ''
    })
  }
  render(){
      return (
        <div className='add-movies'>
            <h3>Yangi kino qo'shish</h3>
            <form className='add-form d-flex'>
                <input type='text' className='form-control new-post-label' placeholder='Qanday kino?' onChange={this.onValueChange} name='name' />
                <input type='number' className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" onChange={this.onValueChange} name='viewers' />
                <button type='submit' className='btn btn-outline-dark' onClick={this.onSubmit}>Qo'shish</button>
                </form>
          </div>
      )
  }
}

export default AddMovies