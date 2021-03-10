import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import M from 'materialize-css'
import weather from './weather.json'

import Header from './Header'
import Modal from './Modal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      showModal: false,
    }
  }

  componentDidMount() {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    // axios.get(url).then((response) => {
    //   this.setState({
    //     temp: response.data.main.temp,
    //   })
    // })
    this.setState({
      temp: weather[0].main.temp,
      cityName: weather[0].name,
      weather: weather[0].weather[0].description,
      high: weather[0].main.temp_max,
      low: weather[0].main.temp_min,
      icon: weather[0].weather[0].icon,
    })

    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems)
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`
    return (
      <div className="App">
        <Header cityName={this.state.cityName} temp={this.state.temp} />

        <button data-target='modal1' className='btn modal-trigger'>
          Modal
        </button>

        <Modal
          cityName={this.state.cityName}
          high={this.state.high}
          low={this.state.low}
          wheather={this.state.weather}
          iconUrl={iconUrl}
        />
        
      </div>
    )
  }
}

export default App
