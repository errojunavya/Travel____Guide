import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import LocationItem from '../LocationItem'

class Home extends Component {
  state = {locationsList: [], isLoading: false}

  componentDidMount() {
    this.getLocations()
  }

  getLocations = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.packages.map(eachLocation => ({
        id: eachLocation.id,
        name: eachLocation.name,
        imageUrl: eachLocation.image_url,
        description: eachLocation.description,
      }))
      this.setState({locationsList: updatedData, isLoading: false})
    }
  }

  renderLocationsList = () => {
    const {locationsList} = this.state
    return (
      <ul className="locations-list">
        {locationsList.map(each => (
          <LocationItem key={each.id} locationDetails={each} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line" />
        <div className="locations-container">
          {isLoading ? this.renderLoadingView() : this.renderLocationsList()}
        </div>
      </div>
    )
  }
}
export default Home
